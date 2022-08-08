---
title: Document
layout: layouts/page
permalink: /assetpaths/
sidenav: false
---

{% for asset in myAssetPaths %}
  <h1>{{asset}}</h1>
{% endfor %}


<h1>{{ myAssetPaths['app.js'] }}</h1>
