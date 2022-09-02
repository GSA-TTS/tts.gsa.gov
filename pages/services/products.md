---
title: Products
layout: layouts/page
permalink: "services/products/"
sidenav: false
---

{%- assign sortedServices = collections.services.services | sortByProp: "name" -%}
<div class="grid-row padding-bottom-4">
<h3 class="margin-bottom-0">Products</h3>
<p>
<span class="text-bold">Shared infrastructure and tooling that helps agencies deliver faster.</span>
We provide building blocks and tooling that are commonly needed in the development and delivery of government digital services.
</p>
{%- for service in sortedServices -%}
{%- if service.category == 'products' -%}
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

{% render "services-picker.html" %}
