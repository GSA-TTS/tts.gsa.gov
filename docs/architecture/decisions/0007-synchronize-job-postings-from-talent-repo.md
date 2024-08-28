# 7. Synchronize job postings from talent repo

Date: 2024-08-23

## Status

Accepted

## Context

Job postings from the
[Talent team repository](https://github.com/18F/join.tts.gsa.gov)
need to be posted on the new TTS website.  The best case outcome would
minimize redundancy (i.e., duplicate postings, duplicate files, etc.),
rework, and training.

## Decision

A tool will synchronize job posting content in the Talent team repository
to the TTS website repository.

## Consequences

Job content will need to be edited in one place that the TTS Talent
team manages.  Local changes to the TTS website repository's directory
for job postings will be overwritten when the synchronization
happens.  This includes any modification performed by linters
(e.g., prettier).
