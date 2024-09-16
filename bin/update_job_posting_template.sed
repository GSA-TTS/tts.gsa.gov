#!/usr/bin/env -S sed -Ef

# This sed script will update postings from the 18F/join.tt.gsa.gov format
# and make make them work with the new GSA-TTS/tts.gsa.gov format.
#
# To use it:
#
# bin/update_job_posting.sed -i~ pages/jointts/positions/filename.md
#

# for variables named 'foo bar' in the front matter of the document,
# update them to 'foo_bar'
2,210s/^([[:alpha:]]{1,})[[:space:]]([[:alpha:]]{1,}):/\1_\2:/g

# if the 'layout', 'permalink', or 'tags' variables are set, remove them
/^(layout|permalink|tags):/d

# insert at the top new values for 'layout', 'permalink', and 'tags'
1a layout: layouts\/jointts\/job-updated
1a permalink: \/join\/{\{ title \| slugify \}\}\.html
1a tags: jobs

# make sure instances of '{% include path/to/file.html %} are quoted
# properly (e.g. '{% include "path/to/file.html" %}')
s/(\{\%[[:space:]]*include[[:space:]]{1,})([^"']{1,})([[:space:]]{1,}\%\})/\1"\2"\3/g

# make sure instances of '{% link pages/path/to/file %}' are rewritten as
# '{{ "/join/path/to/file" | url }}'
s/\{\%[[:space:]]*link[[:space:]]{1,}(\/?pages|join)?([^"']{1,})[[:space:]]{1,}\%\}/\{\{ "\/join\2" | url \}\}/g
