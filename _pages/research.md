---
layout: page
title: research
permalink: /research/
description: overview of my research and selected projects
nav: true
nav_order: 1
display_categories: [research]
horizontal: false
---

<!-- <iframe width="100%" height="800" src="/assets/pdf/research_overview.pdf"> -->

<!-- <img width="100%" height="500" src="/assets/img/.jpg"> -->

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research_overview.jpg" title="My research overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An overview of my research for developing safe and explainable robots that interact with humans.
</div>

<!-- pages/projects.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.liquid %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.liquid %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>
