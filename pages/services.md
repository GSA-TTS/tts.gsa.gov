---
title: TTS Services
layout: layouts/page
permalink: "services/"
sidenav: false
---
<h3 class="site-preview-heading">{{title}}</h3>
<ul class="usa-card-group">
  {%- assign sortedServices = collections.services.services | sortByProp: "name" -%}
  {%- for service in sortedServices -%}
  <li class="usa-card usa-card--flag desktop:grid-col-6">
    <div class="usa-card__container">
      <div class="usa-card__header">
        <h2 class="usa-card__heading">{{service.name}}</h2>
      </div>
      <div class="usa-card__media usa-card__media--inset flex-justify-center">
        <div class="usa-card__img">
          {% image_with_class service.logo "height-auto maxw-full" service.logo_alt_text true%}
        </div>
      </div>
      <div class="usa-card__body">
        <p>{{service.description}}</p>
      </div>
      <div class="usa-card__footer">
        <a href="{{service.link}}" class="usa-button">Visit</a>
      </div>
    </div>
  </li>
  {%- endfor -%}
</ul>
