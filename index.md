
<ul>
{% for page in site.pages %}
  {% if page.category == "post" | sort: "title" %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
 
 
 
