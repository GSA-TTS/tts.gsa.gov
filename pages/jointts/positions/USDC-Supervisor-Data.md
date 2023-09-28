---

# INSTRUCTIONS GENERAL:
# - These are some of the main mandatory variables needed for functionality.

layout: layouts/jointts/job-updated              # layout used to render job information
title: "U.S. Digital Corps: Fellow Experience Supervisor Data Science and Analytics GS14"
title-header: Designer
permalink: /join/usdc-supervisor-data/           # should be unique /join/<unique-value>
tags: job                                        # tag used to sort into job collection
state: open                                      # upcoming, open, closed | template = excluded
job_post_type: usajobs                           # not sure if this is used anymore?

# INSTRUCTIONS UPCOMING: 
# - These fields are required for `state: upcoming`

role_name: TTS Designer                          # name of role
opens: '2023-08-21 09:00'                        # Will not appear on /join until
closes: '2023-09-01 23:59'                       # Will disappear from /join 
weeks_open: 52
location: 'Anywhere in the U.S. (remote)'
gs_level: '14'
salary_min: '94,373'
salary_max: '176,300'
org: 'TTS'
contact_name: 'TTS Talent Team'
contact_email: 'jointts@gsa.gov'

# OPTIONAL UPCOMING -
# - to remove, just elete info_sessions or leave it blank info_sessions:

info_sessions:  
  - link: https://www.eventbrite.com/e/us-digital-corps-supvr-data-science-prod-mgmt-gs14-info-sess-tickets-695453148087?aff=oddtdtcreator
    date: '2023-08-15 14:30'
    time: 2:30-3:30pm ET (11:30am -12:30pm PT)
  - link: https://www.eventbrite.com/e/us-digital-corps-supvr-data-science-prod-mgmt-gs14-info-sess-tickets-695463388717?aff=oddtdtcreator
    date: '2023-08-17 12:30'
    time: 12:30-1:30pm ET (9:30am -11:30am PT)

# INSTRUCTIONS OPEN: 
# - These fields are required for `state: open`

job_announcement_number: ''
pd_job_title: 'Supervisory IT Specialist'
num_vacancies: '100'
max_applications: 0
series: '2210'
apply_url: 'https://www.usajobs.gov/job/742594300'
ohrm_contact_email: 'tts-hrstaffers@gsa.gov'
ohrm_contact_name: 'Loyola Ukpokodu'
bargaining_unit: 'Non Bargaining Unit'
promotion_potential: '15'
supervisory_status: 'No'

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

## Role summary

The U.S. Digital Corps (USDC) is a new two-year fellowship for early-career technologists to launch impactful careers in public service and create a more effective, equitable government. USDC pairs early-career and highly-skilled, mission-driven software engineers, data scientists, product managers, designers, and cybersecurity specialists with top technology changemakers in the federal government to build human-centered solutions to some of our nation’s toughest challenges. Our Fellows are the engines on projects that create change in the areas of climate, healthcare, racial equity, immigration, economic recovery, and open innovation. The Digital Corps was launched in August 2021 by GSA in partnership with the White House, CISA, and OPM. USDC welcomed its first cohort of Fellows in 2022 and is in the process of bringing on its second cohort starting in July 2023.

Key area of focus: Fellow Management, Support & Development

A U.S. Digital Corps Data Fellow Supervisor directly supervises and coaches early-career technology Fellows focused on data science and analytics work; ensuring USDC Fellows are reaching their potential for impact. The USDC program places Fellows for 90% of their time on a high priority project at a placement agency; the remaining 10% of time is spent with the USDC Corps and is focused on coaching, learning, development, and participation in the USDC Community. Because of this structure, day to day management of Fellow’s work is done by the placement agency and each USDC Supervisor manages approximately 15-20 Fellows within their technical area of expertise, with support structures that vary depending on the needs of the fellows. As such, the majority of 1:1 time between Supervisor and Fellow is focused on Fellow coaching, growth, and support and not activities like tasking or reviewing project work.

Each U.S. Digital Corps Supervisor is a skilled Data Science and Analytics technologist in their own right and uses their discipline specific knowledge, excellence in coaching & management, and ongoing engagements with USDC Fellows to inform the design and execute the delivery of the Product Fellow learning & development curriculum throughout the two year cohort experience. USDC Supervisors take the lead on USDC Product Track specific programming within their domain of expertise.

A USDC Supervisor also works closely with Agency partners to ensure that Fellows receive the structures and support to be successful while on placement with their Agency - starting before the Fellow begins work, through the fellowship period, and until the final permanent offboarding transfer to the Agency occurs.

## Key objectives
### 1. Provide data science and analytics coaching, mentorship, and professional development opportunities; support employee wellbeing for Digital Corps Fellows
- Steward the Fellow’s personal professional development by identifying and providing appropriate training, developmental assignments, and/or support focusing on data analytics tools, software, or methods that are relevant to the Fellows' projects.
- Utilize previous experience as a Data Science and Analytics practitioner and supervisor to
    - Assess and provide feedback on Fellows' competencies in data analytics tools and methods.
    - Encourage continuous learning and staying updated with the latest trends, tools, and best practices in data science and analytics.
    - Identify  real-world leadership opportunities for your fellows to coach, teach, and apply their data science and analytics skills in public service and guide Fellows in leveraging these opportunities.

- Engage regularly with your Fellows, as a Cohort group and in 1:1s, to provide mentorship and guidance, support, and help remove obstacles to their success.
    - Help design and implement cohort wide and track specific virtual and in-person learning and engagement experiences during the course of the fellowship. Incorporate equity and inclusion into training, speaking events, and experiential learning opportunities.  
    - Constructively address situations, issues, and behaviors. Initiate difficult conversations and clearly communicate corrective actions. 
    - Ensure Fellows receive reasonable accommodations and that team events are accessible.
    - Research & Implement feedback systems between Fellows, agency placement leads, and the PMO to inform Fellow performance measurement, agency engagement, and PMO design & strategy. 
    

