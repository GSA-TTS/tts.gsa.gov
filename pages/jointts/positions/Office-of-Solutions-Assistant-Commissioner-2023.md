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
title: "Office of Solutions: Assistant Commissioner"                            # title of the page/position
title-header: Assistant Commissioner
permalink: /join/Office-of-Solutions-Assistant-Commissioner-2023/             # should be unique /join/<unique-value>
tags: job                                        # tag used to sort into job collection
state: open                                  # upcoming, open, closed | template = excluded
job_post_type: usajobs                           # not sure if this is used anymore?


# INSTRUCTIONS UPCOMING: 
# - These fields are required for `state: upcoming`

role_name: OoS Assistant Commissioner                          # name of role
opens: '2023-08-21 09:00'                        # Will not appear on /join until
closes: '2023-09-20 23:59'                       # Will disappear from /join 
weeks_open: 52
location: 'Anywhere in the U.S. (remote)'
gs_level: '20'
salary_min: '141,022'
salary_max: '201,720'
org: 'TTS'
contact_name: 'TTS Talent Team'
contact_email: 'jointts@gsa.gov'

# OPTIONAL UPCOMING -
# - to remove, just elete info_sessions or leave it blank info_sessions:
info_sessions:                             
  - link: https://bit.ly/GSAAsstCommOfcSol8Sep23
    date: 2023-09-08
    time: 1:00-2:00pm ET (10:00am -11:00am PT)
    
# INSTRUCTIONS OPEN: 
# - These fields are required for `state: open`

job_announcement_number: ''
pd_job_title: 'Senior Executive Service (SES)'
num_vacancies: '100'
max_applications: 0
series: '2210'
apply_url: 'https://www.usajobs.gov/job/744285900'
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
  Applications will be open for submission on {{ opens | date: '%A, %B %e, %Y' }}. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to
  learn more about the application process.
  {%- endunless -%}
{%- endif -%}

## Opportunity overview

These opportunities are located in the General Services Administration (GSA), Federal Acquisition Service (FAS), Technology Transformation Services (TTS). TTS applies modern methodologies and technologies to improve the lives of the public and public servants. We help agencies make their services more accessible, efficient, and effective with modern applications, platforms, processes, personnel, and software solutions.

