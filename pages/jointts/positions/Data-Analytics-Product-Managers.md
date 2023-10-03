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
title: "Data & Analytics Portfolio: Product Manager GS15"  # title of the page/position
title-header: Product Manager
permalink: /join/Data-Analytics-Product-Managers/             # should be unique /join/<unique-value>
tags: job                                        # tag used to sort into job collection
state: open                                  # upcoming, open, closed | template = excluded
job_post_type: usajobs                           # not sure if this is used anymore?


# INSTRUCTIONS UPCOMING: 
# - These fields are required for `state: upcoming`

role_name: Product Manager                          # name of role
opens: '2023-09-17 09:00'                        # Will not appear on /join until
closes: '2023-10-06 23:59'                       # Will disappear from /join 
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
  - link: https://gsa.zoomgov.com/meeting/register/vJIsdeGrqzgoHqAd_luZcJuEG7mvGx22jLc#/registration
    date: 2023-09-27
    time: 12:00 - 1:00pm ET (9:00am - 10:00am PT)
  - link: https://gsa.zoomgov.com/meeting/register/vJItf-CorzsqHpbIHq9nISsXacicLey_cWw#/registration
    date: 2023-09-28
    time: 3:00 - 4:00pm ET (12:00pm - 1:00pm PT)
    
# INSTRUCTIONS OPEN: 
# - These fields are required for `state: open`

