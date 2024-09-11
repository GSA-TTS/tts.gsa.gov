---
layout: layouts/jointts/job-updated
permalink: /join/{{ title | slugify }}.html
tags: jobs

################################################################################
#                                                                              #
# INSTRUCTIONS: TTS JOB TEMPLATE                                               #
#                                                                              #
# -----------------------------------------------------------------------------#
# If you are editing this file on GitHub, first make sure you are creating a   #
# new file, and are not editing the template file! To create a new file, go to #
# https://github.com/18F/join.tts.gsa.gov/new/main/positions in your browser.  #
#                                                                              #
# On the new file page, you can paste in the contents of the template file.    #
# Also be sure to type in a filename in the small textbox above the file body  #
# box. You will see the text join.tts.gsa.gov / [ Name your file ...] in main. #
# Type your filename into that box.                                            #
#                                                                              #
# NOTE ABOUT FILENAMES: Your filename should be descriptive about the job      #
# posting that you're creating, and it MUST end with ".md". Don't stress out   #
# about filenames too much, though. They are used for the URL, which can help  #
# people make sure they're on the right page, but most users will probably not #
# notice the URL. Instead, try to make it meaningful to you and others on the  #
# Talent Team so you can find it easily in the future if you need to edit it.  #
#                                                                              #
# For example, if you are posting a job for a content designer, you might      #
# choose names like:                                                           #
#                                                                              #
#    tts-content-designer-2023.md                                              #
#    login-content-designer-2023.md                                            #
#    content-designer-2023.md                                                  #
#    content-designer-june-2023.md                                             #
#                                                                              #
# For the rest of the file, follow the directions as you go, but here are a    #
# couple more tips to help you as you work:                                    #
#                                                                              #
# You are currently inside the portion of the document called "frontmatter."   #
# The frontmatter is the part that starts with just "---" on the first line    #
# and ends with another line that only contains "---" (further down). This     #
# part of the document is not DIRECTLY shown to the user. Instead, this is     #
# where you can set data that will be shown to the user in other parts of the  #
# page, or data that is used to configure how the page is displayed. For       #
# example, the opens and closes dates are set in the frontmatter, but they     #
# will never be shown to the user the way you type them in. Instead, they are  #
# used to determine whether the posting is upcoming, open, or closed, and they #
# will be turned into more human-friendly text when they are displayed.        #
#                                                                              #
# Within this frontmatter block, lines that begin with a hash (#) symbol are   #
# comments. They do not contribute to the web page at all, but they are a nice #
# way of explaining what the data in the frontmatter is. It is okay to delete  #
# these comments when you are done, and it is also okay to leave them if they  #
# might be helpful when editing the page later.                                #
#                                                                              #
# The parts you need to fill out are marked with five red triangles above them #
# like this:                                                                   #
#🔻🔻🔻🔻🔻                                                                   #
#                                                                              #
# After the frontmatter, the rest of the document is in a special version of   #
# Markdown used by the website builder. You will see comments in that section  #
# as well, but they will look like this:                                       #
#                                                                              #
#    {% comment ----------------------------------------------------------- %} #
#    The contents in between these two lines are comments and do not           #
#    contribute to the web page.                                               #
#    {% endcomment -------------------------------------------------------- %} #
#                                                                              #
# It is safe to remove the Markdown comments as well.                          #
#                                                                              #
################################################################################

# This is the position title and the org that is doing the hiring. Please format
# your title as "Org: Position Title" (in quotes!). The organization should be
# a full name rather than an acronym. For example:
#   - U.S. Digital Corps, not USDC
#   - Presidential Innovation Fellows, not PIF
# The exception to this is a TTS role, for which you can just say TTS.
# Role should be just the position title without the org.
#
# NOTE: Be sure to leave the "title: " part at the beginning! These line
# headings are how the site builder knows what the data is. For the rest of the
# frontmatter, please be careful not to delete the headings!
#🔻🔻🔻🔻🔻
title: "TTS Fellowships Office: Presidential Innovation Fellows"
role: "Presidential Innovation Fellows"

# If the role is listed on a different site and we just want to link to it,
# put that link here
# 🔻🔻🔻🔻🔻
external_url: https://presidentialinnovationfellows.gov/apply/

