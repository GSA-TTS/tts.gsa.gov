---
title: TTS Services
layout: layouts/page
permalink: "services/"
sidenav: false
---
<h3 class="site-preview-heading">Services We Offer</h3>

<div class="grid-row padding-bottom-3">
<h3 class="margin-bottom-0">Products</h3>
<p><span class="text-bold">Shared infrastructure and tooling that helps agencies deliver faster.</span> We provide building blocks and tooling that are commonly needed in the development and delivery of government digital services.</p>
{%- assign sortedServices = collections.services.services | sortByProp: "name" -%}

{%- for service in sortedServices -%}

{%- if service.category == 'products' -%}
<div class="desktop:grid-col-2 display-flex flex-column flex-align-center padding-bottom-2">
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
<div class="grid-row padding-bottom-3">
<h3 class="margin-bottom-0">Platforms</h3>
<p><span class="text-bold">Interagency experiences that create cohesion and economies of scale.</span> When the public needs to interact with multiple agencies around the same or a similar need, we build and operate government-wide platforms to enable and centralize those interactions.</p>
{%- for service in sortedServices -%}
{%- if service.category == 'platforms' -%}
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
<div class="grid-row">
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
