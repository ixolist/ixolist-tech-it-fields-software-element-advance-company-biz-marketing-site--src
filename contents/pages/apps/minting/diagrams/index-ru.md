---
layout: diagrams
title: Self Token Minting
permalink: apps/minting/diagrams
lang: ru
page_id: apps-minting-diagrams

description: Диаграммы
---
<div class="diagrams__block animate__animated animate__fadeInLeft">
{% for item_hash in site.data.diagrams.minting %} {% assign item = item_hash[1] %} {% include diagram-card.html item=item %} {% endfor %}
</div>