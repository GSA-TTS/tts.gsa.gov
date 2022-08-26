---
title: People
layout: layouts/page
permalink: "services/people/"
sidenav: false
---

{%- assign sortedServices = collections.services.services | sortByProp: "name" -%}

<div class="grid-row padding-bottom-4">
<h3 class="margin-bottom-0">People</h3>
<p><span class="text-bold">Discovery, implementation, and consulting to catalyze agency progress.</span> When agencies need expertise to help to define, plan, and execute a vision for digital services that deliver good, human-centered customer experiences, we partner with the agency while also building capacity.</p>
{%- for service in sortedServices -%}
{%- if service.category == 'people' -%}
<div class="desktop:grid-col-2 display-flex flex-column flex-align-center">
  <div class="service-logo">
  {% image_with_class service.logo "height-3 width-3" service.logo_alt_text %}
  </div>
  <div class="service-name">
    <a href="{{service.link}}">{{ service.name }}</a>
  </div>
</div>
{%- endif -%}
{%- endfor -%}
</div>

{% include "services-picker.html" %}
