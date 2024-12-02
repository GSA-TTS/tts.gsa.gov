# 10. Replace YAML with Markdown for Job Postings

Date: 2024-11-27

## Status

Accepted

## Context

Job postings by the TTS Talent Team are stored as files in the repository; each
file represents a single job posting.

Each job posting has a variety of commonalities, such as the salary rate (GS
level), when the job posting opens, when the job posting closes, etc..  We need
to be able to utilize those data not only to render job postings to job seekers,
but also determine the state of each job posting (i.e., if the current date is
before the opening date, the posting is "upcoming" while if the current date is
after the closing date, the posting is "closed"; otherwise, the posting is
considered "open.").

Previously, each job posting was a single Markdown file that contained some
YAML front matter that included some of these fields.  Some of the fields would
be shown elsewhere in the posting (e.g., `{{ variable }}` in the Markdown)
while others were used elsewhere.

As a result, the editing process for a job posting involved copying a starting
template, filling in various fields in the YAML front matter, and editing the
Markdown to display the needed data.  Changing the presentation for how job
postings were rendered required editing every job posting.  Data entered
free-form was often not parsable because, generally, Markdown would accept
values that were incompatible with how we were using them.  For example, a
Markdown file could say that a job opened on `Monday, November 25th, 2024` and
it would render as-expected; however, the logic for determining the status of
the job would fail.


## Decision

The team decided to transition from job postings being individual Markdown
files with some YAML front matter to having all job postings use only YAML
front matter.  This would allow us to use standard templates that would be
consistent in their presentation while also validating the data against a
known schema.

## Consequences

Job postings are much smaller and straight-forward as there's less commentary,
instructions, and redundant text in the posting -- there's just the YAML.

Rendered job postings are more uniform and consistent.

Automation (e.g., time-based state determination and relevant information
sessions) becomes possible and consistent.

Data that can be determined or derived (e.g., salary ranges from GS levels)
are simplified (e.g., we can just say `salary: gs-15` and have the system
determine the actual dollar amounts).

Job posting content is expressed in YAML which is more sensitive to and less
tolerant of incorrect spacing and indentation.

Invalid Markdown will still be rendered, although possibly not as-intended;
invalid YAML front matter causes the page build process to break.

The job postings will still be in Markdown files (i.e., the filenames end with
`.md`) but the content will be in YAML front matter.  Because the extension
of the postings will be `.md`, a Markdown linter will either skip or fail when
scanning the Markdown files and finding only YAML.  A YAML scanner would filter
out `.md` files; if a YAML linter scanned a `.md` file and encountered
actual Markdown, the YAML linter would fail.  Content other than job postings
is also present in the repository and those non-postings contain actual
Markdown.

Therefore, it becomes difficult to configure existing tooling to apply YAML
rules to job postings and not non-posting site content.  Moreover, editors
will likely treat the job postings as Markdown due to the `.md` filename
extension and not provide tooling or functionality to support YAML editing.
