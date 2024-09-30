# 8. Represent time with ISO-8601 and Eastern Time

Date: 2024-09-25

## Status

Accepted

## Context

ISO 8601 is a very common date / time representation standard.
Eastern Time (i.e., `America/New_York` or UTC-5 during Standard
Time and UCT-4 during Daylight Saving Time) is the most
frequently-used time zone on the project.

### ISO 8601

ISO-8601 is a date / time standard for representing a time (or interval
of times) in a structured manner.  Generally speaking, the most significant
and least specific component (the year) is in the left-most position and
each subsequent is less significant / more specific component follows to
the right.  A `T` (capital letter T) is used to separate the date from the
time.

#### Examples

##### Date Only

`YYYY-MM-dd`

- 4 digits of the year
- hyphen
- 2 digits (0-padded) of the month
- hyphen
- 2 digits (again, 0-padded) of the day of month

In this case, a date (e.g., 2024-09-25) actually represents the
start of that date.  That is, '2024-09-25' is exactly the same
as '2024-09-25 00:00'.

##### Date and Time

`YYYY-MM-ddTHH:mm`

- (same as "Date Only")
- T (the letter 'T')
- 2 digits (0-padded, 24-hour clock) of the hour
- colon
- 2 digits (0-padded) of the minute

#### Omitted Components

In general, if omitted, components are assumed to be zero (0).  So,
for example, if only a date is represented, the time is assumed to
be zero (i.e., midnight).

A consequence of this is when representing the end of an interval
(e.g., `closing` on a job posting), if a time is omitted (e.g.,
'2024-09-25'), points in time on that date (e.g., 9am) would be
**after** the closing date as '2024-09-25T00:00' is less than
'2024:09-25T09:00'.

As a deviance from this, an adjustment to the default time is
required:

- for `opens` values, assume the time is 00:00
- for `closes` values, assume the time is 23:59

### Time Zone

The overwhelming majority of instances where dates are times are used
are relative to Eastern Time (i.e., the `America/New_York` time zone).
That is, job `opens` and `closes` fields, times for info sessions, etc.
are pretty much all Eastern time.  Moreover, the folks who edit the
job postings and such use an Eastern Time perspective.

## Decision

The team will use ISO-8061 date time values in `America/New_York`
to represent dates and times internally.  This is most significant
for job postings and info sessions.

## Consequences

### Job Postings

Job posting `opens` and `closes` values will be represented in
the time zone used most frequently and by the most people.

### Display Logic

Job postings and info sessions will be displayed in Eastern
Time.

### Time-Based State Inference

The server runs in UTC.  Therefore, when considering whether
a job posting is upcoming, open, or closed, the current time
needs to be "cast" into Eastern Time prior to any inferences
being made.

#### Example

10pm (22:00) Eastern Time is either 2am (02:00) or 3am (03:00)
depending on Daylight Saving Time or not.  Therefore, the
server -- which is set to UTC -- would report back that the
current date is actually one ahead of what's expected.

So, a job pobsting with a `closing` date of `2024-09-30T23:59`
would appear to be closed at 10pm (22:00) Eastern Time (which
is still in Daylight Saving) as the current time according
to the server would be `2024-10-01T02:00`.

Therefore, it's important to cast the current time from UTC into
Eastern Time so that the closing time (`2024-09-30T23:59`) is
*after* the current time cast into Eastern (`2024-09-30T22:00`).

See
[Luxon docs on time zones](https://github.com/moment/luxon/blob/master/docs/zones.md#changing-zones)
for more information.