job_announcement_number: ''
pd_job_title: 'IT Specialist (SYSANALYSIS)'
num_vacancies: '100'
max_applications: 0
series: '2210'
apply_url: 'https://www.usajobs.gov/job/750109600'
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
Open to U.S. citizens or nationals (residents of American Samoa and Swains Island). Subject to background check. Full information is available on [USAJOBS](https://www.usajobs.gov/job/750109600).

**Supervisory status:** Non-Supervisory

**Job title:** {{ title }}

**Official title in USAJOBS:** IT Program Manager (INET/DATAMGT) GS-15

**Number of vacancies:** 1

**Location:**
{{ location }}

**Salary Range:**
The salary ranges for this position are:
- ${{salary_min}} to ${{salary_max}}

Your salary, including base and locality, will be determined upon selection, dependent on your actual duty location. Please note the maximum salary available for the GS pay system is $183,500. For specific details on locality pay, please visit [OPM’s Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/) or for a salary calculator [OPM’s 2023 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2023/general-schedule-gs-salary-calculator/). You can find more information in our [compensation and benefits section](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2023/general-schedule-gs-salary-calculator/).

**Travel requirement:**
Occasional travel may be required up to 10%-20% per year.

**Work schedule:**
Full time.

**Appointment type:**
This is a term appointment. Initial appointments are made lasting longer than 1 year, but not to exceed 4 years. GSA, may extend an appointment up to 4 additional years. No individual hired under this DHA can serve in excess of 8 years with GSA, and cannot be transferred to positions that are not IT positions.

Learn more about the benefits of working at [GSA](https://www.gsa.gov/portal/category/26702) and [TTS](https://join.tts.gsa.gov/compensation-and-benefits/).


## Role summary

The Digital Analytics Program (DAP) is the Federal Government’s aggregated web-analytics shared-service. The DAP currently collects and maintains web analytics data on over 6,000 public-facing US federal government websites. Since 2012, the program has been used to analyze data at both micro and macro levels to improve User Experience. Additionally, the DAP team provides a public window into this data by maintaining analytics.usa.gov, the dashboard for portions of DAP data.

A unified, aggregated datastore of web analytics helps site owners, content strategists, designers, communications professionals, and more analyze website visit data to improve delivery of government content and services. Public-facing government Executive Branch website participation in the program is mandated by OMB M-17-06.

This position is to serve as Program Manager (PM) for the Digital Analytics Program (DAP), part of the Data and Analytics Portfolio, Office of Solutions, Technology Transformation Services, Federal Acquisition Service, in the U.S. General Services Administration. The PM will lead efforts to implement GA4 for all participating sites, move DAP data into BigQuery, and redesign analytics.usa.gov, all while providing prompt and professional customer service to DAP’s existing and future users and stakeholders.

Our ideal candidates will be equally excited about sticky technical issues and intricate human ones. The strongest candidates will have a background working on cross-functional, multidisciplinary teams that deliver digital products and services in an incremental, user-focused environment.


## Key objectives
**1. Build or steward the product vision and lead end-to-end product development.**
You are an experienced product manager who can unite vision and execution to lead an interdisciplinary team in delivering the right value to the right people. You’re skilled at defining a meaningful end goal to galvanize your team, whether that means generating a product vision and strategy with your team or helping agency partners articulate and focus their vision and strategy.
  - Establish a vision and ensure all team members and stakeholders have a shared understanding of product objectives, goals, and metrics
  - Analyze market demand and market fit, do competitive analysis, and guide build vs. buy or reuse approaches
  - Create a product strategy and roadmap and develop a communications strategy supporting product goals
  - Identify and proactively monitor and address product risks
  - Lead or facilitate a cross-functional team of researchers, designers, and engineers to ensure the right product is delivered to the right audience
  - Work with the team to set and meet quality standards for any product you build
  - Use evidence (user research, analytics, and other metrics) to make product decisions, ask “why” a lot, and recognize the difference between “we can’t do that because of bureaucracy” and “we can’t do that because of the law”
  - Energize and motivate the team by recognizing successes and learning from failures
  - Ensure that products comply with federal regulations such as the 21st Century IDEA Act, the Federal Information Security Modernization Act (FISMA), and Section 508 of the Rehabilitation Act of 1973.

**2. Support agency partners in delivering results to the public.**
As a product manager at TTS, you’ll uphold a modern product development mindset and make sure every project you touch is set up for sustained long-term success. As part of that, you’ll share your expertise and experience with your teammates and stakeholders in order to ensure that you are not a single point of success.
  - Help partners understand how to deliver value, rather than features, to their users
  - Help teammates and stakeholders navigate complex bureaucratic relationships to bring stakeholders together around a common product vision and strategy
  - Advocate for and explain agile, open source, and user-centered principles so that teammates, stakeholders, and government partners understand the value these practices bring
  - Improve the government’s product management capacity by coaching and mentoring more junior product managers
  - Work with partners to establish relationships with their security, operations, and IT teams that will help sustain the product in the long term
  - Work with teammates and stakeholders to develop communications strategies to sustain the product in the short and long term

**3. Achieve excellence in customer-centric technical leadership.**
You’ll meet customer expectations, along with personal and organizational goals. You’ll produce high-quality results by applying technical knowledge, analyzing problems, and calculating risk.
  - Hold yourself and your team accountable for measurable, high-quality, timely, and cost-effective results
  - Demonstrate your credibility in your area of expertise, deliver high-quality work, and accept responsibility for mistakes
  - Meet the needs of internal and external customers
  - Make well-informed, effective, and timely decisions
  - Identify and analyze problems in a constructive manner
  - Explain technical issues and concepts clearly to both technical and non-technical audiences

**4. Lead in your program area(s).**
While the entire team will have and continually enhance core expertise in technology and organizational modernization, each team member will also further hone one or more Focus Areas that contribute to the collective, cross-functional capabilities within TTS’s Data & Analytics Portfolio.

  - **Data.gov** is the United States government's open data website. It provides access to datasets published by agencies across the federal government. Data.gov is intended to provide access to government open data to the public, achieve agency missions, drive innovation, fuel economic activity, and uphold the ideals of an open and transparent government. As an **Open Data Product Manager for Data.gov**, your responsibilities will include:
    - Developing and maintaining a product strategy for Data.gov; ensuring alignment with broader federal open data efforts, the OPEN Government Data Act, and agency objectives and priorities.
    - Overseeing the product design process, working closely with UX/UI Designers to create intuitive and user-friendly features for Data.gov, and managing the design and delivery of features such as data visualization tools, dashboards, and reporting systems.
    - Establishing and maintaining strong relationships with internal and external stakeholders; ensuring effective communication of product updates, progress, and performance. Represent Data.gov in interagency efforts addressing issues such as metadata schemas applicable to federal data.

  - **Feedback Analytics Program** develops and manages government-wide services that collect and report quantitative and qualitative customer feedback to aid service improvement and decision-making. This includes methods to evaluate progress toward achieving customer experience goals and inform continual improvements to service design and delivery. As a **Product Manager for Feedback Analytics**, your responsibilities will include:
    - Developing and maintaining a product strategy for Feedback Analytics products including the use cases served by Touchpoints, ensuring alignment with broader federal feedback and public experience initiatives, the 21st Century Digital Experience Act, and agency objectives and priorities.
    - Overseeing the product design process, working closely with UX/UI Designers to create intuitive and user-friendly features for Feedback Analytics, and managing the design and delivery of features such as data visualization tools, dashboards, and reporting systems.
    - Establishing and maintaining strong relationships with internal and external stakeholders; ensuring effective communication of product updates, progress, and performance. Represent Feedback Analytics in interagency efforts addressing issues such as metadata schemas applicable to federal data.

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

Provide as much detail as possible on your resume so that we can evaluate your
previous experience. Follow our
[guidance on creating a federal style resume.](https://join.tts.gsa.gov/resume/)

Failure to provide required information may result in disqualification.

For each job on your resume, provide:

- The exact dates you held each job (from month/year to month/year or “present”)
- Number of hours per week you worked (if part time)

**SPECIALIZED EXPERIENCE REQUIREMENTS:**

To qualify, you must have one (1) year of specialized experience at the next
lower GS-grade (or equivalent). Specialized experience for this role is defined as: 
  - Experience developing and implementing a product strategy that aligns with strategic objectives and user needs
  - Experience leading cross-functional teams of software engineers, data analysts, user experience/user interface designers to develop and deliver features
  - Experience overseeing product design and working with designers to create user-friendly tools, dashboards and reporting systems
  - Experience utilizing web and data analytics and data management tools to inform product strategy and monitor performance
  - Experience developing and maintaining relationships with internal and external stakeholders to represent and advance program interests


## How To Apply

Get [notified]({{ site.baseurl }}/join/newsletter") when this position is open for applications.
