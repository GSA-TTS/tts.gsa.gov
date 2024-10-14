# 9. JavaScript Testing Framework

Date: 2024-10-08

## Status

Accepted

## Context

The TTS Website is using an increasingly complex logical functions to
determine what data are displayed (e.g., job postings, informational
sessions, etc.); this logic requires a robust testing suite to verify
that what is expected is what is being produced.

## Decision

The team will adopt the [Jest](https://jestjs.io) JavaScript testing
framework.  The test suite may be run by executing the script specified
in the `package.json` file (e.g., `npm jest` or `npx jest`).

## Consequences

The primary risk here relates to "going slow to go fast."  That is, it
will take time to write tests and when tests fail, either the code
or the test will need to be fixed before the CI/CD pipeline will allow
merges to take place.  The upfront investment in writing tests will
allow for faster development by finding problematic logic (i.e., bugs)
before they're introduced into the system.
