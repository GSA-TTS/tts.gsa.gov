---
title: Platforms
layout: layouts/cozy-page
permalink: "services/platforms/"
sidenav: false
---

{%- assign sortedServices = collections.services.services | sortByProp: "name" -%}
<div class="grid-row padding-bottom-4">
  <p>
    <span class="text-bold">Interagency experiences that create cohesion and economies of scale.</span>
When the public needs to interact with multiple agencies around the same or a similar need, we build and operate government-wide platforms to enable and centralize those interactions.
  </p>
  <ul class="usa-card-group">
{%- for service in sortedServices -%}
{%- if service.category == 'platforms' -%}
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
