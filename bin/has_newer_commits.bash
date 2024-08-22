#!/usr/bin/env bash

## @file has_newer_commits.bash
## @author TTS Website team
## @brief given two branches, compare the most recent commits' dates
## @details
## This is a compromise.  It accepts two branches and, if the second
## branch is newer than the first, it returns 0 (True); if the first
## is newer than the second, it returns 2 (False).
##
## The context for this script is we wanted to know if another
## repository was updated more recently than ours; if so, we would
## run (continue) a workflow; otherwise, we would leave well
## enough alone.  The workflow would make some changes to our
## repo and eventually push a commit to our branch which would
## make our repo (branch) newer than the other one.
##
## The "age" of branch is determined by looking at the most
## recent commit on a given branch and returning the date.  By
## "looking," we mean querying the GitHub API endpoint that
## would return a JSON object describing the repository.
##
## A branch is specified with the following form:
##
##   owner/repository@branch
##
## For example, for this repository (tts-website in GSA-TTS),
## the main branch would be referred to as
##
##  GSA-TTS/tts-website@main
##
## We filter the incoming strings so that only characters that are
## valid for a GitHub repository name are used, plus the '@'
## separator between the repo and the branch.
##
## Two branches are supported; if 3 or more are provided, the
## extra repos are ignored; if 0 or 1 are provided, it'll error
## out.
##
## The script uses the environment variable `PAT` to pass
## a GitHub Personal Access Token (PAT).  The PAT is used
## when querying the API; this allows us to query the API
## more often than an anonymous call plus it ensures that
## we're able to query repos with our credentials.  As our
## repos are all public, this is less of an issue -- it
## really is just for the API request quota.
##
## The script, right now, has a few limitations:
##
## 1. only one PAT is used, so that PAT must have access to both repos
## 2. only GitHub.com is supposed, so GHE won't work
##
## When the program ends, it returns a value via result code:
##
## 0. True: the second branch is newer than the first
## 1. Error: something went wrong
## 2. False: the first branch is newer than the second
##
## @par Examples
## @code
## has_newer_commits.bash "GSA-TTS/tts-website@main" "18F/join.tts.gsa.gov@main"
## @endcode

set -euo pipefail