# Put the opening and closing dates of your posting here, if you have them. The
# values you set here will be turned into user-friendly text in other parts of
# this post. Setting it here means you won't have to copy it over and over.
#
# These dates MUST be formatted as YYYY-MM-DD, where month and day are 2-digits.
# If the month number or day of the month are less than 10, add a 0 to the
# front (eg, May would be 05 instead of just 5). This is the only format the
# site builder automatically understands. Anything else will not be understood
# as a date.
#🔻🔻🔻🔻🔻
opens: 2024-09-10
closes: 2024-09-30
# These dates are also used to determine whether a position is upcoming, open,
# or closed. Here's how we decide:
#
# The job is upcoming if:
#   opens is empty OR
#   opens is in the future
#
# The job is open if:
#   opens is in the past OR
#   closes is in the future
#
# The job is closed if:
#   closes is in the past
#
# If either opens or closes is empty, missing, or not a date, the position is
# considered to be upcoming.

# If the position can also close when the maximum number of applications are
# received, include the maximum number of applications here. Remove this line
# or set the value to 0 if the job does not have an application cap.
#🔻🔻🔻🔻🔻
max applications: 0

# Is this a permanent or term appointment? Use either "perm" or "term". This
# will be used to fill in the appointment type on the page with consistent
# language.
#🔻🔻🔻🔻🔻
appointment type: term

# Put the GS grade this position is being advertised at. For SES positions, set
# the level to 20.
#🔻🔻🔻🔻🔻
gs: 15
# The information you put here will be used to automatically pull salary range
# information.
#
# ⚠️⚠️⚠️ IMPORTANT NOTE: The automatic salary ranges are based on 100% remote
# positions and use the lowest and highest locality areas. If this position is
# not 100% remote, you will need to delete the automatic salary range and input
# it yourself down below. Look for 💰💰💰 to indicate where to do that.
#
# The salary range data is stored in this file:
#
#   _data/pay_ranges.yml
#
# The data file will need to be updated each year to reflect any pay changes.

# List key objectives here. Key objectives and sub-bullets will be displayed in
# the order they are listed here. You do not need to include key objective
# numbers. They will be added automatically.
#
# Each key objective starts on a new line and must start with a dash. It does
# not need to include a number at the beginning. A key objective can be spread
# across multiple lines if you want.
#
# To add sub-bullets to your key objective, add a new line below the key
# objective and indent it with spaces. (The number of spaces does not matter, as
# long as it is more than one). Then, add a dash and your sub-bullet.
# Sub-bullets can also take up multiple lines as long as all of the lines are
# indented the same amount so they line up.
#
# The placeholder information below shows an example of how to format the key
# objectives. This example indents sub-bullets with two spaces:
#🔻🔻🔻🔻🔻
key objectives:

# If there are any info sessions associated with this position, list them here.
# Each info session needs three pieces of information: the link, the date, and
# the time. See the placeholder below for an example of how to add an info
# session. If the position does not have any info sessions, you can just delete
# the lines that begin with spaces.
#
# IMPORTANT: The date MUST be formatted as YYYY-MM-DD, where the month and day
# are TWO digits. If the month or day is less than 10, add a zero to the front.
# The date is used to sort the info sessions on the page so they are shown
# nearest to furthest. Only info sessions schedule for the future will be shown.
#🔻🔻🔻🔻🔻
info_sessions:
  - link: https://gsa.zoomgov.com/webinar/register/WN_rh8OrGbTQGmEpmP4oz5ztg#/registration
    date: 2024-09-12
    headline: Thursday, September 12th, 2024
    time: 4:00-5:00pm ET (1:00pm-2:00pm PT)
  - link: https://gsa.zoomgov.com/webinar/register/WN_DQKvAibMQAeSDbsvD-s-RQ#/registration
    date: 2024-09-17
    headline: Tuesday, September 17th, 2024
    time: 1:00-2:00pm ET (10:00am-11:00am PT)
  - link: https://gsa.zoomgov.com/webinar/register/WN_f0vt2OvKRQ6ExmnDZ5YeJQ#/registration
    date: 2024-09-23
    headline: Monday, September 23rd, 2024
    time: 4:00-5:00pm ET (1:00pm-2:00pm PT)
  - link: https://gsa.zoomgov.com/webinar/register/WN_pEhDPgcHRGKxOOlQr4S-Cw#/registration
    date: 2024-09-25
    headline: Wednesday, September 25th, 2024
    time: 1:00-2:00pm ET (10:00am-11:00am PT)

