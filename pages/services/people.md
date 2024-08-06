---
title: People
layout: layouts/cozy-page
permalink: "services/people/"
sidenav: false
---

{%- assign sortedServices = collections.services.services | sortByProp: "name" -%}
<div class="grid-row padding-bottom-4">
  <p>
    <span class="text-bold">Discovery, implementation, and consulting to catalyze agency progress. </span>
When agencies need expertise to help to define, plan, and execute a vision for digital services that deliver good, human-centered customer experiences, we partner with the agency while also building capacity.
  </p>
  <ul class="usa-card-group">
{%- for service in sortedServices -%}
{%- if service.category == 'people' -%}
    <li class="service usa-card tablet:grid-col-4">
      <div class="usa-card__container  text-center display-flex">
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
