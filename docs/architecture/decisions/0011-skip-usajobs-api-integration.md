# 11. Skip USAJOBS API Integration

Date: 2024-11-27

## Status

Accepted

## Context

USAJOBS.gov provides an API that can be queried for information about open
job postings across a variety of agencies and offices.  Most jobs posted to
the TTS site provide links to application forms on the USAJOBS.gov site.

Positions posted on the TTS site often have a maximum number of applications
that they'll accept.  When the number of remaining application slots is
exhausted, the job posting is changed to the "closed" status, typically by
changing the posting's closing date to a date in the past.  This involves
editing the posting file, creating a Pull Request (PR) to review the change,
merging the change into the `staging` branch, then creating a second PR to
merge the change from the `staging` branch into the `main` branch.  At best,
this takes several minutes; more typically, it can take longer for the reviews
to take place resulting in delays of various lengths.

It's possible to query the USAJOBS API to determine the number of applications
that will be accepted and, if no more applications will be accepted,
automatically mark the posting as being closed.

In order to query the USAJOBS API, an authentication key / token must be
included with each API request.  Because these requests would be coming from
the user's browser, we would need to pass along the API key to the client in
order to authenticate the request.  The API does not accept OAuth or JWT-based
authentication models.

While the USAJOBS API is able to provide authoritative state information data
for postings (i.e., how many applications will be accepted), the USAJOBS
database does not contain current, TTS-specific information TTS's postings.  For
example, a posting may have a title of `Login.gov Data Engineer`, the posting
on the USAJOBS database may only read `Data Engineer` or `Engineer`.  The
differences extend beyond job title -- often, the specific requirements,
responsibilities, etc. that need to be posted on the TTS site don't exist in
the USAJOBS database.

## Decision

The team has decided that it will be implausible to query the USAJOBS API for
real-time information.  The reasoning is two-fold:

1. challenges in passing the token to the browser safely
2. job posting data on the TTS Website are more current than the USAJOBS API

## Consequences

The manual workflow involving multiple levels of review (therefore, multiple
PRs) will still be used.  These PR reviews need to be made by developers on
the TTS Website development team; therefore, the resultant dependency has the
potential to cause delays in an otherwise time-sensitive process.

Between when the maximum number of applications is reached and when the change
on the TTS Website goes live, applicants will see on the TTS Website that
the position to which they're applying is still open when, in fact, it is not.
