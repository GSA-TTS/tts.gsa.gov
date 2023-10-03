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
title: "Login.gov: Engineer GS15"                            # title of the page/position
title-header: Engineer
permalink: /join/login-engineer-2023/             # should be unique /join/<unique-value>
tags: job                                        # tag used to sort into job collection
state: upcoming                                  # upcoming, open, closed | template = excluded
job_post_type: usajobs                           # not sure if this is used anymore?


# INSTRUCTIONS UPCOMING: 
# - These fields are required for `state: upcoming`

role_name: Engineer                          # name of role
opens: '2023-11-10 09:00'                        # Will not appear on /join until
closes: '2023-11-12 23:59'                       # Will disappear from /join 
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
    date: 2023-02-13
    time: 1:30-2:30pm ET (10:30am -11:30am PT)
    
# INSTRUCTIONS OPEN: 
# - These fields are required for `state: open`

job_announcement_number: ''
pd_job_title: 'IT Specialist (SYSANALYSIS)'
num_vacancies: '100'
max_applications: 400                                 # set to 0 if there is no application limit
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




## Basic information

Open to U.S. citizens or nationals (residents of American Samoa and Swains Island). Subject to background check. Full information will be available on USAJOBS.

**Supervisory status:** Non-Supervisory

**Job title:** {{ title }}

**Official title in USAJOBS:** {{ offical_title }}

**Number of vacancies**: 4

**Location:** {{ location }}

**Salary Range:** The salary ranges for this position are:
- GS-14 (${{salary_min}} to ${{salary_max}})

Your salary, including base and locality, will be determined upon selection, dependent on your actual duty location. Please note the maximum salary available for the GS pay system is $183,500. For specific details on locality pay, please visit [OPM’s Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/) or for a salary calculator [OPM’s 2023 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2023/general-schedule-gs-salary-calculator/). You can find more information in our [compensation and benefits section](https://join.tts.gsa.gov/compensation-and-benefits/).


**Who May Apply:**
All United States citizens and nationals (residents of American Samoa and Swains Islands).

**Travel requirement:**
Occasional travel may be required up to 10% per year.


**Work schedule:**
Full time.

**Appointment type:**
This is a permanent position.


## Role summary

This opportunity is located in the Technology Transformation Services (TTS) Solutions Division’s Login.gov team. The Login.gov team is remote-first and is composed of experts across product development, software engineering, cybersecurity, and platform engineering. 

Login.gov is a FedRAMP authorized secure sign-in service created for the public to access participating government agency sites, products, and services. At its core, Login.gov is both an authentication and identity verification service and is now available to all levels of government: federal, state, and local.

Login.gov is looking for talented Engineers to help us deliver better digital services to the public. At Login.gov, you will be a builder, contributor, and a catalyst. With the support of the team, you will solve large complex problems while spreading user-centered, open, and transparent culture. You can be writing code one day, going to meet with members from partner agencies another day, and launching a new product that will impact the lives of Americans across the country the next week. Login.gov is an open source team, so most of what you work on will be open source.

This role is perfect for you if you care deeply about building great public-facing digital products and services. You should be excited to apply your skills, share them with your colleagues, and learn from them in turn.

Login.gov’s core languages are Ruby, Python, JavaScript, and Go. You should have experience with at least one of those languages, and should be proficient in web development, relational databases, and using Unix-like operating systems. You should understand engineering best practices such as source control, automated testing, continuous integration and deployment, and peer review. The best candidates will have a background working on cross-functional, multidisciplinary teams that deliver digital products and services in an incremental, user-focused environment.

{% comment %}🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺{% endcomment %}

{% comment %}🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻{% endcomment %}

## Key objectives
### 1. You will contribute high-quality, well-tested, maintainable code across an entire project lifecycle, using modern software development best practices. 
- Practice and enthusiastically share engineering methodologies and tools throughout all stages of the project lifecycle.
- Use usability research, analytics, and other metrics to influence project planning and design.
- Participate in code review, architecture discussions, and feature prioritization.
- Contribute to documentation, tests, style fixes, accessibility, performance, security, etc.
- Deliver code that is easy to deploy, update, and monitor by ensuring the tooling for this is present early in the project development cycle or by introducing tooling into an existing project as needed.

### 2. You will participate as part of the engineering team, practicing and enthusiastically share agile methodologies throughout all stages of the project lifecycle. 
- Work within a distributed multidisciplinary agile team(s) by participating in constructive discussions, sharing knowledge openly, and demonstrating value for technical and non-technical contributions. 
- Support a safe and inclusive workplace as well as a positive team culture where diversity and individual differences are valued and leveraged.
- Provide visibility into progress, communicate blockers and challenges, and ask for help when necessary.
- Understand elements of agile methodology (scrum, kanban, etc).
- Practice human centered design, user testing, feature prioritization, DevOps, and other relevant concepts.

### 3. You will meet personal and organizational goals and customer expectations. You’ll produce high-quality results by applying technical knowledge, analyzing problems, and calculating risk.
- Hold yourself and your team accountable for measurable high-quality, timely, and cost-effective results.
- Be a credible technician in your area of expertise, deliver high-quality work, and accept responsibility for mistakes.
- Identify and analyze problems in a constructive manner.
- Meet the needs of internal and external customers.

### 4. You’ll lead change, within and outside the organization, to meet organizational goals. You’ll help establish an organizational vision and implement it in a continuously changing environment.  
- Develop new insights into situations and question conventional approaches.
- Keep up-to-date on policies and trends that affect the organization and shape stakeholders’ views.
- Formulate and execute consistently against objectives and priorities.

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


## How To Apply

Get [notified]({{ site.baseurl }}/join/newsletter") when this position is open for applications.
