---
#
# This template has general instructions on variables to create open and upcoming jobs
#
#  ****  fields that don't seem to be used  *****
#
#  role_name - lightly used and similar to another field. needed?
#  weeks_open - use? needed?
#
#     title-header
#     job_post_type: usajobs 
#     job_announcement_number: ''
#     pd_job_title: 'IT Specialist (SYSANALYSIS)'
#     num_vacancies: '100'
#     series: '2210'
#     ohrm_contact_email: 'tts-hrstaffers@gsa.gov'
#     ohrm_contact_name: 'Loyola Ukpokodu'
#     bargaining_unit: 'Non Bargaining Unit'
#     promotion_potential: '15'
#     supervisory_status: 'No'
#
#
#  apply_url - needed for all jobs in this format
#

#🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
# INSTRUCTIONS GENERAL:
# - These are some of the main mandatory variables needed for functionality.

layout: layouts/jointts/job-updated              # layout used to render job information
title: TTS - Designer                            # title of the page/position
title-header: Designer
permalink: /join/<something-unique>/             # should be unique /join/<unique-value>
tags: job                                        # tag used to sort into job collection
state: template                                  # upcoming, open, closed | template = excluded
job_post_type: usajobs                           # not sure if this is used anymore?


# INSTRUCTIONS UPCOMING: 
# - These fields are required for `state: upcoming`

role_name: TTS Designer                          # name of role
opens: '2023-08-01 09:00'                        # Will not appear on /join until
closes: '2023-08-24 23:59'                       # Will disappear from /join 
weeks_open: 52
location: 'Anywhere in the U.S. (remote)'
gs_level: '13, 14, 15'
salary_min: '94,373'
salary_max: '176,300'
org: 'TTS'
contact_name: 'TTS Talent Team'
contact_email: 'jointts@gsa.gov'

# OPTIONAL UPCOMING -
# - to remove, just elete info_sessions or leave it blank info_sessions:
info_sessions:                             
  - link: https://www.eventbrite.com/...
    date: '2023-08-13 15:00'
    time: 3:00-3:30pm ET
  - link: https://www.eventbrite.com/...
    date: '2023-08-14 16:00'
    time: 4:00-4:30pm ET
    
# INSTRUCTIONS OPEN: 
# - These fields are required for `state: open`

job_announcement_number: ''
pd_job_title: 'IT Specialist (SYSANALYSIS)'
num_vacancies: '100'
max_applications: 0                                 # set to 0 if there is no application limit
series: '2210'
apply_url: ''
ohrm_contact_email: 'tts-hrstaffers@gsa.gov'
ohrm_contact_name: 'Loyola Ukpokodu'
bargaining_unit: 'Non Bargaining Unit'
promotion_potential: '15'
supervisory_status: 'No'

#🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺


#
#
# the following is an example of the markkdown used to render this job's page (at the permalink)
#
#

---

{%- if state == 'upcoming' -%}
  {{ org }} will soon be accepting applications for GS-{{ gs_level }} - {{ role_name }} roles.
  {%- if opens == 'tbd' -%} The target date for when these positions will be officially open to application has not yet been determined. If you'd like to be
  notified when these positions are open, sign up to our [mailing list]({{ site.baseurl }}/newsletter).
  {%- endif -%}

  {%- unless opens == 'tbd' -%}
  Applications will be open for submission on {{ opens | date: '%A, %B %e, %Y' }}. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to learn more about the application process.
  {%- endunless -%}
{%- endif -%}

## Basic information

**Location:**
{{ location }}

**Salary Range:**
The salary ranges for this position are:
- ${{salary_min}} to ${{salary_max}}

Your salary, including base and locality, will be determined upon selection, dependent on your actual duty location.

You can find more information about this in the [compensation and benefits section on our site](https://join.tts.gsa.gov/compensation-and-benefits/).

For specific details on locality pay, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/) or for a
salary calculator [OPM's 2022 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2022/general-schedule-gs-salary-calculator/).

Please note the maximum salary available for the GS pay system is **${{salary_max}}**

Note: You may not be eligible for the maximum salary as it is locality dependent. Please refer to the maximum pay for your locality.

**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands).

**Travel requirement:**
Occasional travel may be required up to 10%-20% per year.

**Security clearance:**
Public trust. Background investigation required.

**Work schedule:**
Full time.

**Appointment type:**
This is a term limited appointment with the ability to extend for a total of eight years.

## Opportunity overview

These opportunities are located in the General Services Administration (GSA), Federal Acquisition Service (FAS), Technology Transformation Services (TTS). TTS applies modern methodologies and technologies to improve the lives of the public and public servants. We help agencies make their services more accessible, efficient, and effective with modern applications, platforms, processes, personnel, and software solutions.

