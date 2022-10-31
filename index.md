# Library

我喜欢*档案室*或者*图书馆*这样的地方，即使我不喜欢看书。因为希望在我偶然回忆往事的时候，能找到它们的存在。

*图书馆*也收集了其他人的闲话，用字母标注了作者。

<ul>
{% assign sorted_pages = site.pages | sort: "title" | reverse %}
{% for page in sorted_pages %}
  {% if page.category == "post" %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
 
 
 
