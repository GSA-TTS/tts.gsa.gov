---
title: Products
layout: layouts/cozy-page
permalink: "services/products/"
sidenav: false
---

{%- assign sortedServices = collections.services.services | sortByProp: "name" -%}
<div class="grid-row padding-bottom-4">
  <p>
    <span class="text-bold">Shared infrastructure and tooling that helps agencies deliver faster.</span>
We provide building blocks and tooling that are commonly needed in the development and delivery of government digital services.
  </p>
  <ul class="usa-card-group">
{%- for service in sortedServices -%}
{%- if service.category == 'products' -%}
    <li class="service usa-card tablet:grid-col-4">
      <div class="usa-card__container text-center display-flex">
        <div class="usa-card__header">
          <!-- markdown-link-check-disable -->
          <h2 class="usa-card__heading"><a href="{{ service.link}}">{{ service.name }}</a></h2>
          <!-- markdown-link-check-enable -->
        </div>
        <div class="usa-card__media usa-card__media--inset flex-align-self-center">
          <div class="usa-card__img tts-service-logo">
            {% image_with_class service.logo "" service.logo_alt_text %}
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

{% render "services-picker.html", page_data: page %}
