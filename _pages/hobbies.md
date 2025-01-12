---
layout: page
title: music + tennis
permalink: /hobbies/
description: my hobbies
nav: true
nav_order: 3
display_categories: [discography, tennis]
horizontal: false
---

### Music

I produce electronic music under the alias [Andy-Ruddh](https://soundcloud.com/andyruddh) and my sounds consist of raw and hypnotic techno. My music has been supported by pioneers of this genre such as **Richie Hawtin, P.E.A.R.L., Oliver Rosemann**, and many more. My music has placed within the Top 50 on the Beatport Global Techno charts in 2023 and 2024.

I also co-moderate a music-curation community of truly authentic Techno music at [r/ProperTechno](https://reddit.com/r/ProperTechno/).

### Tennis

I was previously a junior tennis player in the Indian and Asian circuits. I continue playing recreationally.

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
