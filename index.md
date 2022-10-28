
<ul>
{% assign pages = site.pages | sort: "title" | reverse %}
{% for page in pages %}
  {% if page.category == "post" %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
 
 
 
