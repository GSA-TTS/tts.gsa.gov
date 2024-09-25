# 8. Represent time with ISO-8601 and UTC

Date: 2024-09-25

## Status

Accepted

## Context

ISO 8601 is a date / time representation standard and UTC (Universal
Coordinated Time) is a time standard that accounts for differences in
time zones.

### ISO 8601

ISO-8601 is a date / time standard for representing a time (or interval
of times) in a structured manner.  Generally speaking, the most significant
and least specfic component (the year) is in the left-most position and
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
**after** the closing date as '2024-09-25T00:00:00' is less than
'2024:09-25T09:00:00'.

Therefore, it's important to annotate job posting closing times
(i.e., the `closing` field) as the **end** of the date by not omitting
the closing time.  So, to have a position close at the end of the
day on September 25th, one would use a `closing` value of
'2024-09-25T23:59'.

### UTC

Universal Coordinated Time (UTC) is a stanard for representing
date time values relative to a single time zone, namely GMT
(Greenwich Mean Time).  Each time zone is annotated by the
offset in time for that time zone relative to UTC.

Because the United States spans multiple time zones and because
the servers where the site are hosted represent time in UTC, and
because various localities may or may not observe Daylight
Saving Time, one must be specific and specify a time zone to
accompany a date time value.  Eastern Daylight Savings time (EDT) is
articulated by including '-0400' onto the end of a date time
value; similarly, Eastern Standard Time (EST) uses '-0500'.  For
time zones ahead of GMT (e.g., Central European Time (CET), a
plus sign is used (the U.S. is behind GMT while most of Europe
is ahead of GMT); therefore, CET is represented as +0100 and
Central European Summer Time (CEST) is represented as +0200.

Times in GMT may be specified with or without a sign (i.e.,
`-0000` == `0000` == `+0000` or with a `Z` (capital letter Z).

Therefore, 01:23:45T06:07:08Z is a specific, non-relative,
fully-qualified time, regardless of what time zone someone is in,
whether it's Daylight Saving Time or not, etc..  It is unambiguous.

#### Examples

- Greenwich Mean Time (GMT): 0000
- Eastern Standard Time (EST): -0500
- Eastern Daylight Saving Time (EDT): -0400
- Central Standard Time (CST): -0600
- Central Daylight Saving Time (CDT): -0500
- Mountain Standard Time (MST): -0700
- Mountain Daylight Saving Time (MDT): -0600
- Pacific Standard Time (PST): -0800
- Pacific Daylight Saving Time (PDT: -0700

## Decision

The team will use ISO-8061 date time values in UTC to represent dates
and times internally.  This is most significant for job postings which
will be stored as UTC, not in Eastern time.

Time zone calculations will only occur when dates are displayed.

## Consequences

### Job Postings

#### Using UTC

Assuming that job postings open at midnight Eastern time on a given
day and close just before midnight Eastern time on another date,
those times would be represented in the markdown like this:

```YAML
# Opens at midnight EST on Tuesday, September 24th, 2024
opens: 2024-09-25T04:00:00Z

# Closes just before midnight EST on Wednesday, September 25th, 2024
closes: 2024-09-26T03:59:59 -0400Z
```

#### Using Eastern Time instead of UTC

The following is equivalent:

```YAML
# Opens at midnight EST on Tuesday, September 24th, 2024
opens: 2024-09-24T00:00:00 -0400

# Closes just before midnight EST on Wednesday, September 25th, 2024
closes: 2024-09-25T23:59:59 -0400
```

Both formats are unambiguous and fully-qualified.  However, UTC is
the preferred offset so that all date time instances may be compared
directly and without time zone offset modification.

### Display Logic

Because the date time values will be in UTC, they will need to be
converted to the time zone of choice when being displayed.  This may
be done statically by the site generator or dynamically via client-side
calculation.

See
[Luxon docs on time zones](https://github.com/moment/luxon/blob/master/docs/zones.md#changing-zones)
for more information.
