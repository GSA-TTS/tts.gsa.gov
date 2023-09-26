---
#
# This template has general instructions on variables to create open and upcoming jobs
#

# INSTRUCTIONS GENERAL:
# - These are some of the main mandatory variables needed for functionality.

layout: layouts/jointts/job-updated              # layout used to render job information
title: "Login.gov: Integration Engineer/Solution Architect GS15"
title-header: Integration Engineer/Solution Architect
permalink: /join/login-integration-engineer/             # should be unique /join/<unique-value>
tags: job                                        # tag used to sort into job collection
state: closed                                  # upcoming, open, closed | template = excluded
job_post_type: usajobs                           # not sure if this is used anymore?

# INSTRUCTIONS UPCOMING: 
# - These fields are required for `state: upcoming`

role_name: Login.gov - login-integration-engineer                         # name of role
opens: '2023-9-11 09:00'                        # Will not appear on /join until
closes: '2023-09-17 23:59'                       # Will disappear from /join 
weeks_open: 52
location: 'Anywhere in the U.S. (remote)'
gs_level: '15'
salary_min: '136,908'
salary_max: '183,500'
org: 'TTS'
contact_name: 'TTS Talent Team'
contact_email: 'jointts@gsa.gov'

# OPTIONAL UPCOMING -
# - to remove, just elete info_sessions or leave it blank info_sessions:
info_sessions:                             
  - link: https://www.eventbrite.com/e/logingov-information-session-may-23-2023-1230-pm-et-tickets-637360350967
    date: '2023-05-23 12:30'
    time: 12:30-1:30pm ET (9:30-10:30am PT)

# INSTRUCTIONS OPEN: 
# - These fields are required for `state: open`

job_announcement_number: ''
pd_job_title: 'Information Technology Specialist (APPSW) GS15'
num_vacancies: '100'
series: '2210'
apply_url: 'https://usajobs.gov/job/apply/whatever'
ohrm_contact_email: 'tts-hrstaffers@gsa.gov'
ohrm_contact_name: 'Loyola Ukpokodu'
bargaining_unit: 'Non Bargaining Unit'
promotion_potential: '15'
supervisory_status: 'No'

#
#
# the following is an example of the markkdown used to render this job's page (at the permalink)
#
#

---

## Basic information
Open to U.S. citizens or nationals (residents of American Samoa and Swains Island). Subject to background check. Full information will be available on USAJOBS.

**Supervisory status:** Not Supervisory

**Official title in USAJOBS:** Information Technology Specialist (APPSW) GS15

**Number of vacancies:** 3

**Location:** {{ location }}

**Salary Range:**
The salary ranges for this position are:
- GS-15 (${{salary_min}} to ${{salary_max}})

Your salary, including base and locality, will be determined upon selection, dependent on your actual duty location. Please note the maximum salary available for the GS pay system is $183,500. For specific details on locality pay, please visit [OPM’s Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/) or for a salary calculator [OPM’s 2023 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2023/general-schedule-gs-salary-calculator/). You can find more information in our [compensation and benefits section]({{ site.baseurl }}/join/compensation-and-benefits/).

**Travel requirement:** Occasional travel may be required up to 10%-20% per year.

**Work schedule:** Full time.

**Appointment type:** This is a permanent position.

Learn more about the benefits of working at [GSA](https://www.gsa.gov/portal/category/26702) and [TTS]({{ site.baseurl }}/join/compensation-and-benefits/).

## Role summary

Login.gov is the public’s one account for government, simplifying access to government benefits and services for members of the public by enabling them to reuse one secure account across government agencies, and improving the security of government systems by enabling agencies to leverage a shared technology service to provide strong authentication and identity verification services to their customers. We focus on the complexities of digital identity authentication for the public, so agencies can focus on their mission.

This opportunity is located in the Technology Transformation Services (TTS) Solutions Division’s Login.gov team. The Login.gov team is a remote organization and is composed of experts across product development, software engineering, cybersecurity, and platform engineering.

As an Integration Engineer at Login.gov, you will provide technical support to our government partners as they evaluate our services for use at their agencies and as they integrate Login.gov into their applications. You will work closely with the Login.gov Account Managers and with other members of the Login.gov Partnerships team, and product teams and programs. In addition, you will develop and maintain partner-facing and internal tools and applications to improve the overall partner experience.


## Key objectives

### 1. Improve the partnership experience for Login.gov partners
- Maintain existing systems and tools used by the Partnerships team to manage the integration process.
- Develop new partner-facing features to work towards more automated onboarding and integration processes.
### 2.  Support partners integrating with Login.gov
- Provide technical support to partners integrating Login.gov into their applications, help troubleshoot and resolve issues.
- Answer technical questions about the Login.gov product and guide partners through technical decisions, e.g selecting an authentication protocol.
- Assist partners in debugging SAML and OIDC requests between their applications and ours. 
- Serve as an escalation point for technical support tickets and facilitate technical consultations with partners.
- Facilitate the integration launch and configuration management processes.

## Qualifications

Provide as much detail as possible on your resume so that we can evaluate your previous experience. Follow our [guidance on creating a federal style resume]({{ site.baseurl }}/join/resume/).

Failure to provide required information may result in disqualification.

For each job on your resume, provide:
- The exact dates you held each job (from month/year to month/year or “present”)
- Number of hours per week you worked (if part time)

### Specialized Experience Requirements:
To qualify, you must have one (1) year of specialized experience at the next lower GS-grade (or equivalent). Specialized experience is defined as follows:

- Experience working in a cross-functional team environment.
- Experience working with partners, clients, and/or users to troubleshoot and resolve technical issues.
- Experience working with web technologies such as authentication, web application development, and networking at a high level.
- Experience developing and maintaining web applications.



## How To Apply

{% if state == 'upcoming' %}
  Get [notified]({{ site.baseurl }}/newsletter) when this position is open for applications.
{% else %}

  Submit a complete online application prior to {{ closes | date: '%l:%M%P %Z ET on %A, %B %e, %Y' }}. Please fill out all applicable fields.

  <section class="usa-grid-full">
    <a class="usa-button usa-button-secondary" href="{{ apply_url }}">Click here to apply</a>
  </section>

  **Need Assistance in applying or have questions regarding this job opportunity, please email {{ contact_name }} at** [{{ contact_email }}](mailto:{{ contact_email }}).

{%- endif -%}
