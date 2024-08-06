```yaml=
---
site:
    project-management-tool: Github #Trello, JIRA, Servicenow
    google-group-email: website@gsa.gov
    incident-escalation-timeframe: `1hr`
    special-situations:
        - NA
    other-variable:    
    
```
# Incident Response Plan

## Follow these steps during an Incident

## Incident Checklist

- [ ] Initiate
- [ ] Assess
- [ ] Activate the Contingency Plan if needed.
- [ ] Remediate
- [ ] Retrospective


### Initiate

Whoever acts on an alert/email/etc would follow this process. You are now the Incident Commander (IC).

1. `Acknowledge` the alert if available e.g. New Relic, Email, Github, etc.
1. Open an Issue/Ticket/Card/etc in the team's project management tool with incident information. Copy the link to it and use it to document the `Incident` in real-time.
  - This team uses: `{{ site.project-management-tool }}`
3. Notify the team - use the team's Google Group email or Slack `@channel` with a link to the `Incident` in the project management tool.
    - Acknowledge your role as the `Incident Commander` e.g. "Looking into this". Use a Slack thread to communicate updates within the team.
1. Request assistance from specific teammates to pair with if needed. Others teammates should acknowledge, verify, and offer support in the Slack thread. 
6. If the site is down, email the team ([ {{ site.google-group-email }}](mailto:{{ site.google-group-email }})).
7. If this is a **Security Incident** , follow the [TTS Incident Response guide](https://handbook.18f.gov/security-incidents/#reporting-other-incidents), CCing [{{ site.google-group-email }}](mailto:{{ site.google-group-email }}) in the loop.
1. Assign and delegate tasks to person(s) most technically capable to resolve `Incident`.
1. If there is no response from team members via slack/email within 15 minutes, call/text cell phones. Team member phone numbers can be found in their slack profiles or in the [TTS Team Contact Sheet](https://docs.google.com/spreadsheets/d/1QqqS_-V44MHyVqRIyHj6Eojg1Oz5EC3fS3j1e3mDrkg/edit#gid=3).
1. Get written confirmation as a comment in {{ site.project-management-tool }} that the assigned member is handling the issue and they have the necessary support to resolve.
1. All project team members are responsible for monitoring progress and providing updates/context in {{ site.project-management-tool }} with more information as it is received.

>Note: If at all possible, there should be two sets of eyes to review the code and approve Pull Requests on any emergency `Pull Requests` (e.g. hotfixes) pushed straight to production.

### Assess

- Confirm the incident — was it a real incident?
  - If it's expected behavior, use #false-alarm in email or slack.
  - If it's unexpected behavior etc.
- Assess the severity (See Incident Severities at the very end of this Guide)
- Update the issue:
  - Status → "confirmed"
  - Severity → high/medium/low
  - @ others needed for response

### Remediate

- You may not be able to "walk backwards" from the observed behavior to the root cause.
  - Consider the things that must be true for the behavior to occur, and test those hypotheses against the information that is available to you.
- Keep the ticket updated as people work:
  - Leads, and who's following them
  - Remediation items, and who's working on them, including customer notification (if appropriate to the situation)
- Send out situation reports on a regular cadence (high: hourly; medium: 2x daily; low: daily).
- Go into work shifts if the incident lasts longer than 3 hours.
- [Hand off to GSA's IR](mailto:gsa-ir@gsa.gov) if the incident lasts longer than {{ site.incident-escalation-timeframe }}.

- [ ] pdate the ticket, set status → "resolved."
- [ ] Send a final situation report to stakeholders.
- [ ] Schedule a retrospective.
- [ ] Thank everyone involved for their service!

#### **Special situations**

Extra checklists for special situations that don't always occur during incidents:
{{ for special-situations in site }}
  - [ ] {{ site.special-situation }}
{{ endfor }}

#### False Alarm

Follow this checklist if an event turns out not to be a security incident:

- Update the issue/ticket, setting status to false alarm.
- Close the issue/ticket.
- If GSA IR was notified, then update gsa-ir@gsa.gov of the false alarm.
- If any situational reports have been sent out, send a final report to all previous recipients, noting the false alarm.

#### Handing off IC

Follow this checklist if you need to hand over IC duties:

- Old IC: brief New IC on the situation.
- New IC: confirm that you're taking over.
- New IC: update issue/ticket, noting that you're now the IC.
- New IC: send out a situational report, noting that you're taking over IC.
- Old IC: stick around for 15-20 minutes to ensure a smooth handoff, then log off.

This document outlines the internal process for responding to security incidents. It outlines roles and responsibilities during and after incidents, and it lays out the steps we'll take to resolve them.

> If you're a member of the public who has noticed something in that may be a security problem, please see [our vulnerability disclosure policy and reporting process](https://18f.gsa.gov/vulnerability-disclosure-policy/). As it explains, we want security researchers to feel comfortable reporting vulnerabilities they've discovered, as set out in that policy, so that we can fix them and keep our information safe.

### Remediate

At this point, we're trying to fix the issue! Remediation will be very situation-specific, so specific steps are hard to suggest. However, a few guidelines to follow during this process:

- The IC's responsibility is coordination, communication, and information-collection. The remediation team will be focused on resolving the issue/ticket, so it's up to the IC to make sure that we properly track what happened, how we're fixing it, who's doing what, etc. Ideally, the notes kept by the IC should be sufficient for an outside investigator to independently follow the work of the response team and validate the team's work.
- The team will develop a list of leads — actionable information about breaches, stolen data, etc. The IC should track these leads, maintain information about which are being investigated (and by whom), and what information that investigation leads. These can be tracked as checklists in the GitHub issue.
- Similarly, the team will develop a list of remediation steps. The IC is likewise responsible for tracking those, making sure they're assigned and followed-up, and verifying them as they're completed. These may be tracked in the central GitHub issue as well. The IC should distinguish between immediate concerns which should be completed before the incident is considered resolved and long-term improvements/hardening which can be deferred to the Retrospective.
  - If the incident involved exposure of information to an unauthorized party, the remediation steps must include working with TTS Infrastructure and GSA Information Security to notify the owner of the information, coordinate with the owner of the information, and notify the recipient of their obligations for appropriate handling of the information in the context of applicable federal laws, directives, policies, and/or regulations. The specific appropriate point of contact for customers depends on the situation.
- The response team should aim to adopt a _containment_ strategy: if machines are compromised, they should avoid destroying or shutting them down if possible (this can hamper forensics). For AWS instances, you can leave the instance running and instead reconfigure the Security Group for the instance to drop all ingress and egress traffic until forensics can be performed.
- Remediation may require service disruption. If it does, the team should proceed in a different way depending on the severity:
  - For High-severity incidents, the team should take action immediately, even if this causes disruption. A notification about the disruption should be sent out as soon as possible, but the team needs no permission to take action at this level.
  - For Medium-severity incidents, the team should notify the leads of the planned action, and help them assess the relative risk of disruption vs. security. If the leads are unavailable via Slack, they should be contacted using the phone numbers in their Slack profiles. The team should reach a collaborative decision on action, with a bias towards disruption. If they can't be reached within 1 hour, the team may take action without them.
  - For Low-severity issues, the team should notify as above, and not take action until a mutually-agreed-on course of action has been determined.
- Remediation can sometimes take a long time. If the issue progresses for more than 3 hours without being resolved, the IC should plan for a long remediation. This means:
  - Determine if remediation efforts should be "business hours" or "24/7". This will depend on the severity of the issue/ticket, and whether breaches are ongoing.
  - For 24/7 responses, the IC should begin shift-planning. Generally, responders should only work 3 hour shifts, so the IC should begin scheduling shifts and sending people "home" to preserve their ability to function.
  - The IC also needs to get into rotation — again, 3 hour shifts are about the maximum suggested. So, the IC should likely hand off duties at this point.

Once the incident is no longer active — i.e. the breach has been contained, the issue/ticket has been fixed, etc. — the IC should spin down the incident. There may still be longer-term remediation needed, and possibly more investigation, but as long as the incident is no longer active these activities can proceed at the regular pace of business. To close out an incident, the IC should:

- Set the status of the incident to "resolved".
- Send a final sitrep to stakeholders.
- Thank everyone involved for their service!

### Retrospective

The final step in handling a security incident is figuring out what we learned. The IC (or one of the ICs if there were multiple, or a designated other party) should lead a retrospective and develop an incident report.

Conducting retrospectives is out of the scope of this document, but as a crash course, here's an [introduction to blameless postmortems](https://codeascraft.com/2012/05/22/blameless-postmortems/). We follow the basic steps in cloud.gov's [service disruption guide](https://cloud.gov/docs/ops/service-disruption-guide/) The report should contain a timeline of the incident, details about how the incident progressed, and information about the vulnerabilities that led to the incident. A cause analysis is an important part of this report; the team should use tools such as [Infinite Hows](http://www.kitchensoap.com/2014/11/14/the-infinite-hows-or-the-dangers-of-the-five-whys/) or [Five Whys](https://en.wikipedia.org/wiki/5_Whys) to try to dig into causes, how future incidents could be prevented, how responses could be better in the future, etc.

The report should also contain some basic response metrics:

- Discovery method (how did we become aware of the issue?)
- Time to discovery (how long did it take from when the incident started until we became aware of it?)
- Time to containment (how long did it take from when we became aware until the issue was contained?)
- Threat actions (which specific actions -- e.g. phishing, password attacks, etc) -- were taken by the actor)?

This report should be posted as a final comment on the issue/ticket, which can then be closed.

## Incident Severities

Severity ratings drive the actions of the response team. Below are the severity ratings we use, some examples of incidents that might fall into that bucket, and some guidelines for ICs and response teams about how to treat each class of incident.

Note the severities may (and often will) change during the lifecycle of the incident. That's normal.

### 1 - High Severity

High-sev incidents successfully compromise the confidentiality/integrity of Personally Identifiable Information (PII), impact the availability of services for a large number of customers, or have significant financial impact. Examples include:

- Confirmed breach of PII
- Successful root-level compromise of production systems
- Financial malware (ie. CryptoLocker) targeting TTS staff
- Denial of Service attacks resulting in severe outages

Guidelines for addressing High-sev issues:

- Work will likely be 24/7 (e.g. work until the issue is contained).
- Responders are empowered to take any step needed to contain the issue, up to and including complete service degradation.
- Sitreps should be sent every hour, or more.

### 2 - Medium Severity

Medium-sev incidents represent attempts (possibly un- or not-yet-successful) at breaching PII, or those with limited availability/financial impact. Examples include:

- Suspected PII breach
- Targeted (but as-of-yet) attempts to compromise production systems
- Spam/phishing attacks targeting TTS staff
- DoS attacks resulting in limited service degradation

Guidelines for addressing Medium-sev issues:

- Response should be business-hours.
- Responders should attempt to consult stakeholders before causing downtime, but may proceed without them if they can't be contacted in a reasonable time-frame.
- Sitreps should be sent approximately twice a day.

### 3 - Low Severity

Low-sev incidents don't affect PII, and have no availability or financial impact. Examples include:

- Attempted compromise of non-important systems (staging/testing instances, etc.)
- Incidents involving specific employees
- DoS attacks with no noticeable customer impact

Guidelines for addressing Low-sev issues:

- Response should be business-hours.
- Responders should avoid service degradation unless stakeholders agree.
- Sitreps should be sent approximately daily.
