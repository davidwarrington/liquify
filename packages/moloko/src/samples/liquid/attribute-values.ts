export default (
/* html */`

<h1>Here you can play with attribute value beautification rules. The code snippets here were pulled from the Shopify Dawn theme. You can toggle the attributeValue style choices to see the incurred changes.</h1>

<p>Here is a great example for using the preserve style</p>

<img srcset="
{%- if object.image.width >= 375 -%}
{{ object.image | image_url: width: 375 }} 375w,
{%- endif -%}
  {%- if object.image.width >= 750 -%}
  {{ object.image | image_url: width: 750 }} 750w,
  {%- endif -%}
  {%- if object.image.width >= 1100 -%}{{ object.image | image_url: width: 1100 }} 1100w,{%- endif -%}
  {%- if object.image.width >= 1500 -%}{{ object.image | image_url: width: 1500 }} 1500w,{%- endif -%}
  {%- if object.image.width >= 1780 -%}{{ object.image | image_url: width: 1780 }} 1780w,{%- endif -%}
  {%- if object.image.width >= 2000 -%}{{ object.image | image_url: width: 2000 }} 2000w,{%- endif -%}
  {%- if object.image.width >= 3000 -%}{{ object.image | image_url: width: 3000 }} 3000w,{%- endif -%}
  {%- if object.image.width >= 3840 -%}{{ object.image | image_url: width: 3840 }} 3840w,{%- endif -%}
  {{ object.image | image_url }} {{ object.image.width }}w"
  sizes="100vw"
  src="{{ object.image | image_url: width: 1500 }}"
  loading="lazy" alt="{{ object.image.alt | escape }}" width="{{ object.image.width }}"
  height=" {{ object.image.width | divided_by: object.image.aspect_ratio }}"
/>

<p>Here you can see how collapse works</p>

{%- if shop.customer_accounts_enabled -%}
<a
  href="{%- if customer -%}{{ routes.account_url }}{%- else -%}{{ routes.account_login_url }}{%- endif -%}"
  class="header__icon header__icon--account link focus-inset {{ object.in.middle }} some-clas {{ o }}
  {% if section.settings.menu != blank %} small-hide{% endif %}"
  id="xxx {{ x }}
  foo header__icon header__icon--account link focus-inset header__icon header__icon--account link focus-inset"
  >
  {% render 'icon-account' %}
  <span class="visually-hidden">
    {%- liquid
      if customer
      echo 'customer.account_fallback' | t
      else
      echo 'customer.log_in' | t
      endif -%}
  </span>
</a>
{%- endif -%}

<ul>
  <li>
    {{ some.object
| filter
| filter
|filter
| filter }}
  </li>
</ul>
`);