- Manage HR processes
    - Support the onboarding of Fellows. 
    - Submit and approve timesheets and leave requests in HR Links every pay period for all direct reports
    - Conduct and document employee performance plans, mid-year, and end-of-year performance evaluations.
    - Ensure U.S. Digital Corps adheres to all Pathways Recent College Graduate requirements that pertain to Fellow support, learning & development, and mentorship.
    - Facilitate Fellow career ladder and service changes; specifically promotions to GS-11 & GS-12 at the appropriate times within the fellowship and conversion from excepted to career service upon completion of the Recent Graduates portion of the fellowship.
 
### 2. Provide leadership in two or more of the following areas, while maintaining competence in other key discipline skills
- Fellowship Experience Management Design, develop, and successfully manage the end to end Fellow experience and employee lifecycle -  from onboarding, to engagement/in-program support & performance management, to offboarding and conversion into permanent roles.
- Learning and Development Programming Identify and deliver appropriate and high quality professional, technical, and government specific learning & development opportunities to support early career technologist’s learning and growth needs.
- Employee Support & Engagement Create equitable, inclusive, accessible, engaging, and supportive teams or organizations.
- Partner Agency Management & Success Maintain strong working relationships with partner agencies. Develop, and lead a shared support model with agency partners that ensures alignment, ongoing performance feedback, and mutual support for the Fellow during the fellowship period.
- Talent Program Operations Design and execute processes and practices that support program consistency and quality talent outcomes.
### 3. Support the growth & development of the U.S. Digital Corps program and build stronger values-driven practices
- Collaborate across roles and organizations to build strategic relationships, achieve common goals, and to resolve sensitive issues.
- Support strategic outreach activities to include college fairs, professional conference, as speaking engagements
- Promote collective success; make time for collaborative decision-making in project work; acknowledge how others’ contributions led to achievements; and create shared ownership of success, risks, and accountability.
- Within the Fellow learning, development, and experience areas of focus
    - Research, develop, and encourage best practices.
    - Create space for experimentation and iteration. 
- Uphold USDC & TTS values of inclusion, integrity, and impact. Champion diversity, equity, inclusion, and accessibility.
    - Maintain a work environment of respect, diversity, equity, inclusion, accessibility, mutual support, flexibility, collaboration, continuous learning, and commitment to customer / partner needs. Incorporate diversity, equity, inclusion, and accessibility practices into project work.
    - Identify power dynamics within teams and with partners, respond thoughtfully, and open space equitably among team members.

## Basic information

**Location:**
{{ location }}

**Salary Range:**
The salary ranges for this position are:
- GS-13 Step 1 $94,373 to GS-13 Step 10 $150,703
- GS-14 Step 1 $111,521 to GS-14 Step 10 $176,300
- GS-15 Step 1 $131,178 to GS-15 Step 10 $176,300

Your salary, including base and locality, will be determined upon selection, dependent on your actual duty location.

You can find more information about this in the [compensation and benefits section on our site](https://join.tts.gsa.gov/compensation-and-benefits/).

For specific details on locality pay, please visit [OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/) or for a
salary calculator [OPM's 2022 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2022/general-schedule-gs-salary-calculator/).

Please note the maximum salary available for the GS pay system is **$183,500**

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

Provide as much detail as possible on your resume so that we can evaluate your previous experience. Follow our [guidance on creating a federal style resume.](https://join.tts.gsa.gov/resume/)

Qualification determinations can’t be made when resumes don’t include the required information. Failure to provide required information may result in disqualification.

For each job on your resume, provide:
- The exact dates you held each job (from month/year to month/year or “present”)
- Number of hours per week you worked (if part time)

All applications will be reviewed by a panel of subject matter experts against a scoring rubric created for this role. In order to properly be able to evaluate your previous experience, we recommend being as detailed as possible in your resume and following our general guidance on creating federal style resume.

To qualify, you must have one (1) year of specialized experience at the next lower GS-grade (or equivalent).  Specialized experience is defined as follows:

**GS15 qualifications:**
- Experience leading and collaborating on design, content strategy, or service design projects and initiatives
- Experience managing and working on cross-functional teams in an agile or iterative environment
- Experience with content strategy or design methodologies. For example: information architecture, UX writing, editorial design, usability research, user interviews, contextual inquiries, observational research, participatory workshops or product design
- Experience with the creation, design, or delivery of digital products, platforms, systems, or services
- Experience facilitating content strategy, design sessions, or workshops
- Experience leading a team of designers and training them on user centered design, content strategy, content design, or service design methodologies

**GS14 qualifications:**
- Experience leading and completing a design, content strategy, or service design initiative, engagement, project, or strategy
- Experience working on and leading a cross-functional team in an agile or iterative environment
- Experience with content strategy or design methodologies. For example:  information architecture, UX writing, editorial design, usability research, user interviews, contextual inquiries, observational research, participatory workshops or product design
- Experience participating in the design, development, and delivery of digital products, platforms, or services
- Experience participating in content strategy or design sessions or workshops

**GS13 qualifications:**
- Experience collaborating on design, content strategy, or service design projects and initiatives
- Experience using design methodologies such as information architecture, UX writing, editorial design, usability research, user interviews, contextual inquiries, observational research, participatory workshops or product design
- Experience in designing and/or developing digital products, platforms, or services
- Experience with iterative or agile methodologies
- Experience participating in content strategy or design sessions or workshops

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
