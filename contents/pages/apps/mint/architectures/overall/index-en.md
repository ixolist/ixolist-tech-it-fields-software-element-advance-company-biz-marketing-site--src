---
title: Overall
layout: service-process
permalink: apps/mint/architectures/overall
lang: en
page_id: apps-mint-architectures-overall
detail-description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor ipsum vitae tincidunt ullamcorper. Nunc eu sapien vitae neque efficitur viverra. Quisque quam libero, fermentum a arcu ac, tempus auctor mauris. Sed dui ex, eleifend eu pharetra eget, lacinia in tellus. Nam ac nibh quis tortor eleifend porttitor gravida quis augue. Pellentesque auctor ullamcorper arcu, quis malesuada nisi feugiat nec. Donec vitae ullamcorper magna. Donec mi tellus, ultricies id justo eu, vulputate volutpat eros. Nam vitae ex in lectus congue mollis. Cras libero metus, pharetra eu sodales id, porta ac quam. Vestibulum sed sagittis metus, vulputate dignissim lacus. Integer rhoncus vitae dui non interdum. Fusce elementum dolor eget molestie feugiat. Sed et leo eu tellus rutrum venenatis in at ante. Curabitur sed orci eu sem hendrerit molestie vitae vel nisi. Duis pellentesque id dui ut posuere.
diagramUrl: apps/mint/architectures/overall/diagrams
videoUrl: apps/mint/architectures/overall/ux-videos
screensUrl: apps/mint/architectures/overall/ui-screens
---
{% assign sorted_diagrams = site.data.diagrams.mint.architectures.overall | sort: name %}
{% for item_hash in sorted_diagrams %} {% assign item = item_hash[1] %}
  {% include service-process-card.html item=item %}
{% endfor %}