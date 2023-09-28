---
#
# This template has general instructions on variables to create open and upcoming jobs
#

# INSTRUCTIONS GENERAL:
# - These are some of the main mandatory variables needed for functionality.

layout: layouts/jointts/job-updated              # layout used to render job information
title: "FedRAMP: Information Systems Security Officer (ISSO)/Cloud Security Assessment GS13"
title-header: FedRAMP - Information Systems Security Officer
permalink: /join/fedramp-isso-cloud-security/             # should be unique /join/<unique-value>
tags: job                                        # tag used to sort into job collection
state: upcoming                                  # upcoming, open, closed | template = excluded
job_post_type: usajobs                           # not sure if this is used anymore?

# INSTRUCTIONS UPCOMING: 
# - These fields are required for `state: upcoming`

role_name: FedRAMP ISSO                          # name of role
opens: '2023-12-26 09:00'                        # Will not appear on /join until
closes: '2024-02-01 23:59'                       # Will disappear from /join 
weeks_open: 52
location: 'Anywhere in the U.S. (remote)'
gs_level: '13, 14, 15'
salary_min: '98,496'
salary_max: '158,432'
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
max_applications: 0
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

**Number of vacancies:** 3

**Location:** {{ location }}

**Salary Range:**
The salary ranges for this position are:
- GS-13 (${{salary_min}} to ${{salary_max}})

Your salary, including base and locality, will be determined upon selection, dependent on your actual duty location. Please note the maximum salary available for the GS pay system is $183,500. For specific details on locality pay, please visit [OPM’s Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/) or for a salary calculator [OPM’s 2023 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2023/general-schedule-gs-salary-calculator/). You can find more information in our [compensation and benefits section]({{ site.baseurl }}/join/compensation-and-benefits/).

**Travel requirement:** Occasional travel may be required up to 10%-20% per year.

**Work schedule:** Full time.

**Appointment type:** This is a permanent position.

Learn more about the benefits of working at [GSA](https://www.gsa.gov/portal/category/26702) and [TTS]({{ site.baseurl }}/join/compensation-and-benefits/).

## Role summary

The American people deserve to trust that their government is effectively securing their online interactions. Those agencies, in turn, trust FedRAMP to provide fair, accurate and unbiased assessments of cloud service offerings. FedRAMP is a government-wide program that promotes the adoption of secure cloud services across the federal government by providing a standardized approach to security and risk assessment and maintaining a centralized repository of security packages that agencies can request and reuse.

The FedRAMP Program Lead will unite vision and execution to lead an interdisciplinary team in delivering the IT/Cybersecurity assessment of commercial cloud services leveraging current industry and government cybersecurity laws and policies.

## Key objectives
### 1. Own the product vision and lead end-to-end product/program development and management.
- Operates as part of the FedRAMP Cloud Assessment Team supporting program strategy and roadmap, including objectives, goals, and metrics, in support of federal cybersecurity and FedRAMP program policy.
- Develop a communications strategy and training that includes internal/external government and commercial stakeholders supporting Vulnerability Management program goals and expectations.
- Identify, proactively monitor and address program risks associated with cybersecurity and vulnerability management within the cloud cybersecurity assessment process.
- Work with the team to set and meet quality standards for vulnerability management deliverables.
- Make evidence-based program decisions through use of user research, analytics, and other tools.
- Ensure commercial cloud service providers adhere to federal regulations and standards.

### 2. Work with the team to set and meet quality standards for vulnerability management deliverables.
- Work with partners and stakeholders to operate within established in-house cloud security assessment program.
- Collaborate with partners to navigate complex bureaucratic relationships to bring stakeholders together around a common program vision and strategy to support the cybersecurity assessment of commercial cloud services..
- Work with partners to establish relationships with their security, operations, and IT teams that will help sustain the product in the long term.
### 3. Build expertise around program management.
- Keep abreast of program management best practices and share within the TTS organization to grow overall program management quality.
- Stay on top of new technologies and how they can be used to help solve government problems.
- Contribute to FedRAMP’s culture of transparency by publishing accounts of successes and challenges to help promote transparency and help agencies and commercial entities understand and navigate program complexities
- Continually seek out new tools that could improve the way we work.
- Pay attention to well-supported open source product offerings that can be reused in a government context to solve common problems.


## Qualifications

Provide as much detail as possible on your resume so that we can evaluate your previous experience. Follow our [guidance on creating a federal style resume.](https://join.tts.gsa.gov/resume/)

Qualification determinations can’t be made when resumes don’t include the required information. Failure to provide required information may result in disqualification.

For each job on your resume, provide:
- The exact dates you held each job (from month/year to month/year or “present”)
- Number of hours per week you worked (if part time)

### Specialized Experience Reruirements:
To qualify, you must have one (1) year of specialized experience at the next lower GS-grade (or equivalent). Specialized experience is defined as follows:
- Experience implementing, evaluating, and assessing cybersecurity and compliance standards, such as International Standards Organization (ISO), Health Insurance Portability and Accountability Act (HIPAA), Security Operations Center (SOC), Payment Card Industry (PCI), National Institute of Standards and Technology (NIST), or FedRAMP.
- Experience participating in the delivery of a highly complex digital program, product or business
- Experience building and managing collaborative relationships with a complex set of stakeholders to achieve program goals.
- Experience in developing organizational cybersecurity policy and practice to further the assessment of complex IT and cloud-based systems.



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
