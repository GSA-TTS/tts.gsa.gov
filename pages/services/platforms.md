---
title: Platforms
layout: layouts/page
permalink: "services/platforms/"
sidenav: false
---

{%- assign sortedServices = collections.services.services | sortByProp: "name" -%}

<div class="grid-row padding-bottom-4">
<h3 class="margin-bottom-0">Platforms</h3>
<p>
<span class="text-bold">Interagency experiences that create cohesion and economies of scale.</span>
When the public needs to interact with multiple agencies around the same or a similar need, we build and operate government-wide platforms to enable and centralize those interactions.
</p>
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

{% include "services-picker.html" %}
