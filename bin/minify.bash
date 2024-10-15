#!/usr/bin/env bash

set -euo pipefail

## @file minimize.bash
## @author TTS Website Team
## @brief uglify (minimize) our CSS and JavaScript
## @details
## There are two npm modules, uglifycss and uglifyjs that will
## remove whitespace, comments, etc. from CSS and JavaScript,
## respectively.  This will iterate across all of the CSS and
## JavaScript files in the site's built files.  The original
## files will be renamed with a .orig. before the extension
## (e.g., style.css => style.orig.css) and the minimized
## version will replace the original.  (e.g., style.css
## will be minimized while style.orig.css will remain
## unmodfied).
##
## This process could be reversed (e.g., style.css would
## remain unmodified by style.min.css would be minimized);
## however, this would require the calling HTML and such
## to use be modified to use the minimized filenames.
##
## @par Examples
## @code
## # Use the defaults and do the thing
## bin/minimize.bash
##
## # set a custom location
## location="_site/assets" bin/minimize.bash
## @endcode

## @var location
## @brief where to look for files to minimize (default: _site)
location="${location:-_site}"

## @var filename_modifier
## @brief what to insert into a filename when modifying it (default: .orig.)
filename_modifier="${filename_modifier:-.orig.}"

## @fn modified_filename()
## @brief return a modified version of the file
## @details
## This accepts a filename as an argument and returns a modified version
## of that filename via STDOUT.  The filename is modified by adding
## a string before the file's extension.  So, if the modifier is
## '.min.' and the filename is 'style.css', the modified version of the
## filename is 'style.min.css'.
##
## The modified filename is determined by actions on a string; it doesn't
## actually look at the filesystem, it doesn't matter if the filename
## actually exists, the filename can be read or not, the resulting
## modified filename can actually be written, etc..  It's just string
## manipulation.
##
## @param filename the original filename to examine
## @param modifier the string to insert befor the extension (default: .min.)
## @returns the modified filename via STDOUT
## @retval 0 (True) if the filename could be modified
## @retval 1 (False) otherwise (should never happen)
## @par Examples
## @code
## new_filename="$(modified_filename "$old_filename")"
## @endcode
modified_filename() {
  filename="${1?Error: no filename passed}"
  modifier="${2:-.min.}"

  extension="${filename##*.}"
  filebase="${filename%%.*}"

  new_filename="${filebase}${modifier}${extension}"

  echo "$new_filename"
}

## @fn minimize()
## @brief given 0 or more filenames, attempt to minimize them
## @details
## This accepts a list of filenames and iterates across them.
## For each filename, it will acquire the modified filename,
## rename the original file to the modified filename, and
## then minimize the original filename to the original filename.
##
## 1. mv old new
## 2. minimize new > old
##
## The file's extension is examined to determine how the
## file should be minifed.  For example, CSS and JavaScript files
## are minified with 'uglifycss' and 'uglifyjs', respectively.
## This allows us to expand the script in the future to accept
## different file types.
## @param old_filename[] list of files to modify
## @retval 0 (True) if the file(s) were minified
## @retval 1 (False) if the file could not be minified
## @retval 2 (False) if the file could not be renamed
## @par Examples
## @code
## minimize "_site/assets/style/stylesheet.css"
## @endcode
minimize() {
  for old_filename in "$@"; do

    echo "Processing '$old_filename'"
    new_filename="$(modified_filename "$old_filename" "$filename_modifier")"

    file_type="${old_filename##*.}"

    case "$file_type" in
      css)
        mv -f "$old_filename" "$new_filename" || return 2
        cleancss -o "$old_filename" "$new_filename" || return 1
        ;;
      js)
        mv -f "$old_filename" "$new_filename" || return 2
        terser --compress -o "$old_filename" "$new_filename" || return 1
        ;;
      htm | html)
        echo "  HTML"
        mv -f "$old_filename" "$new_filename" || return 2
        html-minifier-terser -o "$old_filename" --collapse-whitespace --remove-comments --minify-css true --minify-js true "$new_filename" || return 1
        ;;
      *)
        echo "Don't know how to handle '$file_type' files"
        exit 1
        ;;
    esac
  done
}

export -f minimize modified_filename
export location filename_modifier

## @fn main()
## @brief the main function
main() {

  for filetype in css js htm html; do
    find "$location" \
      -type f \
      -name "*.$filetype" \
      \! -name "*.orig.*" \
      -exec bash -c 'minimize "$0"' {} \;
  done
}

# if we're not being sourced and there's a function named `main`, run it
[[ "$0" == "${BASH_SOURCE[0]}" ]] && [ "$(type -t "main")" == "function" ] && main "$@"
