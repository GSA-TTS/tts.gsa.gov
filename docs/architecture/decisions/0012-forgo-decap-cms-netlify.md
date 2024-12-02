# 12. Forgo Decap CMS / Netlify

Date: 2024-11-27

## Status

Accepted

## Context

Searching for an easier way to support editing job posting pages on the TTS
Website, we looked into supporting Decap CMS (formerly known as Netlify).

Decap CMS is a JavaScript-based tool that provides a What You See Is What You
Get (WYSIWYG) experience similar to WordPress or Drupal but without a
server-side component.  Decap runs entirely in the browser itself with the
content stored in a GitHub repository as Markdown content.  It would be a
bolt-on experience that would integrate directly into our existing workflow
and repository.

The primary driver in researching additional tooling (i.e., Decap CMS) is to
reduce the complexity associated with editing job posting data.

Job postings are represented as individual Markdown files that contain solely
YAML front matter.  Decap CMS is able to support this in both "Markdown" and
"Rich text" modes; however, Decap doesn't provide any additional functionality
in those situations -- it identifies that the content is YAML front matter and
that's all.  This represents a step back from GitHub's web UI because GitHub
can scan YAML front matter and identify invalid YAML whereas Decap just ignores
it.

## Decision

The team has decided not to pursue Decap CMS at this time.

## Consequences

There is little to no additional value in adding Decap CMS to the mix at this
time.  The use-case we're trying to address is actually handled less well as
compared to the existing processes.
