---
title: Proposal on new Token Smart-Contract
layout: service-process
permalink: apps/minting/architectures/token-production-proposal-on-new-token-smart-contract
lang: ru
page_id: apps-minting-architectures-token-production-proposal-on-new-token-smart-contract
detail-description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor ipsum vitae tincidunt ullamcorper. Nunc eu sapien vitae neque efficitur viverra. Quisque quam libero, fermentum a arcu ac, tempus auctor mauris. Sed dui ex, eleifend eu pharetra eget, lacinia in tellus. Nam ac nibh quis tortor eleifend porttitor gravida quis augue. Pellentesque auctor ullamcorper arcu, quis malesuada nisi feugiat nec. Donec vitae ullamcorper magna. Donec mi tellus, ultricies id justo eu, vulputate volutpat eros. Nam vitae ex in lectus congue mollis. Cras libero metus, pharetra eu sodales id, porta ac quam. Vestibulum sed sagittis metus, vulputate dignissim lacus. Integer rhoncus vitae dui non interdum. Fusce elementum dolor eget molestie feugiat. Sed et leo eu tellus rutrum venenatis in at ante. Curabitur sed orci eu sem hendrerit molestie vitae vel nisi. Duis pellentesque id dui ut posuere.
---
{% assign sorted_diagrams = site.data.diagrams.minting.architectures.token-production | sort: name %}
{% for item_hash in sorted_diagrams %} {% assign item = item_hash[1] %}
  {% unless item.name == "Proposal on new Token Smart-Contract" %}
  {% include service-process-card.html item=item %}
  {% endunless %}
{% endfor %}