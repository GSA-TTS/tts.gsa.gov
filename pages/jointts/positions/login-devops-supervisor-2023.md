---
#
# This template has general instructions on variables to create open and upcoming jobs
#

# INSTRUCTIONS GENERAL:
# - These are some of the main mandatory variables needed for functionality.

layout: layouts/jointts/job-updated              # layout used to render job information
title: "Login.gov: DevOps/Site Reliability Supervisory Engineer GS15"
title-header: DevOps/Site Reliability Supervisory Engineer
permalink: /join/login-devops-supervisor-2023/             # should be unique /join/<unique-value>
tags: job                                        # tag used to sort into job collection
state: open                                  # upcoming, open, closed | template = excluded
job_post_type: usajobs                           # not sure if this is used anymore?

# INSTRUCTIONS UPCOMING: 
# - These fields are required for `state: upcoming`

role_name: Login.gov - DevOps/Site Reliability Supervisory Engineer                          # name of role
opens: '2023-09-25 09:00'                        # Will not appear on /join until
closes: '2023-10-02 23:59'                       # Will disappear from /join 
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
  - link: https://www.eventbrite.com/...
    date: '2023-02-13 13:30'
    time: 1:30-2:30pm ET (10:30am -11:30am PT)

# INSTRUCTIONS OPEN: 
# - These fields are required for `state: open`

job_announcement_number: ''
pd_job_title: ''
num_vacancies: '100'
max_applications: 400
series: '2210'
apply_url: 'https://www.usajobs.gov/job/751014700'
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
Open to U.S. citizens or nationals (residents of American Samoa and Swains Island). Subject to background check. Full information is available on [USAJOBS]({{apply_url}}).

**Supervisory status:** Supervisory

**Number of vacancies:** 1

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

Login.gov provides the public simple, secure access to multiple government services through one verified account. Login.gov has over 10 million users and is growing the team as we scale quickly. Login.gov is committed to providing the best experience to everyone using government digital services and making accessing government services easy while combating fraud and abuse. 
Login.gov is seeking a qualified Platform Engineering Supervisor to join our infrastructure team. A qualified candidate will be able to immediately lead the team to: 
- Use platform engineering best practices to build and operate the Login.gov infrastructure at scale.
- Respond to incidents and lead incident response and postmortem review.
- Create automation in areas such as security compliance and code deployment.
- Meet with engineers and executives from prospective government agency customers to determine how Login.gov can adapt to meet their user identity needs.

The Login.gov team works in the open as a distributed, agile team. The core product is open source, hosted in modern cloud infrastructure, and built for scale. With over ten million users we aim to be the preferred entrypoint for all government digital services. Login.gov is used to access benefits, apply for government jobs, and collect funds awarded through grant programs. 

As part of the Login.gov infrastructure engineering team, you will make government services more secure and accessible to the public.


## Key objectives

### 1. Operate Login.gov with high standards of performance and reliability.
- Define key success metrics for Login.gov infrastructure and drive improvement toward those measuresLead a cross-functional team of researchers, designers, and engineers to
ensure product delivery.
- Create and improve monitoring systems to collect data about the application, notify on any errors, and improve visibility/observability into application behavior.
- Assist application teams in deploying code to the application regularly and as automatically as possible.
- Lead incident response and mitigate site errors as they occur.
- Lead postmortem discussions and drive continuous improvement to prevent similar outages.
- Participate and coordinate on call shifts, serving as first-line support for incidents.
### 2. Build Login.gov’s infrastructure using modern cloud infrastructure techniques.
- Use infrastructure-as-code (currently Terraform) and configuration management (currently Chef) to automate Login.gov’s AWS infrastructure
- Review code and consult with other engineers on new features and their implications for site performance, reliability, and security for the security of Login.gov Ruby on Rails services.
- Conduct load tests to ensure the application is ready to handle projected user traffic.
- Improve automation and fault tolerance of the deployment process.
- Drive long-term improvement in Login.gov system availability by removing single points of failure.
### 3. Supervise Platform Engineering within Login.gov team and outside partners.
- Handle site issues from partner agencies, dealing both with engineers and non-engineers.
- Oversee procurement process for tools and services used by Login.gov.
- Advocate for modern information security principles throughout the system.
- Balance agile development with mandatory government security compliance policies.
### 4. Grow, develop & support growth of your team.
- Research, develop, and encourage best practices in the key discipline(s) of your unit. Create space for experimentation and iteration.
- Identify and fill knowledge gaps for strategic projects.
- Identify Login.gov processes in need of improvement and oversee improvement activities. 
- Promote collective success; make time for collaborative decision-making in project work; acknowledge how others’ contributions led to achievements; and create shared ownership of success, risks, and accountability.
- Champion diversity, equity, inclusion, and accessibility.
- Support a safe, inclusive workplace and a positive team culture where all team members value diversity and individual differences.
- Collaborate across roles and organizations to build strategic relationships, achieve common goals, and to resolve sensitive issues.
- Work alongside talent specialists to continue hiring new engineers and project managers into the team.

## Qualifications

Provide as much detail as possible on your resume so that we can evaluate your previous experience. Follow our [guidance on creating a federal style resume]({{ site.baseurl }}/join/resume/).

Failure to provide required information may result in disqualification.

For each job on your resume, provide:

The exact dates you held each job (from month/year to month/year or “present”)
Number of hours per week you worked (if part time)

### Specialized Experience Requirements:

To qualify, you must have one (1) year of specialized experience at the next lower GS-grade (or equivalent).


## How To Apply

{% if state == 'upcoming' %}
  Get [notified]({{ site.baseurl }}/newsletter) when this position is open for applications.
{% else %}

  Submit a complete online application prior to Monday, October 2nd, 2023, at 11:59 pm ET. Please fill out all applicable fields.

  <section class="usa-grid-full">
    <a class="usa-button usa-button-secondary" href="{{ apply_url }}">Click here to apply</a>
  </section>

  **Need Assistance in applying or have questions regarding this job opportunity, please email {{ contact_name }} at** [{{ contact_email }}](mailto:{{ contact_email }}).

{%- endif -%}
