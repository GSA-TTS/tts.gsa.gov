---
title: Products
layout: layouts/cozy-page
permalink: "services/products/"
sidenav: false
---

{%- assign sortedServices = collections.services.services | sortByProp: "name" -%}
<div class="grid-row padding-bottom-4">
  <h2 class="margin-bottom-0">Products</h2>
  <p>
    <span class="text-bold">Shared infrastructure and tooling that helps agencies deliver faster.</span>
We provide building blocks and tooling that are commonly needed in the development and delivery of government digital services.
  </p>
  <ul class="usa-card-group">
{%- for service in sortedServices -%}
{%- if service.category == 'products' -%}
    <li class="service usa-card tablet:grid-col-4">
      <div class="usa-card__container overflow-y-hidden text-center maxh-card-lg">
        <div class="usa-card__header">
          <h2 class="usa-card__heading"><a href="{{ service.link}}">{{ service.name }}</a></h2>
        </div>
        <div class="usa-card__media usa-card__media--inset">
          <div class="usa-card__img">
            {% image_with_class service.logo "maxh-5" service.logo_alt_text %}
          </div>
        </div>
        <div class="usa-card__body">
          <p>{{ service.description }}</p>
        </div>
      </div>
    </li>
{%- endif -%}
{%- endfor -%}
  </ul>
</div>


{% include "services-picker.html" %}