We will be interviewing and hiring for this role on an ongoing basis and to help navigate the process, we’ve created a [guide](https://join.tts.gsa.gov/rolling-hiring/) to help explain what to expect after submitting your resume.

{% comment %}🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻{% endcomment %}
## Role summary

Designers at TTS work across design contexts. They drive research activities, derive insights, generate concepts, communicate those concepts clearly, and work with cross functional teams to build and test them. They model best practices in user-centered design within TTS and across the federal government through advocacy and coaching.

Our Designers have deep experience in user research (generative, foundational and evaluative). In addition to research, we look for strong craft skills, confidence, and sophistication in at least one of the following areas: interaction design, product design, service design, content design and/or information architecture.

As a Designer, you’ll work in cross-functional teams made up of experts in design, product strategy, technical architecture, software engineering, data science, and procurement. In addition to building useful and usable digital services, you will be helping teams improve their user-centered design practice, and helping teams without those practices get started.

If you are committed to improving government services for all who need them this is the position for you.

Types of designers we are currently hiring for:
- UX Design
- Service Design
- Content Strategy
- Product Design

Some of the teams we are currently hiring for (not a complete list):
Please note, while a candidate's preference on teams may be taken into consideration, a final hiring decision on which team a candidate will join depends on the candidate's skillsets as well as current needs of each team. 
- [18F](https://18f.gsa.gov/): Cross-discipline teams that work on projects supporting agencies across the federal government.
- [USAGov](https://www.usa.gov/): A team supporting a large web presence, including the government’s “front door” that routes the public to government agency resources.
- [Centers of Excellence](https://coe.gsa.gov/): Cross-discipline teams work with agency partners and industry to accelerate enterprise-wide IT & data modernization with emphasis on improving the customer and employee experience.
- [Login.gov](https://login.gov/): Teams supporting a product that manages identity for interactions with the federal government.

{% comment %}🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺{% endcomment %}

{% comment %}🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻{% endcomment %}

## Key objectives
### 1. Demonstrate excellence in design, while grasping the core questions and responsibilities of at least one design discipline.

In addition to strong skill in experience design, we expect expertise in at least one of the following disciplines:
- Support collaborative decision-making by telling compelling stories drawn from research to build shared understanding
- Show persistent commitment to thoughtful, inclusive, ethical user research
- Deliver whatever’s needed to guide development — this could include wireframes, sitemaps, flowcharts, storyboards, user stories, or other innovative approaches
- Create written materials and visual presentations that are accessible to non-experts as well as being legally and technically accurate

### 2. Advance design practices
- Clearly communicate user-centered methods and their value to non-designers
- Mentor and coach colleagues and partners who are taking on new tasks and roles within design and research
- Share knowledge, techniques, tools, patterns, and expert advice with colleagues, partners, and the public
- Promote empathy not just for members of the public, but also for our partners across the government and our co-workers
- Contribute to team-wide resources and training materials, including methods, tutorials, guides, presentations, and design toolkits

### 3. Work effectively in the federal government
- Build inclusive, respectful partnerships with diverse groups of people
- Participate in design activities and work effectively with cross-disciplinary teammates
- Demonstrate genuine interest in the day-to-day activities that keep our government running

{% comment %}🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺{% endcomment %}


**Employee benefits:**
[Learn more about the benefits we offer.](https://join.tts.gsa.gov/compensation-and-benefits/)
  - Health insurance (choose from a wide range of plans)
  - Life insurance coverage with several options
  - Sick leave and vacation time, including 10 paid holidays per year
  - Thrift Savings Plan (similar to a 401(k) plan)
  - Flexible work schedules and telework
  - Transit and child care subsidies
  - Training and development
  - Flexible spending accounts
  - Long-term care insurance
  - Training and development
  - Direct Deposit of salary check to financial organization required.

## Qualifications

Provide as much detail as possible on your resume so that we can evaluate your previous experience. Follow our [guidance on creating a federal style resume.](https://join.tts.gsa.gov/resume/)

Qualification determinations can’t be made when resumes don’t include the required information. Failure to provide required information may result in disqualification.

For each job on your resume, provide:
- The exact dates you held each job (from month/year to month/year or “present”)
- Number of hours per week you worked (if part time)

All applications will be reviewed by a panel of subject matter experts against a scoring rubric created for this role. In order to properly be able to evaluate your previous experience, we recommend being as detailed as possible in your resume and following our general guidance on creating federal style resume.


## How To Apply

Submit a complete online application prior to {{ closes | date: '%l:%M%P %Z ET on %A, %B %e, %Y' }}. Please fill out all applicable fields.

<section class="usa-grid-full">
  <a class="usa-button usa-button-secondary" href="{{ apply_url }}">Click here to apply</a>
</section>

**Need Assistance in applying or have questions regarding this job opportunity, please email {{ contact_name }} at** [{{ contact_email }}](mailto:{{ contact_email }}).
