#!/usr/bin/env bash

## @fn archive_website.bash
## @brief given the URL, attempt to create an archive of said site
## @details
## This will create an archive (a gzipped tar file, specifically) of a web
## site located at a provided URL.
##
## Internally, this tool uses 'wget' to make a mirror copy of the requested
## site.  Any assets (images, CSS files, JavaScript, HTML, etc.) referenced
## along the way is downloaded locally and the links to those assets are
## updated to point to the local copies.
##
## Once the mirror is complete, a compressed tarball is created containing
## all of the downloaded content.  In essence, this creates a build artifact
## that can be examined offline at a later date.
##
## Additionally, if the tool encounters any 400 or 500 HTTP responses (client-
## and server-side errors, respectively), then the tool will a 100 result
## code.
##
## The original purpose of this tool was to determine if a site build was
## successful.  There were instances where a site would be built with HTML
## that referenced incorrect asset filenames.  Therefore, the homepage would
## return a 200 HTTP response and the text of the site would appear to be
## correct; however, the site would appear to be "broken" because the CSS
## and other assets wouldn't load.  This ought to test for conditions like
## those.
##
## Unfortunately (for us), one of the first things wget would do would be to
## look for a '/robots.txt' file.  In the event that a site didn't include
## one, wget would issue a message saying that it was attempting to load
## robots.txt and to ignore any errors message followed by several lines of
## log output and, finally, a 404 error saying that the robots.txt file
## couldn't be loaded.  As a result, it invovled some sed magic to look for
## messages like those and remove the resulting error messages so that we could
## scan the log file for actual 400 and 500 level HTTP responses.
##
## So, in the event that an asset is missing, this tool will return a non-zero
## result code; otherwise, it'll write the filename of the archive it created
## to STDOUT.
## @author The TTS Website Team

set -euo pipefail

## @fn slugify()
## @brief this will write a string suitable for use as a slug to STDOUT
## @details
## Many Content Management Systems (CMSs) refer to a modified path / filename
## that may be safely used without having to URL-escape characters as a
## "slug".  Slugs are typically sanitized with problematic characters (e.g.,
## those that change directories, fork processes, separate commands, etc.)
## removed.  Slugs are also limited in length, typically to 63 characters
## to prevent overflows.  Strings of one or more non-alphanumeric characters
## are replaced by a single '-',
##
## So, for example, "Hello, World!" would be slugified as "hello-world"
##
## This will accept zero or more strings as parameters and return
## "slugified" versions of those strings.
##
## The results of this are written to STDOUT, one string (argument) per line
## @param string[] strings to slugify
## @returns slugified strings via STDOUT, one per line
## @par Examples
## @code
## URL="http://tts.gsa.gov/"
## archive="$(slugify "$URL")"
## @endcode
slugify() {
  for string in "$@"; do
    echo "$string" \
      | iconv -c -t ascii//TRANSLIT \
      | tr '[:upper:]' '[:lower:]' \
      | sed \
        -Ee 's/[~^]+//g' \
        -Ee 's/[^[:alnum:]]+/-/g' \
        -Ee 's/^-+|-+$//g' \
        -Ee 's/.//63g'
  done
}

## @fn mirror_site()
## @brief given a URL, create a local copy of the site or return an error
## @details
## This will use wget to attempt to create a local copy -- a mirror -- of a
## site located at the requested URL.  The archive is gzip-compressed GNU
## tar file and a log file whose names are written to STDOUT upon successful
## creation.  See the detailed notes for this file for more context and detail.
##
## Several environment variables are used:
##
## - WAIT_SECONDS (how long to wait between each download)
## - RATE_LIMIT (limit maximum download limit (e.g., 500k, 2m)
##
## @param URL the URL to download
## @param options[] these options are added to wget before the URL
## @returns archive and log filenames via STDOUT
## @retval 0 (True) if the download and archive creation were successful
## @retval 100 if the download resulted in failing HTTP responses
## @par Examples
## @code
## local url="https://tts.gsa.gov/"
## my_archive="$(mirror_site "$url")" || exit 1
## @endcode
mirror_site() {

  local URL="${1?Error: no URL passed}"
  shift

  WAIT_SECONDS="${WAIT_SECONDS:-1}"
  RATE_LIMIT="${RATE_LIMIT:-500k}"

  slugified_url="$(slugify "$URL")"
  now="$(date +%Y%m%d%H%M)"
  tarball="site-archive-${slugified_url}-${now}.tar.gz"
  logfile="site-archive-${slugified_url}-${now}.log.txt"
  sitemapfile="site-archive-${slugified_url}-${now}.sitemap.txt"

  ## perform some cleanup

  if [ -e "${tarball}" ]; then
    echo "Removing old tarball '${tarball}'" 1>&2
    rm -rf "${tarball}"
  fi

  if [ -e "${sitemapfile}" ]; then
    echo "Removing old sitemap '${sitemapfile}'" 1>&2
    rm -rf "${sitemapfile}"
  fi

  if [ -e "${slugified_url}" ]; then
    echo "Removing old directory '${slugified_url}'" 1>&2
    rm -rf "${slugified_url}"
  fi

  # make sure the destination directory exists

  if [ ! -d "${slugified_url}" ]; then
    echo "Creating '${slugified_url}'" 1>&2
    mkdir -p "${slugified_url}"
  fi

  ## acquire the sitemap

  touch "$logfile"

  echo "Downloading sitemap" 1>&2
  wget \
    "${URL}sitemap.xml" \
    --append-output="${logfile}" \
    --output-document=- \
    | sed -Ene "/<loc>/p" \
    | sed -Ee "s/<[^>]*>//g" \
      > "$sitemapfile"

  ## download the site

  echo "Beginning download" 1>&2
  wget \
    --wait="${WAIT_SECONDS}" \
    --level=inf \
    --limit-rate="${RATE_LIMIT}" \
    --recursive \
    --user-agent=TTSSiteArchiver \
    --no-host-directories \
    --directory-prefix="${slugified_url}" \
    --no-parent \
    --page-requisites \
    --convert-links \
    --execute "robots=off" \
    --input-file="$sitemapfile" \
    "$@" \
    || true \
      2>&1 \
    | tee -a "${logfile}"

  ## scan the results looking for failing HTTP responses

  echo "Examining results..." 1>&2
  # shellcheck disable=SC2002
  sed -i~ -Ee '/^Loading\s*.*;\s*please ignore errors/,+5d' "${logfile}"
  grep -Eqe '^HTTP request sent.*\b[45][[:digit:]]{2}\b' \
    < "${logfile}" \
    && return 100

  echo "No 400 or 500 level errors found; creating archive." 1>&2
  tar -czf "${tarball}" "${slugified_url}"

  echo "Archive: ${tarball}"
  echo "Logs: ${logfile}"
}

## @fn main()
## @brief the main function
main() {
  mirror_site "$@"
}

# if we're not being sourced and there's a function named `main`, run it
[[ "$0" == "${BASH_SOURCE[0]}" ]] && [ "$(type -t "main")" == "function" ] && main "$@"
