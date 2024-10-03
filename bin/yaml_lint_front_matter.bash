#!/usr/bin/env bash

## @file yaml_lint_front_matter.bash
## @author TTS Website Team
## @brief runs YAML linter on Markdown front matter
## @details
## While not officially a commonly-recognized standard (i.e., it's not
## included in CommonMark or GFM specifications), some tools (e.g.,
## Static Site Generators (SSGs) like Jekyll and Eleventy) allow for
## the inclusion of YAML data at the start of Markdown file.  This
## is often used to specify metadata such as page name, permalink,
## etc..
##
## Front matter is typically (although not necessarily) YAML; it's
## separated from the Markdown content by a `---` at the start
## and end of the front matter block.
##
## The situation we encountered was that we had Markdown files that included
## YAML front matter that was improperly formatted.  The Markdown linter we
## were using ignored YAML front matter in Markdown while the YAML linter
## wasn't processing Markdown files (and if it did, the Markdown outside of
## the YAML front matter would cause it to fail.
##
## This Bash script goes line by line through Markdown files and extracts
## the YAML front matter, and then runs the YAML through yamllint.
##
## Consider the following:
##
## @code
##
## ---
## title: People
## --
## I'm normal markdown
## @endcode
##
## In this case, the line starting with `title` is YAML front matter while
## the line starting `I'm` is Markdown.
##
## Running this filter on the Markdown file would yield:
##
## @code
## ---
## title: People
## ---
## @endcode
##
## The front matter could then be processed by a YAML linter without any
## Markdown gumming up the works.
##
## This tool will iterate across zero or more filenames -- typically those
## corresponding to Markdown content (i.e., '.md' files), extract the
## YAML from them, run the YAML through yamllint, and return any warnings
## via STDOUT.  The tool will return the net result code from running yamllint
## across all files (e.g., if all files pass (return 0), the tool will
## return 0; if yamllint were to return a 1 on one file and 0 for all
## of the others, the tool will return 1.

set -euo pipefail

## @fn extract_front_matter()
## @brief extract the front matter from a document
## @details
## Read STDIN a stream (e.g., a Markdown file) with YAML front matter,
## return everything between the first and second '---' markers
## via STDOUT.
## @returns the front matter via STDOUT
## @par Examples
## @code
## yaml="$(extract_front_matter < /path/to/file.md)"
## @endcode
extract_front_matter() {

  separators=0

  while read -r && [ $separators -lt 2 ]; do
    line="$REPLY"
    if [ "$line" == "---" ]; then
      separators=$((separators + 1))
    fi

    if [ $separators -eq 0 ]; then
      echo "#"
    elif [ $separators -gt 0 ]; then
      echo "$line"
    fi
  done

}

## @fn main()
## @brief the main function
main() {

  local clean=0

  for filename in "$@"; do
    temp_filename="$(mktemp)"

    extract_front_matter < "$filename" > "$temp_filename"

    if ! results="$(yamllint --strict --format standard "$temp_filename")"; then
      clean=$?
    fi

    echo -n "$results" | sed -Ee "s|^$temp_filename\b|$filename|g"

    rm -f "$temp_filename"
  done

  return $clean
}

# if we're not being sourced and there's a function named `main`, run it
[[ "$0" == "${BASH_SOURCE[0]}" ]] && [ "$(type -t "main")" == "function" ] && main "$@"