# Put the link applicants need to use to apply for this position here. This link
# will be used for the "Click here to apply" button at the bottom of the
# position page.
#🔻🔻🔻🔻🔻
application link: https://www.usajobs.gov/job/808657100
# This is the end of the frontmatter. After this line is Markdown.
---

{% comment ------------------------------------------------------------------ %}
If you want to include a closed/upcoming/open alert at the top of your page,
leave the following line. The status of the position will be determined by the
opens/closes dates at the top of this document

If you do not want the closed/upcoming/open alert, delete the line below that
says {% include job/status_alert.html %}
🔻🔻🔻🔻🔻
{% endcomment --------------------------------------------------------------- %}

{% comment %}{% include job/status_alert.html %}{% endcomment %}

## About the Fellowship

Presidential Innovation Fellows are mid-to-senior career technologists, designers, and strategists.

Each fellow is paired with a federal agency to complete a one year project as a senior advisor. Fellows may be eligible to be renewed for up to one additional year. Learn more about [projects that have been completed by past fellows](https://presidentialinnovationfellows.gov/projects/) and the [values that guide our work](https://handbook.tts.gsa.gov/about-us/tts-history/).

As a fellow, you’ll gain senior-level exposure in a federal agency. Behind the walls of government, you’ll tackle some of our nation’s biggest challenges.

Making government work better for the people we serve is our top priority. And you have the experience we need to drive that mission home. Together, we can have an incredible impact on how the government delivers to the public at every interaction, each and every time.

After you complete your fellowship, you’ll join our alumni community of more than 250 technologists and innovators in advancing mission-driven solutions at local, national, and international levels.

{% comment %}{% include job/full_info_on_usajobs.html %}{% endcomment %}

{% comment ------------------------------------------------------------------ %}
The job title on USAJOBS is not always the same as the job title as we list it.
To help applicants find the right jobs on USAJOBS, put the title as it appears
on USAJOBS here.
🔻🔻🔻🔻🔻
{% endcomment --------------------------------------------------------------- %}
**Official title in USAJOBS:** IT Specialist - Presidential Innovation Fellow

{% comment %}🔻🔻🔻🔻🔻{% endcomment %}
**Location:** Washington, D.C.

{% comment %}🔻🔻🔻🔻🔻{% endcomment %}
**Work schedule:**
Full time.

## Requirements

To be eligible for the Presidential Innovation Fellows program, you must be a United States citizen or a resident of American Samoa or Swains Island.

Additionally, all fellows must be based in the Washington, D.C. area for the duration of the fellowship.

There are no education requirements. 

All fellows will be required to complete a [Public Trust background investigation](https://help.usajobs.gov/faq/job-announcement/security-clearances), and may be required to complete additional higher-level background investigations depending on the agency and project where they are matched.

## Expertise

<!-- markdownlint-disable MD033 -->
<strong>Basic Requirements:</strong> You must also have IT-related experience demonstrating EACH of the four competencies listed below:

IT Competencies:
<ul>
  <li>
    Attention to Detail - Is thorough when performing work and conscientious about attending to detail.
  </li>
  <li>
    Customer Service - Works with clients and customers (that is, any individuals who use or receive the services or products that your work unit produces, including the general public, individuals who work in the agency, other agencies, or organizations outside the Government) to assess their needs, provide information or assistance, resolve their problems, or satisfy their expectations; knows about available products and services; is committed to providing quality products and services.
  </li>
  <li>
    Oral Communication - Expresses information (for example, ideas or facts) to individuals or groups effectively, taking into account the audience and nature of the information (for example, technical, sensitive, controversial); makes clear and convincing oral presentations; listens to others, attends to nonverbal cues, and responds appropriately.
  </li>
  <li>
    Problem Solving - Identifies problems; determines accuracy and relevance of information; uses sound judgment to generate and evaluate alternatives, and to make recommendations.
  </li>
</ul>

<strong>Specialized Experience:</strong> In addition to the basic requirements listed above, you must have one year of specialized experience equivalent to the GS-14 in the Federal Service. Specialized experience for this role is defined as experience: 
<ul>
  <li>
    Leading or advising executive leadership on the launch of new technology initiatives, providing recommendations that influence policies, projects, or programs, and/or securing leadership buy-in or stakeholder consensus; <strong>AND</strong>
  </li>
  <li>
    Deploying user-centered and iterative development methodologies; <strong>AND</strong>
  </li>
  <li>
    Applying advanced technical knowledge to products or service delivery in one or more of the following: artificial intelligence, machine learning, data strategy, design (service, human-centered, user experience), product, software engineering, cloud infrastructure, digital transformation or digital strategy <strong>AND</strong>
  </li>
  <li>
  Experience in at least one of the following areas:
    <ol>
      <li>
        Leading data science, engineering, product, or design initiatives focused on technical products, platforms, or solutions; OR 
      </li>
      <li>
        Leading cross functional teams, which may include designers, product managers, data scientists, or software engineers, to meet program or project goals, objectives, and priorities OR
      </li>
      <li>
        Leading the development or implementation of digital strategy and policy
      </li>
    </ol>
  </li>
</ul>

Please refer to the [USAJOBS job announcement](https://www.usajobs.gov/job/808657100#requirements) for more detailed information regarding Qualifications. 

In addition to the criteria indicated in the Qualifications section, you will be scored on multiple hurdles which will measure your possession of the competencies or knowledge, skills and abilities required for the position. The assessment hurdles for this position will include resume review, written assessment and structured interview. You can find more information about these hurdles in the [Selection Timeline](https://presidentialinnovationfellows.gov/apply/#timeline).

<!-- markdownlint-enable MD033 -->
{% comment ------------------------------------------------------------------ %}
💰💰💰
The salary range for the job can be populated automatically based on the GS grade this posting is advertised at, based on the lowest and highest locality rates.

💰💰💰
If this position is not remote and has geographic restrictions, you can instead specify the salary min and max. For example, if the position is advertised at GS-15 and the position location is only Washington, DC, then (using 2023 pay
rates):

Minimum:  GS-15 Step 1: $172,075
Maximum:  GS-15 Step 10: $183,500

So you would update the line below to look like this:

    {% include job/salary_range.html min="$172,075" max="$183,500" %}

To use the automatic salary ranges, leave the lines as-is.

🔻🔻🔻🔻🔻
{% endcomment --------------------------------------------------------------- %}

{% comment %}{% include job/salary_range.html min="" max="" %}{% endcomment %}

## Benefits

All Presidential Innovation Fellows are hired at the GS-15 Step 1 pay grade. Learn more about the [GS system that defines federal salaries](https://join.tts.gsa.gov/compensation-and-benefits/).

As of January 2024, the GS-15 Step 1 salary for the Washington, D.C. locality is $163,964. 

All fellows receive [federal employee benefits](https://handbook.tts.gsa.gov/getting-started/classes/benefits/). This includes medical, vision, and dental insurance, FSA accounts, life insurance, paid leave, and the Thrift Savings Plan (the government version of a 401K) with up to five percent matching. 

PIFs also receive a $5,000 individual professional development budget administered by TTS.

For more on leave policy, (including paid parental leave, applicable after 12 months) visit [the TTS Handbook](https://handbook.tts.gsa.gov/travel-and-leave/leave/#types-of-leave).


{% comment ------------------------------------------------------------------ %}
The next {% include ... %} line will pull in the appropriate text based on the
appointment type for this job. If you need to use different text, delete that
line and write your custom text in its place.
🔻🔻🔻🔻🔻
{% endcomment --------------------------------------------------------------- %}


{% comment %}{% include job/appointment_type.html %}{% endcomment %}

## How to Apply

{% comment %}{% include job/apply_button.html %}{% endcomment %}

As part of your application, you’ll need to submit a federal-style resume. If you don’t already have one, it can take some time to put together. You'll want to make sure that your resume clearly reflects your experience related to the qualifications listed in the job announcement. We strongly suggest reviewing these [tips on writing a federal resume](https://join.tts.gsa.gov/resume/) and an [example of what a federal resume might look like](https://handbook.tts.gsa.gov/hiring-staying-or-changing-jobs/resume/).

In addition to the resume resources, we strongly encourage people to register for an upcoming virtual info session. 

Once your resume is ready for submission, apply to the job announcement on [USAJOBS](https://www.usajobs.gov/job/808657100). All applications must be received by 11:59 pm ET on September 30, 2024.
