# dottle 

heaven and earth

<ul>
{% for my_post in site.categories["post"] %}
<li><a href="{{ my_post.url }}">{{ my_post.title }}</a></li>
{% endfor %}
</ul>