## @fn die
## @brief receive a trapped error and display helpful debugging details
## @details
## When called -- presumably by a trap -- die() will provide details
## about what happened, including the filename, the line in the source
## where it happened, and a stack dump showing how we got there.  It
## will then exit with a result code of 1 (failure)
## @retval 1 always returns failure
## @par Example
## @code
## trap die ERR
## @endcode
die() {
  printf "ERROR %s in %s AT LINE %s\n" "$?" "${BASH_SOURCE[0]}" "${BASH_LINENO[0]}" 1>&2

  local i=0
  local FRAMES=${#BASH_LINENO[@]}

  # FRAMES-2 skips main, the last one in arrays
  for ((i = FRAMES - 2; i >= 0; i--)); do
    printf "  File \"%s\", line %s, in %s\n" "${BASH_SOURCE[i + 1]}" "${BASH_LINENO[i]}" "${FUNCNAME[i + 1]}"
    # Grab the source code of the line
    sed -n "${BASH_LINENO[i]}{s/^/    /;p}" "${BASH_SOURCE[i + 1]}"
  done
  exit 1
}

## @fn fetch_data()
## @brief given a GitHub URL, query it and return the result
## @details
## This is a wrapper around curl; it provides extra headers
## (e.g., the expected result format and the PAT) used to
## make the call.  The results are passed via STDOUT.
## @param url the URL to query
## @retval 0 (True) if the request was successful
## @retval 1 (False) if something went wrong
## @returns JSON object via STDOUT
## @par Examples
## @code
## json_data="$(fetch_data "$url")"
## @endcode
fetch_data() {

  url="${1?Error: no URL provided}"

  curl \
    -s \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    -H "Authorization: Bearer ${PAT}" \
    "$url"
}

## @fn compare_dates()
## @brief given 2 branches, determine if the first is newer than the second
## @details
## This will accept two branches (e.g., 'owner/repo@branch' strings) and
## use `jq` to extract the most recent commit dates and return the
## string "true" if the second branch is newer than the first or the string
## "false" if the first branch is newer than the second.  The strings are
## returned via STDOUT.
## @param a the first branch to consider
## @param b the second branch to consider
## @retval 0 (True) if everything went successfully
## @retval 1 (False) if something went wrong
## @returns "true" or "false" via STDOUT
## @par Examples
## @code
## if [ "$(compare_dates "$branch1" "$branch2")" == "true" ] ; then
##   echo "There's new stuff"
## else
##   echo "Same old same old..."
## fi
## @endcode
compare_dates() {
  local a="${1?Error: two branches must be passed}"
  local b="${2?Error: two branches must be passed}"

  {
    fetch_data "$(build_url "$a")"
    fetch_data "$(build_url "$b")"
  } | jq \
    --raw-output \
    --slurp \
    'if .[0].commit.commit.author.date < .[1].commit.commit.author.date then true else false end'
}

## @fn build_url()
## @brief given the name of a repo, construct a GitHub API URL
## @details
## This accepts one "branch" string of the format
## 'owner/repo@branch'
##
## An environment variabled `GITHUB_API_BASE` may be used to
## set the base URL for interating with GitHub (or GHE).  The
## result is a URL passed via STDOUT.
##
## Note: there's no assurance that the URL provided is valid
## or points to anything meaningful -- it's just some string
## munging in a conveninently-named helper function.
## @param branch string representing owner/repo@branch
## @retval 0 (True) if a URL was constructed
## @retval 1 (False) if something went wrong
## @returns URL to GitHub API via STDOUT
## @par Examples
## @code
## url="$(build_url "GSA-TTS/tts.gsa.gov@main")"
## @endcode
build_url() {
  item="${1?Error: no owner/repo@branch passed}"

  local GITHUB_API_BASE="${GITHUB_API_BASE:-https://api.github.com}"

  repo="${item%%@*}"
  branch="${item##*@}"

  if [ "$branch" == "$repo" ]; then
    repo="$item"
    branch="main"
  fi

  echo "${GITHUB_API_BASE}/repos/${repo}/branches/${branch}"
}

## @fn filter_branch_string()
## @brief remove potentially unsafe or invalid characters from branch names
## @details
## The names of the branches we're comparing come from outside,
## including potentially via workflow, so we want to be very safe and
## remove anything that could possibly lead to problematic strings
## being passed to `curl` or other CLI tools.  This uses `tr` to
## remove anything that's not alphanumeric, dash, underscore, slash,
## period, or at symbol.  The at symbol is used to separate the
## owner/repo from the branch name -- it's not actually a valid character
## for use in representing a git repository.  Characters that are filtered
## out are deleted, thereby reducing the length of the resulting
## string.  They are not replaced with another character (i.e., they're
## not "slugified").  The resulting string is returned via STDOUT.
## @param string the string to filter
## @retval 0 (True) if the filter was successful
## @retval 1 (False) if the filter failed for any reason
## @returns the filtered string via STDOUT
## @par Examples
## @code
## string="$(filter_branch_string "${1:-}")"
## @endcide
filter_branch_string() {
  string="${1:-}"

  echo "$string" | tr -cd '[:alnum:]\/\-\_\.\@'
}

## @fn main()
## @brief the main function
main() {
  if [ -z "$PAT" ]; then
    echo "Error: no Personal Access Token passed via PAT}"
    exit 1
  fi

  trap die ERR

  local raw_a="${1?Error: two owner/repo@branch values must be provided (0 were)}"
  local raw_b="${2?Error: two owner/repo@branch values must be provided (1 was)}"

  if [ -z "$PAT" ]; then
    echo "Error: no Personal Access Token passed via PAT}"
    exit 1
  fi

  a="$(filter_branch_string "$raw_a")"
  b="$(filter_branch_string "$raw_b")"

  [ "$(compare_dates "$a" "$b")" == "true" ] || return 2
}

# if we're not being sourced and there's a function named `main`, run it
[[ "$0" == "${BASH_SOURCE[0]}" ]] && [ "$(type -t "main")" == "function" ] && main "$@"