We will be interviewing and hiring for this role on an ongoing basis and to help navigate the process, we’ve created a [guide](https://join.tts.gsa.gov/rolling-hiring/) to help explain what to expect after submitting your resume.

{% comment %}🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻{% endcomment %}
## Role summary

The Office of Solutions Assistant Commissioner is responsible for supplying the federal government with the technology solutions (i.e., technology products, platforms, and programs) it needs to meet the needs of the American public. The Assistant Commissioner represents and speaks for the Deputy Director, TTS on technology solutions initiatives and services with senior GSA officials, top level executives from other federal agencies and the public and private sectors, Congressional representatives, the news media and other public media outlets.

The ideal candidate will encompass the following:
- An experienced leader who knows from successes and failures the best practices in
software development for digital products and network service;
- An influential facilitator who knows how to effectively communicate and motivate
cross-functional teams; 
- A strategic thinker able to define or redefine product strategies and roadmaps
based on rigorous and inclusive research and service design, designing a measurable
strategy to achieve that vision, communicating the vision, and driving delivery
against the strategy;
- A pragmatic detective comfortable with uncertainty and ambiguity using both
quantitative and qualitative methods to evaluate the direction of products;
- An empathetic coach, teacher, and advocate who helps staff develop their skills. 

{% comment %}🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺{% endcomment %}

{% comment %}🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻{% endcomment %}

## Key objectives
### 1. Program Execution & Governance
- Drive the successful execution and delivery of TTS technology products and
services through the supervision of large cross-functional teams made up of
senior-level product managers, product owners, engineers, data scientists
and analysts, and designers for the development of digital solutions in the
public sector.
- Leverage best practices and lead strategic and tactical organizational
change such as internal process improvements (e.g. agile transformations) or
structural realignments
- Establish internal controls and oversight for product development programs
and operations ensuring ethical standards and compliance with legal and policy
requirements.
- Continually promote TTS’s values by making a strong case for iterative,
user-centered design on every project.
### 2. Stakeholder Engagement
- Collaborate with other parts of GSA and other government agencies to expand
the impact and potential of TTS’ products and services
- Collaborate with senior-level customers and/or stakeholders to define the
strategy, evaluating feasibility and opportunity while managing risk to arrive
at a balanced portfolio of products and programs.
- Partner with other program and product leaders within TTS to enable success
for the entire organization
- Represent TTS at conferences and events to connect with government leaders
and others in the civic technology space
### 3. Team Leadership
- Collaborating with TTS talent acquisition, GSA human resources, and procurement
to identify full-time and temporary staffing options and secure appropriately
skilled talent
- Hire and onboard team members with clear training plans and performance
expectations that include annual performance goals for each role
- Assist in the development of individual career paths through identifying
professional goals, development opportunities, and learning needs. 
- Serve as a coach, mentor, and teacher to the team
- Holds TTS Solutions’ teams accountable for delivering their outcomes and goals
- Strengthen and support TTS’ values, practices, and organizational health
### 4. Organizational Strategy
- Contribute to refining the overall direction and vision of TTS
- Develop long-term strategies to achieve TTS Solutions’ goals and objectives
- Anticipate changes and suggest adaptations of TTS’ strategies accordingly
- Identify potential risks to TTS’ and implements strategies to mitigate them

{% comment %}🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺{% endcomment %}


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

All applicants must meet the Mandatory Technical and Executive Core Qualification requirements listed below to be eligible for consideration. Eligibility will be based on a clear demonstration that the applicant’s training and experience are of the scope, quality and level of responsibility sufficient to successfully perform the duties and r esponsibilities of this executive position.

**MANDATORY TECHNICAL COMPETENCIES:**

**1. Demonstrated senior-level experience leading medium to large scale (100+) digital 
technical organizations through the development and delivery of products and services 
to end users (consumer or business). This experience must include:**
  - Defining and/or redefining product strategies and roadmaps based on newly discovered
  consumer or business needs based on data-driven insights and measured outcomes.
  - Delivering direct value to end users through software delivery or innovation,
  ensuring continuous discovery of business and user needs, or the operational
  improvement of a product or service in production.
  - Experience crafting or creating product vision, strategy or road maps.
  - Experience working with cross-functional teams.

**2. Demonstrated senior-level experience leading medium to large scale (100+) technical
organizations through the improvement of internal operational processes.
This experience must include:**
  - Extensive experience in communicating/coordinating with internal and external
  stakeholders to negotiate and successfully implement program objectives.
  - Experience leading large cross-functional teams made up of senior-level product
  managers, product owners, engineers, data scientists and analysts, and designers
  for the development and employment of digital solutions in the private or public sector
  - Experience hiring, training, and supervising first and/or second line supervisors,
  manager, and staff (technical and non-technical) focused on building, delivering and
  maintaining technology products and services.
  - Experience leading strategic and tactical organizational change such as internal
  process improvements (e.g. agile transformations) or structural realignments
  - Creating and delivering talent growth and development plans through a culture of
  continuous improvement that include succession planning for key positions.

**3. Demonstrated executive-level experience in managing the performance of medium to
large digital technology organizations (service providers, consulting).
This experience must include:**
  - Collaborating with senior-level customers and/or stakeholders to define the
  strategy evaluating feasibility and opportunity while managing risk to arrive at a
  balanced portfolio of products and programs.
  - Providing oversight for operational management of business agreements, financial
  planning, hiring practices, stakeholder communications, and partner relationships.



**EXECUTIVE CORE QUALIFICATIONS - ECQs:**

**1. Leading Change:** This core qualification involves the ability to bring about strategic
change, both within and outside the organization, to meet organizational goals. Inherent
to this ECQ is the ability to establish an organizational vision and to implement it in
a continuously changing environment.

**2. Leading People:** This core qualification involves the ability to lead people toward
meeting the organization's vision, mission, and goals. Inherent to this ECQ is the
ability to provide an inclusive workplace that fosters the development of others,
facilitates cooperation and teamwork, and supports constructive resolution of conflicts.

**3. Results Driven:** This core qualification involves the ability to meet organizational
goals and customer expectations. Inherent to this ECQ is the ability to make decisions
that produce high-quality results by applying technical knowledge, analyzing problems,
and calculating risks.

**4. Business Acumen:** This core qualification involves the ability to manage human,
financial, and information resources strategically.

**5. Building Coalitions:** This core qualification involves the ability to build coalitions
internally and with other Federal agencies, State and local governments, nonprofit and
private sector organizations, foreign governments, or international organizations to achieve
common goals.

## How To Apply

Submit a complete online application prior to {{ closes | date: '%l:%M%P %Z ET on %A, %B %e, %Y' }}. Please fill out all applicable fields.

<section class="usa-grid-full">
  <a class="usa-button usa-button-secondary" href="{{ apply_url }}">Click here to apply</a>
</section>

**Need Assistance in applying or have questions regarding this job opportunity, please email {{ contact_name }} at** [{{ contact_email }}](mailto:{{ contact_email }}).
