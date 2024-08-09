---
layout: 'layouts/jointts/job-updated'
title: 'TTS Office of Solutions: FedRAMP Security Director'
permalink: '/join/positions/fedramp-security-director.html'
tags: 'job'
state: 'upcoming'

# need job post type
job_post_type: 'usajobs'

# INSTRUCTIONS UPCOMING: These fields are required for upcoming
role_name: 'TTS Office of Solutions: FedRAMP Security Director'

# need opens date
opens: 'June 14, 2022 at 9:00 am EDT'

# need closes date
closes: 'June 13, 2023 at 11:59 pm EDT'

# can this be calculated from closes date?  or the other way around?
weeks_open: 52

location: 'Anywhere in the U.S. (remote)'

salary:
  - level: '15'
    salary_min: 143,736
    salary_max: 191,900

org: 'TTS'

# need contact name
contact_name: 'TTS Talent Team'

# need contact email
contact_email: 'jointts@gsa.gov'

# INSTRUCTIONS OPEN: These fields are required for open

# need job announcement number
job_announcement_number: '22FASC350LUOTR'
pd_job_title: 'Supervisory IT Specialist (INFOSEC)'
num_vacancies: '1'

# need series
series: '2210'

# need apply_url
apply_url: 'https://docs.google.com/forms/d/e/1FAIpQLScwzijeP-591NKESpaBG_R4c5Iyw2zDf600yWVXx67xy5vaMw/viewform'

# need ohrm contact email
ohrm_contact_email: 'jointts@gsa.gov'

# need ohrm contact name
ohrm_contact_name: 'TTS Talent Team'

# need bargaining unit
bargaining_unit: 'Non Bargaining Unit'

promotion_potential: '15'
supervisory_status: 'yes'

# need trust level
clearance: 'Public trust. Background investigation required.'

schedule: 'Full time.'

appointment_type: 'This is a term limited appointment with the ability to extend for a total of eight years.'

travel: 'Occasional travel may be required up to 10%-20% per year.'

who_may_apply: 'All United States citizens and nationals (residents of American Samoa and Swains Islands).'

---

<!-- markdown-link-check-disable -->
{%- if state == 'upcoming' -%}
  {{ org }} will soon be accepting applications for 
  {% for item in salary %}
    GS-{{ item.level }}
    {% unless forloop.last %}, {% endunless %}
  {% endfor %} - {{ role_name }} roles.

  {%- if opens == 'tbd' -%} The target date for when these positions will be officially open to application has not yet been determined. If you'd like to be
  notified when these positions are open, sign up to our [mailing list]({{ site.baseurl }}/newsletter).
  {%- endif -%}

  {%- unless opens == 'tbd' -%}
  Applications will be open for submission on {{ opens | date: '%A, %B %e, %Y' }}. Check out [Join TTS Hiring Process]({{site.baseurl}}/hiring-process/) to
  learn more about the application process.
  {%- endunless -%}
{%- endif -%}
<!-- markdown-link-check-enable -->

## Opportunity overview

These opportunities are located in the General Services Administration (GSA),
Federal Acquisition Service (FAS), Technology Transformation Services (TTS).
TTS applies modern methodologies and technologies to improve the lives of
the public and public servants. We help agencies make their services more
accessible, efficient, and effective with modern applications, platforms,
processes, personnel, and software solutions.

## Role summary

The Security Director leads FedRAMP’s information security program,
establishing FedRAMP’s overall security priorities and vision. The role
oversees the development and implementation of FedRAMP information security
policies, creating a consistent, defensible and security-first approach
across FedRAMP’s authorization process and its ongoing oversight over
authorized cloud services. The Security Director, through their own work
and their management of a team of federal employees and contractors, is
responsible for maintaining and growing the trust placed in the FedRAMP
marketplace.

The position serves as one of the primary leaders working with the White
House, FedRAMP’s board, the Cybersecurity and Infrastructure Security
Agency (CISA), and the National Institute of Standards and Technology
(NIST) to position the program as a leader in cloud security.

FedRAMP was created in 2011 to accelerate the government’s use of commercial
cloud services, by creating a standardized process for security review and
authorization and making security information easily available to agencies.
More generally, FedRAMP operates as a bridge between the public and private
sectors, to help companies that offer innovative services to ensure these
services meet core federal security expectations and to bring the best of
the private sector into government.

Since its creation, the cloud sector has changed substantially and agency
needs have focused more on software-as-a-service products. In recent years,
Congress and the White House have updated the program’s mission and
authorities, with a mandate to scale and modernize the program, while
continuing to ensure the high bar of security that the public expects
around government data and operations.

To meet these goals, the Security Director will work across the government
to strengthen federal cybersecurity policies and team up with federal
partners on strategic initiatives that help agencies and cloud providers
to stay focused on defending against contemporary threats.

The position is a dynamic role that will drive FedRAMP’s overall approach
to security and risk management, and will represent FedRAMP in
government-wide security policy and priority deliberations. The role will
require senior expertise in information security and related technology
concepts, a strong ability to communicate and collaborate with different
agencies and stakeholder groups, and strategic leadership to position
the program as a cybersecurity leader and maintain trust in the FedRAMP
brand.

