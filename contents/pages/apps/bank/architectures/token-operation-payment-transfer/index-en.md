---
title: Payment Transfer
layout: service-process
permalink: apps/bank/architectures/token-operation-payment-transfer
lang: en
page_id: apps-bank-architectures-token-operation-payment-transfer
detail-description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor ipsum vitae tincidunt ullamcorper. Nunc eu sapien vitae neque efficitur viverra. Quisque quam libero, fermentum a arcu ac, tempus auctor mauris. Sed dui ex, eleifend eu pharetra eget, lacinia in tellus. Nam ac nibh quis tortor eleifend porttitor gravida quis augue. Pellentesque auctor ullamcorper arcu, quis malesuada nisi feugiat nec. Donec vitae ullamcorper magna. Donec mi tellus, ultricies id justo eu, vulputate volutpat eros. Nam vitae ex in lectus congue mollis. Cras libero metus, pharetra eu sodales id, porta ac quam. Vestibulum sed sagittis metus, vulputate dignissim lacus. Integer rhoncus vitae dui non interdum. Fusce elementum dolor eget molestie feugiat. Sed et leo eu tellus rutrum venenatis in at ante. Curabitur sed orci eu sem hendrerit molestie vitae vel nisi. Duis pellentesque id dui ut posuere.
diagramUrl: apps/bank/architectures/token-operation-payment-transfer/diagrams
videoUrl: apps/bank/architectures/token-operation-payment-transfer/ux-videos
screensUrl: apps/bank/architectures/token-operation-payment-transfer/ui-screens
backUrl: /apps/bank/architectures/token-operation
---
{% assign sorted_diagrams = site.data.diagrams.bank.architectures.payment-transfer | sort: name %}
{% for item_hash in sorted_diagrams %} {% assign item = item_hash[1] %}
  {% include service-process-card.html item=item %}
{% endfor %}