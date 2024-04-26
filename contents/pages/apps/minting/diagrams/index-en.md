---
layout: diagrams
title: Self Token Minting
permalink: apps/minting/diagrams
lang: en
page_id: apps-minting-diagrams

description: Diagrams
---
<div class="diagrams__block animate__animated animate__fadeInLeft">
{% assign sorted_diagrams = site.data.diagrams.minting | sort: name %}
{% for item_hash in sorted_diagrams %} {% assign item = item_hash[1] %} {% include diagram-card.html item=item %} {% endfor %}
</div>