## Key objectives

### 1. You will set and implement FedRAMP’s security vision and priorities
- Set the policies and processes that define and enforce clear security
  expectations across FedRAMP authorizations, and a threat-based approach
  to continually updating them.

- Protect and build on the FedRAMP brand as a meaningful and rigorous
  security and risk management process, whose authorizations can
  consistently be presumed adequate for use by any federal agency.

- Manage a team that is responsible for applying these security policies,
  and help adjudicate novel or challenging situations as they arise within
  the authorization and continuous monitoring process.

### 2. You will keep FedRAMP operating as a security-first program, and incentivize effective security processes in cloud providers

- Design and operate the FedRAMP authorization and continuous monitoring
  processes to consistently incentivize positive security outcomes.

- Orient FedRAMP around agile delivery principles, by enabling cloud
  providers to operate using secure agile software development practices
  and rapid delivery of security updates and features.

- Identify and track security-oriented program metrics in order to
  effectively calibrate FedRAMP’s security priorities, and to ensure
  FedRAMP remains accountable to its trust and security mission.

- Grow FedRAMP’s ability to conduct, internally and through external
  partners, expert security reviews and “red team” style assessments of
  novel technical implementations and other security-critical components.

### 3. You will represent FedRAMP’s security vision, and build FedRAMP’s reputation and expertise

- Build FedRAMP’s overall technical capacity and information security
  expertise, through recruitment, training, and ongoing staff development.

- Publicly represent FedRAMP and its security strategy to the public and to
  other external audiences.

- Act as FedRAMP’s liaison on security strategy with key government partners,
  including the FedRAMP Board, the Executive Office of the President, the
  Cybersecurity and Infrastructure Security Agency, the National Institute
  of Standards and Technology, and others.

## Basic information

**Location:**
{{ location }}

**Salary Range:**
The salary range for this position is:
{% for item in salary %}
- GS-{{ item.level }} (${{ item.salary_min}} - ${{ item.salary_max }})
{% endfor %}

Your salary, including base and locality, will be determined upon selection,
dependent on your actual duty location.

You can find more information about this in the
[compensation and benefits section on our site](https://join.tts.gsa.gov/compensation-and-benefits/).

For specific details on locality pay, please visit
[OPM's Salaries & Wages page](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/)
or for a salary calculator
[OPM's 2022 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2022/general-schedule-gs-salary-calculator/).

Your salary, including base and locality, will be determined upon selection,
dependent on your actual duty location. Please note the maximum salary
available for the GS pay system is
{% for item in salary | last %}{{ item.salary_max }}{% endfor %}
. For specific details on locality pay, please visit
[OPM’s Salaries & Wages](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/)
page or for a salary calculator
[OPM’s 2024 General Schedule (GS) Salary Calculator](https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/2024/general-schedule-gs-salary-calculator/)
. You can find more information in our
[compensation and benefits section](https://join.tts.gsa.gov/compensation-and-benefits/)
.

**Who May Apply:**
{{ who_may_apply }}

**Travel requirement:**
{{ travel }}

**Security clearance:**
{{ clearance }}

**Work schedule:**
{{ schedule }}

**Appointment type:**
{{ appointment_type }}

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

Provide as much detail as possible on your resume so that we can evaluate
your previous experience. Follow our
[guidance on creating a federal style resume.](https://join.tts.gsa.gov/resume/)

Qualification determinations can’t be made when resumes don’t include the
required information. Failure to provide required information may result in
disqualification.

For each job on your resume, provide:
- The exact dates you held each job (from month/year to month/year or
  “present”)
- Number of hours per week you worked (if part time)

All applications will be reviewed by a panel of subject matter experts
against a scoring rubric created for this role. In order to properly be
able to evaluate your previous experience, we recommend being as detailed
as possible in your resume and following our general guidance on creating
federal style resume.

To qualify, you must have one (1) year of specialized experience at the next
lower GS-grade (or equivalent).  Specialized experience is defined as follows:

Provide as much detail as possible on your resume so that we can evaluate
your previous experience. Follow our guidance on creating a federal style
resume.

Failure to provide required information may result in disqualification.

For each job on your resume, provide:

- The exact dates you held each job (from month/year to month/year or
  “present”)
- Number of hours per week you worked (if part time)

### SPECIALIZED EXPERIENCE REQUIREMENTS

To qualify, you must have one (1) year of specialized experience at the next
lower GS-grade (or equivalent). Specialized experience is defined as follows:

- To be updated at a later date.

## How To Apply

Submit a complete online application prior to {{ closes | date: '%l:%M%P %Z ET on %A, %B %e, %Y' }}. Please fill out all applicable fields.

<!-- markdownlint-disable MD033 -->
<!-- markdown-link-check-disable -->
<section class="usa-grid-full">
  <a class="usa-button usa-button-secondary" href="{{ apply_url }}">Click here to apply</a>
</section>
<!-- markdown-link-check-enable -->
<!-- markdownlint-enable MD033 -->

<!-- spellchecker: disable -->
**Need Assistance in applying or have questions regarding this job opportunity, please email {{ contact_name }} at** [{{ contact_email }}](mailto:{{ contact_email }}).
<!-- spellchecker: enable -->
