
<ul>
{% assign sorted_pages = site.pages | where: "category", "post" | sort: "title" | reverse %}
{% for page in sorted_pages %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
 
 
 
