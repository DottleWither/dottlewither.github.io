
<ul>
{% assign filtered_pages = site.pages | where: "category", "post" %}
{% assign sorted_pages = filtered_pages  | sort: "title" %}
{% assign revered_pages = sorted_pages  | reverse %}
{% for page in reversed_pages %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
{% endfor %}
</ul>
 
 
 
