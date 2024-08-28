# 6. Remove Snyk in favor of Dependabot

Date: 2024-07-17

## Status

Accepted

## Context

Snyk, a security scanning tool, is being used to monitor for
exploitable dependencies and notify us when they're found in
our repository.

Grype is another, similar tool that runs in a CI/CD also
scans for dependency issues.  Unlike Snyk, Grype is an
OSS tool (even though we were using a free tier of Snyk's
otherwise paid service).

Dependabot also scans for dependencies that need to be
updated; however, it's configured to run on a periodic
basis (e.g., weekly).  Therefore, even if a Pull Request
(PR) isn't being considered, Dependabot will still run to
look for dependencies that need to be updated and create
PRs to include those updates.

## Decision

Remove Snyk in favor of Dependabot and Grype.

## Consequences

We have the best both worlds in that Grype runs when commits
are pushed to PRs and Dependabot runs regularly even when
there are no new commits to scan.  Vulnerability data
aren't being sent to Snyk, nor are we dependent upon a
commercial platform for dependency scanning.
