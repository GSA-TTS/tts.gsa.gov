---
title: Document
layout: layouts/page
permalink: /assetpaths/
sidenav: false
---

{% for asset in assetPaths %}
  <h2>{{ asset }}</h2>
{% endfor %}
