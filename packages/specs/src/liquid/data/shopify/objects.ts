import { Objects } from '../..';

export const objects: Objects = {
  media: {
    summary: 'An abstract media object that can represent the following object types:\n\n- [`image`](/docs/api/liquid/objects/image)\n- [`model`](/docs/api/liquid/objects/model)\n- [`video`](/docs/api/liquid/objects/video)\n- [`external_video`](/docs/api/liquid/objects/external_video)',
    description: 'An abstract media object that can represent the following object types:\n\n- [`image`](/docs/api/liquid/objects/image)\n- [`model`](/docs/api/liquid/objects/model)\n- [`video`](/docs/api/liquid/objects/video)\n- [`external_video`](/docs/api/liquid/objects/external_video) The `media` object can be returned by the [`product.media` array](https://shopify.dev/docs/api/liquid/objects/product#product-media) or a\n[`file_reference` metafield](/apps/metafields/types).\n\nYou can use [media filters](https://shopify.dev/docs/api/liquid/filters/media-filters) to generate URLs and media displays. To learn about how\nto use media in your theme, refer to [Support product media](/themes/product-merchandising/media/support-media).\n\n\n\n**Note**\n\n> Each media type has unique properties in addition to the general `media` properties. To learn about these\n> additional properties, refer to the reference for each type.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/media)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'The ID of the media.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/media#id)\n\n'
      },
      position: {
        type: 'number',
        description: 'The position of the media in the [`product.media` array](/docs/api/liquid/objects/product#product-media). If the source is a [`file_reference` metafield](/apps/metafields/types), then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/media#position)\n\n'
      },
      media_type: {
        type: 'string',
        description: "The media type.\n\n#### Example\n\nYou can use the `media_type` property with the [`where` filter](/docs/api/liquid/filters/where) to filter the [`product.media` array](/docs/api/liquid/objects/product#product-media) for all media of a desired type.\n\n\n```liquid\n\n{% assign images = product.media | where: 'media_type', 'image' %}\n\n{% for image in images %}\n  {{- image | image_url: width: 300 | image_tag }}\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/media#media_type)\n\n",
        literal: [
          'image',
          'model',
          'video',
          'external_video'
        ]
      },
      preview_image: {
        type: 'object',
        description: "A preview image of the media. \n\n**Note**\n\n> Preview images don't have an ID attribute.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/media#preview_image)\n\n",
        scope: 'image'
      },
      alt: {
        type: 'string',
        description: 'The alt text of the media.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/media#alt)\n\n'
      }
    }
  },
  address: {
    summary: 'An address, such as a customer address or order shipping address.',
    description: 'An address, such as a customer address or order shipping address. \n\n**Tip**\n\n> Use the [`format_address` filter](https://shopify.dev/docs/api/liquid/filters/format_address) to output an address according to its locale.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address)\n\n',
    type: 'object',
    properties: {
      company: {
        type: 'string',
        description: 'The company of the address. If no company is specified, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#company)\n\n'
      },
      phone: {
        type: 'string',
        description: 'The phone number of the address. If no phone number is specified, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#phone)\n\n'
      },
      first_name: {
        type: 'string',
        description: 'The first name of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#first_name)\n\n'
      },
      last_name: {
        type: 'string',
        description: 'The last name of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#last_name)\n\n'
      },
      name: {
        type: 'string',
        description: 'A combination of the first and last names of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#name)\n\n'
      },
      url: {
        type: 'string',
        description: 'The relative URL for the address. \n\n**Note**\n\n> This only applies to customer addresses.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#url)\n\n'
      },
      summary: {
        type: 'string',
        description: 'A summary of the address, including the following properties:\n\n- First and last name\n- First and second lines\n- City\n- Province\n- Country\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#summary)\n\n'
      },
      id: {
        type: 'number',
        description: 'The ID of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#id)\n\n'
      },
      address1: {
        type: 'string',
        description: 'The first line of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#address1)\n\n'
      },
      address2: {
        type: 'string',
        description: 'The second line of the address. If no second line is specified, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#address2)\n\n'
      },
      city: {
        type: 'string',
        description: 'The city of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#city)\n\n'
      },
      zip: {
        type: 'string',
        description: 'The zip or postal code of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#zip)\n\n'
      },
      country_code: {
        type: 'string',
        description: 'The country of the address in [ISO 3166-1 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#country_code)\n\n'
      },
      province_code: {
        type: 'string',
        description: "The province of the address in [ISO 3166-2 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html). \n\n**Note**\n\n> The value doesn't include the preceding [ISO 3166-1](https://www.iso.org/glossary-for-iso-3166.html) country code.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#province_code)\n\n"
      },
      country: {
        type: 'object',
        description: 'The country of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#country)\n\n',
        scope: 'country'
      },
      street: {
        type: 'string',
        description: 'A combination of the first and second lines of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#street)\n\n'
      },
      province: {
        type: 'string',
        description: 'The province of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/address#province)\n\n'
      }
    }
  },
  collections: {
    summary: 'All of the [collections](/docs/api/liquid/objects/collection) on a store.',
    global: true,
    description: 'All of the [collections](/docs/api/liquid/objects/collection) on a store.\n\n#### Example\n\nYou can iterate over `collections` to build a collection list.\n\n\n```liquid\n\n{% for collection in collections %}\n  {{- collection.title | link_to: collection.url }}\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collections)\n\n',
    type: 'array',
    scope: 'collection'
  },
  pages: {
    summary: 'All of the [pages](/docs/api/liquid/objects/page) on a store.',
    global: true,
    description: "All of the [pages](/docs/api/liquid/objects/page) on a store.\n\n#### \n\nYou can access a specific page through the `pages` object using the page's [handle](/docs/api/liquid/basics#handles).\n\n\n```liquid\n\n{{ pages.contact.title }}\n{{ pages['about-us'].title }}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/pages)\n\n",
    type: 'array',
    scope: 'page'
  },
  all_products: {
    summary: 'All of the products on a store.',
    global: true,
    description: "All of the products on a store. \n\n**Note**\n\n> The `all_products` object has a limit of 20 unique handles per page. If you want more than 20 products,\nthen consider using a collection instead.\n\n#### \n\nYou can use `all_products` to access a product by its [handle](/docs/api/liquid/basics#handles). If the product isn't found, then `nil` is returned.\n\n```liquid\n\n{{ all_products['love-potion'].title }}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/all_products)\n\n",
    type: 'array',
    scope: 'product'
  },
  app: {
    summary: 'An app. This object is usually used to access app-specific information for use with [theme app extensions](/apps/online-store/theme-app-extensions).',
    description: 'An app. This object is usually used to access app-specific information for use with [theme app extensions](/apps/online-store/theme-app-extensions).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/app)\n\n',
    type: 'object',
    properties: {
      metafields: {
        type: 22,
        description: 'The [metafields](/docs/api/liquid/objects/metafield) that are [owned by the app](/apps/metafields/app-owned).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/app#metafields)\n\n'
      }
    }
  },
  discount: {
    summary: 'A discount applied to a cart, line item, or order.',
    deprecated: true,
    description: '⚠️ **DEPRECATED** ⚠️\n\nDeprecated because not all discount types and details are captured.\n\nThe `discount` object has been replaced by the [`discount_allocation`](/docs/api/liquid/objects/discount_allocation) and\n[`discount_application`](/docs/api/liquid/objects/discount_application) objects.\n\n---\n\nA discount applied to a cart, line item, or order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount)\n\n',
    type: 'object',
    properties: {
      amount: {
        type: 'number',
        description: "The amount of the discount in the currency's subunit. \n\n**Note**\n\n> This is the same value as [`discount.total_amount`](https://shopify.dev/docs/api/liquid/objects/discount#discount-total_amount).\n\nThe value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount#amount)\n\n",
        deprecated: true
      },
      total_amount: {
        type: 'number',
        description: "The amount of the discount in the currency's subunit. \n\n**Note**\n\n> This is the same value as [`discount.amount`](https://shopify.dev/docs/api/liquid/objects/discount#discount-amount).\n\nThe value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount#total_amount)\n\n",
        deprecated: true
      },
      code: {
        type: 'string',
        description: 'The customer-facing name of the discount. \n\n**Note**\n\n> This is the same value as [`discount.title`](https://shopify.dev/docs/api/liquid/objects/discount#discount-title).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount#code)\n\n',
        deprecated: true
      },
      title: {
        type: 'string',
        description: 'The customer-facing name of the discount. \n\n**Note**\n\n> This is the same value as [`discount.code`](https://shopify.dev/docs/api/liquid/objects/discount#discount-code).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount#title)\n\n',
        deprecated: true
      },
      type: {
        type: 'string',
        description: 'The type of the discount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount#type)\n\n',
        deprecated: true,
        literal: [
          'FixedAmountDiscount',
          'PercentageDiscount',
          'ShippingDiscount'
        ]
      },
      savings: {
        type: 'number',
        description: "The amount of the discount as a negative value, in the currency's subunit. \n\n**Note**\n\n> This is the same value as [`discount.total_savings`](https://shopify.dev/docs/api/liquid/objects/discount#discount-total_savings).\nThe value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount#savings)\n\n",
        deprecated: true
      },
      total_savings: {
        type: 'number',
        description: "The amount of the discount as a negative value, in the currency's subunit. \n\n**Note**\n\n> This is the same value as [`discount.savings`](https://shopify.dev/docs/api/liquid/objects/discount#discount-savings).\nThe value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount#total_savings)\n\n",
        deprecated: true
      }
    }
  },
  articles: {
    summary: 'All of the articles across the blogs in the store.',
    global: true,
    description: "All of the articles across the blogs in the store.\n\n#### \n\nYou can use `articles` to access an article by its [handle](/docs/api/liquid/basics#handles).\n\n\n```liquid\n\n{% assign article = articles['potion-notions/new-potions-for-spring'] %}\n{{ article.title | link_to: article.url }}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/articles)\n\n",
    type: 'array',
    scope: 'article'
  },
  article: {
    summary: 'An article, or [blog post](https://help.shopify.com/manual/online-store/blogs/writing-blogs), in a blog.',
    template: [
      'article'
    ],
    description: 'An article, or [blog post](https://help.shopify.com/manual/online-store/blogs/writing-blogs), in a blog.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article)\n\n',
    type: 'object',
    properties: {
      image: {
        type: 'object',
        description: 'The featured image for the article.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#image)\n\n',
        scope: 'image'
      },
      author: {
        type: 'string',
        description: 'The full name of the author of the article.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#author)\n\n'
      },
      metafields: {
        type: 'any',
        description: 'The [metafields](/docs/api/liquid/objects/metafield) applied to the article. \n\n**Tip**\n\n> To learn about how to create metafields, refer to [Create and manage metafields](/apps/metafields/manage) or visit\n> the [Shopify Help Center](https://help.shopify.com/manual/metafields).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#metafields)\n\n'
      },
      handle: {
        type: 'string',
        description: 'The [handle](/docs/api/liquid/basics#handles) of the article.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#handle)\n\n'
      },
      id: {
        type: 'string',
        description: 'The ID of the article.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#id)\n\n'
      },
      title: {
        type: 'string',
        description: 'The title of the article.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#title)\n\n'
      },
      url: {
        type: 'string',
        description: 'The relative URL of the article.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#url)\n\n'
      },
      template_suffix: {
        type: 'string',
        description: "The name of the [custom template](/themes/architecture/templates#alternate-templates) assigned to the article. The name doesn't include the `article.` prefix, or the file extension (`.json` or `.liquid`).\n\n If a custom template isn't assigned to the article, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#template_suffix)\n\n"
      },
      created_at: {
        type: 'string',
        description: 'A timestamp for when the article was created. \n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#created_at)\n\n'
      },
      published_at: {
        type: 'string',
        description: 'A timestamp for when the article was published. \n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#published_at)\n\n'
      },
      updated_at: {
        type: 'string',
        description: 'A timestamp for when the article was updated. \n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#updated_at)\n\n'
      },
      'moderated?': {
        type: 'boolean',
        description: 'Returns `true` if the blog that the article belongs to is set to [moderate comments](https://help.shopify.com/manual/online-store/blogs/managing-comments).\nReturns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#moderated?)\n\n'
      },
      comments: {
        type: 'array',
        description: 'The published comments for the article. Returns an empty array if comments are disabled.\n\n\n\n**Tip**\n\n> Use the [paginate](https://shopify.dev/docs/api/liquid/tags/paginate) tag to choose how many comments to show at once, up to a limit of 50.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#comments)\n\n',
        scope: 'comment'
      },
      comments_count: {
        type: 'number',
        description: 'The number of published comments for the article.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#comments_count)\n\n'
      },
      'comments_enabled?': {
        type: 'boolean',
        description: 'Returns `true` if comments are enabled. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#comments_enabled?)\n\n'
      },
      comment_post_url: {
        type: 'string',
        description: 'The relative URL where POST requests are sent when creating new comments.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#comment_post_url)\n\n'
      },
      content: {
        type: 'string',
        description: 'The content of the article.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#content)\n\n'
      },
      excerpt: {
        type: 'string',
        description: 'The excerpt of the article.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#excerpt)\n\n'
      },
      excerpt_or_content: {
        type: 'string',
        description: 'Returns the article [excerpt](/docs/api/liquid/objects/article#article-excerpt) if it exists. Returns the article\n[content](/docs/api/liquid/objects/article#article-content) if no excerpt exists.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#excerpt_or_content)\n\n'
      },
      tags: {
        type: 'array',
        description: 'The tags applied to the article.\n\n#### Example\n\nWhen looping through `article.tags`, you can print how many times a tag is used with `tag.total_count`. This number shows visitors how many blog posts have been tagged with a particular tag.\n\n\n```liquid\n\n{% for tag in article.tags -%}\n  {{ tag }} ({{ tag.total_count }})\n{%- endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#tags)\n\n'
      },
      user: {
        type: 'object',
        description: 'The user associated with the author of the article.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/article#user)\n\n',
        scope: 'user'
      }
    }
  },
  block: {
    summary: 'The content and settings of a [section block](/themes/architecture/sections/section-schema#blocks).',
    description: 'The content and settings of a [section block](/themes/architecture/sections/section-schema#blocks). Sections and blocks are reusable modules of content that make up [templates](/themes/architecture/templates).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/block)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of the block. The ID is dynamically generated by Shopify.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/block#id)\n\n'
      },
      settings: {
        type: 'any',
        description: 'The [settings](/themes/architecture/sections/section-schema#blocks) of the block. To learn about how to access settings, refer to [Access settings](/themes/architecture/settings#access-settings). To learn which input settings can be applied to the `type` property within settings, refer to [Input settings](/themes/architecture/settings/input-settings).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/block#settings)\n\n'
      },
      type: {
        type: 'string',
        description: "The type of the block. The type is a free-form string that's defined in the [block's schema](/themes/architecture/sections/section-schema#blocks).\nYou can use the type as an identifier. For example, you might display different markup based on the block type.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/block#type)\n\n"
      },
      shopify_attributes: {
        type: 'string',
        description: "The data attributes for the block for use in the theme editor. The theme editor's [JavaScript API](/themes/architecture/sections/integrate-sections-with-the-theme-editor#section-and-block-javascript-events)\nuses the data attributes to identify blocks and listen for events. No value for `block.shopify_attributes` is returned\noutside the theme editor.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/block#shopify_attributes)\n\n"
      }
    }
  },
  blogs: {
    summary: 'All of the blogs in the store.',
    global: true,
    description: 'All of the blogs in the store.\n\n#### \n\nYou can use `blogs` to access a blog by its [handle](/docs/api/liquid/basics#handles).\n\n\n```liquid\n\n{% for article in blogs.potion-notions.articles %}\n  {{- article.title | link_to: article.url }}\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blogs)\n\n',
    type: 'array',
    scope: 'blog'
  },
  blog: {
    summary: 'Information about a specific [blog](https://help.shopify.com/manual/online-store/blogs/adding-a-blog) in the store.',
    template: [
      'blog',
      'article'
    ],
    description: 'Information about a specific [blog](https://help.shopify.com/manual/online-store/blogs/adding-a-blog) in the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'The ID of the blog.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#id)\n\n'
      },
      title: {
        type: 'string',
        description: 'The title of the blog.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#title)\n\n'
      },
      handle: {
        type: 'string',
        description: 'The [handle](/docs/api/liquid/basics#handles) of the blog.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#handle)\n\n'
      },
      articles: {
        type: 'array',
        description: 'The articles in the blog. \n\n**Tip**\n\n> Use the [paginate](https://shopify.dev/docs/api/liquid/tags/paginate) tag to choose how many articles to show per page, up to a limit of 50.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#articles)\n\n',
        scope: 'article'
      },
      articles_count: {
        type: 'number',
        description: "The total number of articles in the blog. This total doesn't include hidden articles.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#articles_count)\n\n"
      },
      metafields: {
        type: 'array',
        description: 'The [metafields](/docs/api/liquid/objects/metafield) applied to the blog. \n\n**Tip**\n\n> To learn about how to create metafields, refer to [Create and manage metafields](/apps/metafields/manage) or visit\n> the [Shopify Help Center](https://help.shopify.com/manual/metafields).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#metafields)\n\n',
        scope: 'metafield'
      },
      url: {
        type: 'string',
        description: 'The relative URL of the blog.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#url)\n\n'
      },
      template_suffix: {
        type: 'string',
        description: "The name of the [custom template](/themes/architecture/templates#alternate-templates) assigned to the blog. The name doesn't include the `blog.` prefix, or the file extension (`.json` or `.liquid`).\n\n If a custom template isn't assigned to the blog, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#template_suffix)\n\n"
      },
      all_tags: {
        type: 'array',
        description: "All of the tags on the articles in the blog. This includes tags of articles that aren't in the current pagination view.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#all_tags)\n\n"
      },
      tags: {
        type: 'array',
        description: 'A list of all of the tags on all of the articles in the blog.\n\nUnlike [`blog.all_tags`](/docs/api/liquid/objects/blog#blog-all_tags), this property only returns tags of articles that are in the\nfiltered view.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#tags)\n\n'
      },
      'comments_enabled?': {
        type: 'boolean',
        description: 'Returns `true` if comments are enabled for the blog. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#comments_enabled?)\n\n'
      },
      'moderated?': {
        type: 'boolean',
        description: 'Returns `true` if the blog is set to\n[moderate comments](https://help.shopify.com/manual/online-store/blogs/managing-comments). Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#moderated?)\n\n'
      },
      next_article: {
        type: 'object',
        description: 'The next (older) article in the blog. Returns `nil` if there is no next article.\n\nThis property can be used on the [article page](/themes/architecture/templates/article) to output `next` links.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#next_article)\n\n',
        scope: 'article'
      },
      previous_article: {
        type: 'object',
        description: 'The previous (newer) article in the blog. Returns `nil` if there is no previous article.\n\nThis property can be used on the [article page](/themes/architecture/templates/article) to output `previous` links.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/blog#previous_article)\n\n',
        scope: 'article'
      }
    }
  },
  cart: {
    summary: 'A customer’s cart.',
    global: true,
    template: [
      'cart'
    ],
    description: 'A customer’s cart.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart)\n\n',
    type: 'object',
    properties: {
      requires_shipping: {
        type: 'boolean',
        description: 'Returns `true` if any of the products in the cart require shipping. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#requires_shipping)\n\n'
      },
      note: {
        type: 'string',
        description: 'Additional information captured with the cart. To learn more about capturing cart notes, refer to the [`cart` template](/themes/architecture/templates/cart#support-cart-notes-and-attributes).\n\n#### Example\n\nTo capture a cart note, include an HTML input such as a `<textarea>` with an attribute of `name="note"` within the cart `<form>`.\n\n```liquid\n<label>Gift note:</label>\n<textarea name="note"></textarea>\n```\n\n> Note:\n> There can only be one instance of `{{ cart.note }}` on the cart page. If there are multiple instances,\n> then the one that comes latest in the Document Object Model (DOM) will be submitted with the form.\n\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#note)\n\n'
      },
      item_count: {
        type: 'number',
        description: 'The number of items in the cart.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#item_count)\n\n'
      },
      total_price: {
        type: 'number',
        description: "The total price of all of the items in the cart in the currency's subunit, after discounts have been applied. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#total_price)\n\n"
      },
      checkout_charge_amount: {
        type: 'number',
        description: "The amount that the customer will be charged at checkout in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#checkout_charge_amount)\n\n"
      },
      original_total_price: {
        type: 'number',
        description: "The total price of all of the items in the cart in the currency's subunit, before discounts have been applied. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#original_total_price)\n\n"
      },
      items_subtotal_price: {
        type: 'number',
        description: "The total price of all of the items in the cart in the currency's subunit, after any line item discounts. This\ndoesn't include taxes (unless taxes are included in the prices), cart discounts, or shipping costs. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#items_subtotal_price)\n\n"
      },
      total_discount: {
        type: 'number',
        description: "The total amount of all discounts (the amount saved) for the cart in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#total_discount)\n\n"
      },
      items: {
        type: 'array',
        description: 'The line items in the cart.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#items)\n\n',
        scope: 'line_item'
      },
      'empty?': {
        type: 'boolean',
        description: "Returns `true` if there are no items in the cart. Return's `false` if there are.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#empty?)\n\n"
      },
      currency: {
        type: 22,
        description: "The currency of the cart. If the store uses multi-currency, then this is the same as the customer's local\n(presentment) currency. Otherwise, it's the same as the store currency.\n\n\n\n**Tip**\n\n> You can output the store's available currencies using [`shop.enabled_currencies`](https://shopify.dev/docs/api/liquid/objects/shop#shop-enabled_currencies).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#currency)\n\n"
      },
      total_weight: {
        type: 'number',
        description: "The total weight of all of the items in the cart in grams. \n\n**Tip**\n\n> Use the [`weight_with_unit`](https://shopify.dev/docs/api/liquid/filters/weight_with_unit) filter to format the weight in\n> [the store's format](https://www.shopify.com/admin/settings/general), or override the default unit.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#total_weight)\n\n"
      },
      discount_applications: {
        type: 'array',
        description: 'The discount applications for the cart.\n\n#### Example\n\n```liquid\n\n{% for discount_application in cart.discount_applications %}\n  Discount name: {{ discount_application.title }}\n  Savings: -{{ discount_application.total_allocated_amount | money }}\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#discount_applications)\n\n',
        scope: 'discount_application'
      },
      attributes: {
        type: 'any',
        description: "Additional attributes entered by the customer with the cart. To learn more about capturing cart attributes, refer to the [`cart` template](/themes/architecture/templates/cart#support-cart-notes-and-attributes).\n\n#### Example\n\nTo capture a cart attribute, include an HTML input with an attribute of `name=\"attributes[attribute-name]\"` within the cart `<form>`.\n\n```liquid\n<label>What do you want engraved on your cauldron?</label>\n<input type=\"text\" name=\"attributes[cauldron-engraving]\" value=\"{{ cart.attributes.cauldron-engraving }}\" />\n```\n\n> Tip:\n> You can add a double underscore `__` prefix to an attribute name to make it private. Private attributes behave like other cart attributes, except that they can't be read from Liquid or the Ajax API.\n> You can use them for data that doesn't affect the page rendering, which allows for more effective page caching.\n\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#attributes)\n\n"
      },
      cart_level_discount_applications: {
        type: 'array',
        description: 'The cart-specific discount applications for the cart.\n\n#### Example\n\n```liquid\n\n{% for discount_application in cart.cart_level_discount_applications %}\n  Discount name: {{ discount_application.title }}\n  Savings: -{{ discount_application.total_allocated_amount | money }}\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#cart_level_discount_applications)\n\n',
        scope: 'discount_application'
      },
      discounts: {
        type: 'array',
        description: '⚠️ **DEPRECATED** ⚠️\n\nDeprecated because not all discount types and details are available.\n\nThe `cart.discounts` property has been replaced by [`cart.discount_applications`](/docs/api/liquid/objects/cart#cart-discount_applications).\n\n---\n\nThe discounts applied to the cart.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#discounts)\n\n',
        scope: 'discount'
      },
      taxes_included: {
        type: 'boolean',
        description: 'Returns `true` if taxes are included in the prices of products in the cart. Returns `false` if not. This can be set in a store’s [tax settings](https://www.shopify.com/admin/settings/taxes).\n\nIf the store includes or exclude tax [based on the customer’s country](https://help.shopify.com/manual/taxes/location#include-or-exclude-tax-based-on-your-customers-country),\nthen the value reflects the tax requirements of the customer’s country.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/cart#taxes_included)\n\n'
      }
    }
  },
  collection: {
    summary: 'A [collection](https://help.shopify.com/manual/products/collections) in a store.',
    template: [
      'collection'
    ],
    description: 'A [collection](https://help.shopify.com/manual/products/collections) in a store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection)\n\n',
    type: 'object',
    properties: {
      metafields: {
        type: 'array',
        description: 'The [metafields](/docs/api/liquid/objects/metafield) applied to the collection. \n\n**Tip**\n\n> To learn about how to create metafields, refer to [Create and manage metafields](/apps/metafields/manage) or visit\n> the [Shopify Help Center](https://help.shopify.com/manual/metafields).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#metafields)\n\n',
        scope: 'metafield'
      },
      id: {
        type: 'number',
        description: 'The ID of the collection.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#id)\n\n'
      },
      handle: {
        type: 'string',
        description: 'The [handle](/docs/api/liquid/basics#handles) of the collection.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#handle)\n\n'
      },
      title: {
        type: 'string',
        description: 'The title of the collection.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#title)\n\n'
      },
      description: {
        type: 'string',
        description: 'The description of the collection.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#description)\n\n'
      },
      template_suffix: {
        type: 'string',
        description: "The name of the [custom template](/themes/architecture/templates#alternate-templates) assigned to the collection. The name doesn't include the `collection.` prefix, or the file extension (`.json` or `.liquid`).\n\n If a custom template isn't assigned to the collection, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#template_suffix)\n\n"
      },
      current_vendor: {
        type: 'string',
        description: 'The vendor name on a vendor collection page. You can query for products from a certain vendor at the `/collections/vendors` URL\nwith a query parameter in the format of `?q=[vendor]`, where `[vendor]` is your desired product vendor.\n\n\n\n**Tip**\n\n> The query value is case-insensitive, so `apparelco` is equivalent to `ApparelCo` or `APPARELCO`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#current_vendor)\n\n'
      },
      current_type: {
        type: 'string',
        description: 'The product type on a product type collection page. You can query for products of a certain type at the `/collections/types` URL\nwith a query parameter in the format of `?q=[type]`, where `[type]` is your desired product type.\n\n\n\n**Tip**\n\n> The query value is case-insensitive, so `shirts` is equivalent to `Shirts` or `SHIRTS`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#current_type)\n\n'
      },
      url: {
        type: 'string',
        description: 'The relative URL of the collection.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#url)\n\n'
      },
      published_at: {
        type: 'string',
        description: 'A timestamp for when the collection was published. \n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#published_at)\n\n'
      },
      image: {
        type: 'object',
        description: "The image for the collection. This image is added on the collection's page in the Shopify admin.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#image)\n\n",
        scope: 'image'
      },
      sort_options: {
        type: 'array',
        description: 'The available sorting options for the collection.\n\n#### Example\n\n```liquid\n\n{%- assign sort_by = collection.sort_by | default: collection.default_sort_by -%}\n\n<select>\n{%- for option in collection.sort_options %}\n  <option\n    value="{{ option.value }}"\n    {%- if option.value == sort_by %}\n      selected="selected"\n    {%- endif %}\n  >\n    {{ option.name }}\n  </option>\n{% endfor -%}\n</select>\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#sort_options)\n\n',
        scope: 'sort_option'
      },
      sort_by: {
        type: 'string',
        description: "The sort order applied to the collection by the `sort_by` URL parameter. If there's no `sort_by` URL parameter, then the value is `nil`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#sort_by)\n\n"
      },
      default_sort_by: {
        type: 'string',
        description: "The default sort order of the collection. This is set on the collection's page in the Shopify admin.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#default_sort_by)\n\n",
        literal: [
          'manual',
          'best-selling',
          'title-ascending',
          'price-ascending',
          'price-descending',
          'created-ascending',
          'created-descending'
        ]
      },
      next_product: {
        type: 'object',
        description: "The next product in the collection. Returns `nil` if there's no next product. This property can be used on the [product page](/themes/architecture/templates/product) to output `next` links.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#next_product)\n\n",
        scope: 'product'
      },
      previous_product: {
        type: 'object',
        description: "The previous product in the collection. Returns `nil` if there's no previous product. This property can be used on the [product page](/themes/architecture/templates/product) to output `previous` links.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#previous_product)\n\n",
        scope: 'product'
      },
      products_count: {
        type: 'number',
        description: 'The total number of products in the current view of the collection.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#products_count)\n\n'
      },
      products: {
        type: 'array',
        description: 'All of the products in the collection. \n\n**Tip**\n\n> Use the [paginate](https://shopify.dev/docs/api/liquid/tags/paginate) tag to choose how many products to show per page, up to a limit of 50.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#products)\n\n',
        scope: 'product'
      },
      all_products_count: {
        type: 'number',
        description: 'The total number of products in a collection. This includes products that have been filtered out of the current view.\n\n\n\n**Tip**\n\n> To display the number of products in a filtered collection, use [`collection.products_count`](https://shopify.dev/docs/api/liquid/objects/collection#collection-products_count).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#all_products_count)\n\n'
      },
      all_tags: {
        type: 'array',
        description: 'All of the tags applied to the products in the collection. This includes tags for products that have been filtered out of the current view.\nA maximum of 1,000 tags can be returned.\n\n\n\n**Tip**\n\n> To display the tags that are currently applied, use [`collection.tags`](https://shopify.dev/docs/api/liquid/objects/collection#collection-tags).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#all_tags)\n\n'
      },
      tags: {
        type: 'array',
        description: "The tags that are currently applied to the collection. This doesn't include tags for products that have been filtered out of the current view.\nReturns `nil` if no tags have been applied, or all products with tags have been filtered out of the current view.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#tags)\n\n"
      },
      all_types: {
        type: 'array',
        description: 'All of the product types in a collection.\n\n#### Example\n\nUse the [`link_to_type`](/docs/api/liquid/filters/link_to_type) filter to create links to the product types in a collection.\n\n\n```liquid\n\n{% for product_type in collection.all_types -%}\n  {{- product_type | link_to_type }}\n{%- endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#all_types)\n\n'
      },
      all_vendors: {
        type: 'array',
        description: 'All of the product vendors in a collection.\n\n#### Example\n\nUse the [`link_to_vendor`](/docs/api/liquid/filters/link_to_vendor) filter to create links to the vendors in a collection.\n\n\n```liquid\n\n{% for product_vendor in collection.all_vendors %}\n  {{- product_vendor | link_to_vendor }}\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#all_vendors)\n\n'
      },
      filters: {
        type: 'array',
        description: 'The [storefront filters](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters) that\nhave been set up on the collection. Only filters relevant to the current collection are returned. Filters will be empty for collections that contain over 1000 products.\n\nTo learn about supporting filters in your theme, refer to [Support storefront filtering](/themes/navigation-search/filtering/storefront-filtering/support-storefront-filtering).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#filters)\n\n',
        scope: 'filter'
      },
      featured_image: {
        type: 'object',
        description: "The featured image for the collection. The default is the [collection image](https://shopify.dev/docs/api/liquid/objects/collection#collection-image). If this image isn't available, then\nShopify falls back to the featured image of the first product in the collection. If the first product in the collection\ndoesn't have a featured image, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/collection#featured_image)\n\n",
        scope: 'image'
      }
    }
  },
  color: {
    summary: 'A color from a [`color` setting](/themes/architecture/settings/input-settings#color).',
    description: 'A color from a [`color` setting](/themes/architecture/settings/input-settings#color). \n\n**Tip**\n\n> Use [color filters](https://shopify.dev/docs/api/liquid/filters/color-filters) to modify or extract properties of a `color` object.\n\n#### Example\n\nWhen a color setting is referenced directly, the hexidecimal color code is returned.\n\n\n```liquid\n\n{{ settings.colors_accent_2 }}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/color)\n\n',
    type: 'object',
    properties: {
      red: {
        type: 'number',
        description: 'The red component of the color, which is a number between 0 and 255.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/color#red)\n\n'
      },
      green: {
        type: 'number',
        description: 'The green component of the color, which is a number between 0 and 255.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/color#green)\n\n'
      },
      blue: {
        type: 'number',
        description: 'The blue component of the color, which is a number between 0 and 255.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/color#blue)\n\n'
      },
      rgb: {
        type: 'string',
        description: 'The red, green, and blue values of the color, represented as a space-separated string.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/color#rgb)\n\n'
      },
      rgba: {
        type: 'string',
        description: 'The red, green, blue, and alpha values of the color, represented as a\nspace-separated string, with a slash before the alpha channel.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/color#rgba)\n\n'
      },
      hue: {
        type: 'number',
        description: 'The hue component of the color, which is a number between 0 and 360.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/color#hue)\n\n'
      },
      saturation: {
        type: 'number',
        description: 'The saturation component of the color, which is a number between 0 and 100.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/color#saturation)\n\n'
      },
      lightness: {
        type: 'number',
        description: 'The lightness component of the color, which is a number between 0 and 100.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/color#lightness)\n\n'
      },
      alpha: {
        type: 'number',
        description: 'The alpha component of the color, which is a decimal number between 0.0 and 1.0.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/color#alpha)\n\n'
      }
    }
  },
  company_address: {
    summary: 'The address of a company location.',
    description: 'The address of a company location. To learn about B2B in themes, refer to [Support B2B customers in your theme](/themes/pricing-payments/b2b).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_address)\n\n',
    type: 'object',
    properties: {
      attention: {
        type: 'string',
        description: 'The attention line of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_address#attention)\n\n'
      },
      id: {
        type: 'number',
        description: 'The ID of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_address#id)\n\n'
      },
      address1: {
        type: 'string',
        description: 'The first line of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_address#address1)\n\n'
      },
      address2: {
        type: 'string',
        description: 'The second line of the address. If no second line is specified, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_address#address2)\n\n'
      },
      city: {
        type: 'string',
        description: 'The city of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_address#city)\n\n'
      },
      zip: {
        type: 'string',
        description: 'The zip or postal code of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_address#zip)\n\n'
      },
      country_code: {
        type: 'string',
        description: 'The country of the address in [ISO 3166-1 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_address#country_code)\n\n'
      },
      province_code: {
        type: 'string',
        description: "The province of the address in [ISO 3166-2 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html). \n\n**Note**\n\n> The value doesn't include the preceding [ISO 3166-1](https://www.iso.org/glossary-for-iso-3166.html) country code.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_address#province_code)\n\n"
      },
      country: {
        type: 'object',
        description: 'The country of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_address#country)\n\n',
        scope: 'country'
      },
      street: {
        type: 'string',
        description: 'A combination of the first and second lines of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_address#street)\n\n'
      },
      province: {
        type: 'string',
        description: 'The province of the address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_address#province)\n\n'
      }
    }
  },
  company: {
    summary: 'A company that a [customer](/docs/api/liquid/objects/customer) is purchasing for.',
    description: 'A company that a [customer](/docs/api/liquid/objects/customer) is purchasing for. To learn about B2B in themes, refer to [Support B2B customers in your theme](/themes/pricing-payments/b2b).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'The ID of the company.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company#id)\n\n'
      },
      name: {
        type: 'string',
        description: 'The name of the company.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company#name)\n\n'
      },
      available_locations: {
        type: 'array',
        description: 'The company locations that the current customer has access to, or can interact with.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company#available_locations)\n\n',
        scope: 'company_location'
      }
    }
  },
  company_location: {
    summary: 'A location of the [company](/docs/api/liquid/objects/company) that a [customer](/docs/api/liquid/objects/customer) is purchasing for.',
    description: 'A location of the [company](/docs/api/liquid/objects/company) that a [customer](/docs/api/liquid/objects/customer) is purchasing for. To learn about B2B in themes, refer to [Support B2B customers in your theme](/themes/pricing-payments/b2b).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_location)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'The ID of the location.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_location#id)\n\n'
      },
      name: {
        type: 'string',
        description: 'The name of the location.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_location#name)\n\n'
      },
      url_to_set_as_current: {
        type: 'string',
        description: 'The URL to set the location as the current location for the customer.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_location#url_to_set_as_current)\n\n'
      },
      'current?': {
        type: 'boolean',
        description: 'Returns `true` if the location is currently selected. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_location#current?)\n\n'
      },
      company: {
        type: 'object',
        description: 'The company that the location is associated with.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_location#company)\n\n',
        scope: 'company'
      },
      shipping_address: {
        type: 'object',
        description: 'The address of the location.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_location#shipping_address)\n\n',
        scope: 'company_address'
      },
      tax_registration_id: {
        type: 'number',
        description: 'The tax ID of the location.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/company_location#tax_registration_id)\n\n'
      }
    }
  },
  content_for_header: {
    summary: 'Dynamically returns all scripts required by Shopify.',
    global: true,
    description: "Dynamically returns all scripts required by Shopify. Include the `content_for_header` object in your [layout files](/themes/architecture/layouts) between the `<head>` and\n`</head>` HTML tags.\n\nYou shouldn't try to modify or parse the `content_for_header` object because the contents are subject to change, which can\nchange the behaviour of your code.\n\n\n\n**Note**\n\n> The `content_for_header` object is required in `theme.liquid`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/content_for_header)\n\n",
    const: true
  },
  country: {
    summary: "A country supported by the store's localization options.",
    description: "A country supported by the store's localization options. To learn how to use the `country` object to offer localization options in your theme,\nrefer to [Support multiple currencies and languages](/themes/internationalization/multiple-currencies-languages).\n\n#### Example\n\nWhen the country object is referenced directly, `country.name` is returned.\n\n\n```liquid\n\n{% for country in localization.available_countries -%}\n  {{ country }}\n{%- endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/country)\n\n",
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the country.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/country#name)\n\n'
      },
      iso_code: {
        type: 'string',
        description: 'The ISO code of the country in [ISO 3166-1 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/country#iso_code)\n\n'
      },
      unit_system: {
        type: 'string',
        description: 'The unit system of the country.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/country#unit_system)\n\n',
        literal: [
          'imperial',
          'metric'
        ]
      },
      currency: {
        type: 'object',
        description: 'The currency used in the country.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/country#currency)\n\n',
        scope: 'currency'
      },
      market: {
        type: 'object',
        description: 'The market that includes this country.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/country#market)\n\n',
        scope: 'market'
      }
    }
  },
  currency: {
    summary: 'Information about a currency, like the ISO code and symbol.',
    description: 'Information about a currency, like the ISO code and symbol.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/currency)\n\n',
    type: 'object',
    properties: {
      iso_code: {
        type: 'string',
        description: 'The [ISO code](https://www.iso.org/iso-4217-currency-codes.html) of the currency.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/currency#iso_code)\n\n'
      },
      symbol: {
        type: 'string',
        description: 'The symbol of the currency.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/currency#symbol)\n\n'
      },
      name: {
        type: 'string',
        description: 'The name of the currency.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/currency#name)\n\n'
      }
    }
  },
  customer: {
    summary: 'A [customer](https://help.shopify.com/manual/customers) of the store.',
    global: true,
    template: [
      'customers/account',
      'customers/addresses',
      'customers/order'
    ],
    description: "A [customer](https://help.shopify.com/manual/customers) of the store. The `customer` object is directly accessible globally when a customer is logged in to their account. It's also defined in\nthe following contexts:\n\n- The [`customers/account` template](/themes/architecture/templates/customers-account)\n- The [`customers/addresses` template](/themes/architecture/templates/customers-addresses)\n- The [`customers/order` template](/themes/architecture/templates/customers-order)\n- When accessing [`checkout.customer`](https://shopify.dev/docs/api/liquid/objects/checkout#checkout-customer)\n- When accessing [`gift_card.customer`](https://shopify.dev/docs/api/liquid/objects/gift_card#gift_card-customer)\n- When accessing [`order.customer`](https://shopify.dev/docs/api/liquid/objects/order#order-customer)\n\nOutside of the above contexts, if the customer isn't logged into their account, the `customer` object returns `nil`.\n\n#### Example\n\nWhen using the `customer` object outside of customer-specific templates or objects that specifically return a customer, you should check whether the `customer` object is defined.\n\n\n```liquid\n\n{% if customer %}\n  Hello, {{ customer.first_name }}!\n{% endif %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer)\n\n",
    type: 'object',
    properties: {
      first_name: {
        type: 'string',
        description: 'The first name of the customer.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#first_name)\n\n'
      },
      last_name: {
        type: 'string',
        description: 'The last name of the customer.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#last_name)\n\n'
      },
      orders_count: {
        type: 'number',
        description: 'The total number of orders that the customer has placed.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#orders_count)\n\n'
      },
      total_spent: {
        type: 'number',
        description: "The total amount that the customer has spent on all orders in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#total_spent)\n\n"
      },
      orders: {
        type: 'array',
        description: 'All of the orders placed by the customer. \n\n**Tip**\n\n> Use the [paginate](https://shopify.dev/docs/api/liquid/tags/paginate) tag to choose how many orders to show at once, up to a limit of 20.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#orders)\n\n',
        scope: 'order'
      },
      last_order: {
        type: 'object',
        description: 'The last order placed by the customer, not including test orders.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#last_order)\n\n',
        scope: 'order'
      },
      name: {
        type: 'string',
        description: 'The full name of the customer.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#name)\n\n'
      },
      email: {
        type: 'string',
        description: 'The email of the customer.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#email)\n\n'
      },
      phone: {
        type: 'string',
        description: 'The phone number of the customer. This phone number is only populated if the customer checks out using a phone number during checkout, opts in to SMS\nnotifications, or if the merchant has manually entered it.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#phone)\n\n'
      },
      has_account: {
        type: 'boolean',
        description: "Returns `true` if the email associated with the customer is tied to a\n[customer account](https://help.shopify.com/manual/customers/customer-accounts). Returns `false` if not. A customer can complete a checkout without making an account with the store. If the customer\ndoesn't have an account with the store, then `customer.has_account` is `false` at checkout.\n\nDuring the checkout process, if the customer has an account with the store and enters an email associated\nwith an account, then `customer.has_account` is `true`. The email is associated with the account regardless\nof whether the customer has logged into their account.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#has_account)\n\n"
      },
      accepts_marketing: {
        type: 'boolean',
        description: 'Returns `true` if the customer accepts marketing. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#accepts_marketing)\n\n'
      },
      id: {
        type: 'number',
        description: 'The ID of the customer.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#id)\n\n'
      },
      tags: {
        type: 'array',
        description: 'The tags associated with the customer.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#tags)\n\n'
      },
      default_address: {
        type: 'object',
        description: 'The default address of the customer.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#default_address)\n\n',
        scope: 'address'
      },
      addresses: {
        type: 'array',
        description: 'All of the addresses associated with the customer. \n\n**Tip**\n\n> Use the [paginate](https://shopify.dev/docs/api/liquid/tags/paginate) tag to choose how many addresses to show at once, up to a limit of 20.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#addresses)\n\n',
        scope: 'address'
      },
      addresses_count: {
        type: 'number',
        description: 'The number of addresses associated with the customer.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#addresses_count)\n\n'
      },
      tax_exempt: {
        type: 'boolean',
        description: 'Returns `true` if the customer is exempt from taxes. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#tax_exempt)\n\n'
      },
      'b2b?': {
        type: 'boolean',
        description: 'Returns `true` if the customer is a B2B customer. Returns `false` if not. To learn about B2B in themes, refer to [Support B2B customers in your theme](/themes/pricing-payments/b2b).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#b2b?)\n\n'
      },
      company_available_locations: {
        type: 'array',
        description: 'The company locations that the customer has access to, or can interact with. To learn about B2B in themes, refer to [Support B2B customers in your theme](/themes/pricing-payments/b2b).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#company_available_locations)\n\n',
        scope: 'company_location'
      },
      current_location: {
        type: 'object',
        description: 'The currently selected company location. To learn about B2B in themes, refer to [Support B2B customers in your theme](/themes/pricing-payments/b2b).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#current_location)\n\n',
        scope: 'company_location'
      },
      current_company: {
        type: 'object',
        description: 'The company that the customer is purchasing for. To learn about B2B in themes, refer to [Support B2B customers in your theme](/themes/pricing-payments/b2b).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/customer#current_company)\n\n',
        scope: 'company'
      }
    }
  },
  discount_allocation: {
    summary: 'Information about how a discount affects an item.',
    description: 'Information about how a discount affects an item. To learn about how to display discounts in your theme, refer to [Discounts](/themes/pricing-payments/discounts).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount_allocation)\n\n',
    type: 'object',
    properties: {
      discount_application: {
        type: 'object',
        description: 'The discount application that applies the discount to the item.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount_allocation#discount_application)\n\n',
        scope: 'discount_application'
      },
      amount: {
        type: 'number',
        description: "The amount that the item is discounted by in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount_allocation#amount)\n\n"
      }
    }
  },
  discount_application: {
    summary: 'Information about the intent of a discount.',
    description: 'Information about the intent of a discount. To learn about how to display discounts in your theme, refer to [Discounts](/themes/pricing-payments/discounts).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount_application)\n\n',
    type: 'object',
    properties: {
      total_allocated_amount: {
        type: 'number',
        description: "The total amount of the discount in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount_application#total_allocated_amount)\n\n"
      },
      title: {
        type: 'string',
        description: 'The customer-facing name of the discount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount_application#title)\n\n'
      },
      value: {
        type: 'number',
        description: "The value of the discount. How this value is interpreted depends on the [value type](https://shopify.dev/docs/api/liquid/objects/discount_application#discount_application-value_type) of the\ndiscount. The following table outlines what the value represents for each value type:\n\n| Value type | Value |\n| --- | --- |\n| `fixed_amount` | The amount of the discount in the currency's subunit. |\n| `percentage` | The percent amount of the discount. |\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount_application#value)\n\n"
      },
      target_selection: {
        type: 'string',
        description: "The selection method for line items or shipping lines to be discounted. \n\n**Note**\n\n> Whether the selection method applies to line items or shipping lines depends on the discount's\n> [target type](https://shopify.dev/docs/api/liquid/objects/discount_application#discount_application-target_type).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount_application#target_selection)\n\n",
        literal: [
          'all',
          'entitled',
          'explicit'
        ]
      },
      type: {
        type: 'string',
        description: 'The type of the discount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount_application#type)\n\n',
        literal: [
          'automatic',
          'discount_code',
          'manual',
          'script'
        ]
      },
      value_type: {
        type: 'string',
        description: 'The value type of the discount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount_application#value_type)\n\n',
        literal: [
          'fixed_amount',
          'percentage'
        ]
      },
      target_type: {
        type: 'string',
        description: 'The type of item that the discount applies to.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/discount_application#target_type)\n\n',
        literal: [
          'line_item',
          'shipping_line'
        ]
      }
    }
  },
  external_video: {
    summary: 'Information about an external video from YouTube or Vimeo.',
    description: 'Information about an external video from YouTube or Vimeo. \n\n**Tip**\n\n> Use the [`external_video_tag` filter](https://shopify.dev/docs/api/liquid/filters/external_video_tag) to output the video in an\n> HTML `<iframe>` tag. Use the [`external_video_url` filter](https://shopify.dev/docs/api/liquid/filters/external_video_url) to specify parameters\n> for the external video player.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/external_video)\n\n',
    type: 'object',
    properties: {
      external_id: {
        type: 'string',
        description: 'The ID of the video from its external source.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/external_video#external_id)\n\n'
      },
      aspect_ratio: {
        type: 'number',
        description: 'The aspect ratio of the video as a decimal.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/external_video#aspect_ratio)\n\n'
      },
      host: {
        type: 'string',
        description: 'The service that hosts the video.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/external_video#host)\n\n',
        literal: [
          'youtube',
          'vimeo'
        ]
      },
      alt: {
        type: 'string',
        description: 'The alt text of the external video.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/external_video#alt)\n\n'
      },
      id: {
        type: 'number',
        description: 'The ID of the external video.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/external_video#id)\n\n'
      },
      media_type: {
        type: 'string',
        description: "The media type of the external video. Always returns `external_video`.\n\n#### Example\n\nYou can use the `media_type` property with the [`where` filter](/docs/api/liquid/filters/where) to filter the [`product.media` array](/docs/api/liquid/objects/product#product-media) for all media of a desired type.\n\n\n```liquid\n\n{% assign external_videos = product.media | where: 'media_type', 'external_video' %}\n\n{% for external_video in external_videos %}\n  {{- external_video | external_video_tag }}\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/external_video#media_type)\n\n"
      },
      position: {
        type: 'number',
        description: 'The position of the external video in the [`product.media`](/docs/api/liquid/objects/product#product-media) array.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/external_video#position)\n\n'
      },
      preview_image: {
        type: 'object',
        description: "A preview image of the media. \n\n**Note**\n\n> Preview images don't have an ID attribute.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/external_video#preview_image)\n\n",
        scope: 'image'
      }
    }
  },
  filter: {
    summary: 'A [storefront filter](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).',
    description: 'A [storefront filter](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters). To learn about supporting filters in your theme, refer to [Support storefront filtering](/themes/navigation-search/filtering/storefront-filtering/support-storefront-filtering).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter)\n\n',
    type: 'object',
    properties: {
      param_name: {
        type: 'string',
        description: 'The URL parameter for the filter. For example, `filter.v.option.color`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter#param_name)\n\n'
      },
      label: {
        type: 'string',
        description: 'The customer-facing label for the filter.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter#label)\n\n'
      },
      type: {
        type: 'string',
        description: 'The type of the filter.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter#type)\n\n',
        literal: [
          'boolean',
          'list',
          'price_range'
        ]
      },
      active_values: {
        type: 'array',
        description: 'The values of the filter that are currently active.\n\nThe array can have values only for `boolean` and `list` type filters.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter#active_values)\n\n',
        scope: 'filter_value'
      },
      inactive_values: {
        type: 'array',
        description: 'The values of the filter that are currently inactive. The array can have values only for `boolean` and `list` type filters.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter#inactive_values)\n\n',
        scope: 'filter_value'
      },
      values: {
        type: 'array',
        description: 'The values of the filter.\n\nThe array can have values only for `boolean` and `list` type filters.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter#values)\n\n',
        scope: 'filter_value'
      },
      false_value: {
        type: 'object',
        description: 'The `false` filter value.\n\nReturns a value only for `boolean` type filters. Returns `nil` for other types.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter#false_value)\n\n',
        scope: 'filter_value'
      },
      true_value: {
        type: 'object',
        description: 'The `true` filter value.\n\nReturns a value only for `boolean` type filters. Returns `nil` for other types.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter#true_value)\n\n',
        scope: 'filter_value'
      },
      max_value: {
        type: 'object',
        description: 'The highest filter value.\n\nReturns a value only for `price_range` type filters. Returns `nil` for other types.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter#max_value)\n\n',
        scope: 'filter_value'
      },
      min_value: {
        type: 'object',
        description: 'The lowest filter value.\n\nReturns a value only for `price_range` type filters. Returns `nil` for other types.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter#min_value)\n\n',
        scope: 'filter_value'
      },
      range_max: {
        type: 'number',
        description: 'The highest product price within the collection or search results.\n\nReturns a value only for `price_range` type filters. Returns `nil` for other types.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter#range_max)\n\n'
      },
      url_to_remove: {
        type: 'string',
        description: 'The current page URL with the URL parameter related to the filter removed.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter#url_to_remove)\n\n'
      }
    }
  },
  filter_value: {
    summary: 'A specific value of a filter.',
    description: 'A specific value of a filter. To learn about supporting filters in your theme, refer to [Support storefront filtering](/themes/navigation-search/filtering/storefront-filtering/support-storefront-filtering).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter_value)\n\n',
    type: 'object',
    properties: {
      param_name: {
        type: 'string',
        description: "The URL parameter for the parent filter of the filter value. For example, `filter.v.option.color`.\n\nFilters of type `price_range` include an extra component depending on whether the filter value is for the filter's\n`min_value` or `max_value`. The following table outlines the URL parameter for each:\n\n| Value type | URL parameter |\n| --- | --- |\n| `min_value` | `filter.v.price.lte` |\n| `max_value` | `filter.v.price.gte` |\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter_value#param_name)\n\n"
      },
      value: {
        type: 'string',
        description: 'The value.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter_value#value)\n\n'
      },
      active: {
        type: 'boolean',
        description: 'Returns `true` if the value is currently active. Returns `false` if not.\n\nCan only return `true` for filters of type `boolean` or `list`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter_value#active)\n\n'
      },
      count: {
        type: 'number',
        description: 'The number of results related to the filter value.\n\nReturns a value only for `boolean` and `list` type filters. Returns `nil` for `price_range` type filters.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter_value#count)\n\n'
      },
      label: {
        type: 'string',
        description: 'The customer-facing label for the filter value. For example, `Red` or `Rouge`.\n\nReturns a value only for `boolean` and `list` type filters. Returns `nil` for `price_range` type filters.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter_value#label)\n\n'
      },
      url_to_add: {
        type: 'string',
        description: 'The current page URL with the filter value parameter added.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter_value#url_to_add)\n\n'
      },
      url_to_remove: {
        type: 'string',
        description: 'The current page URL with the filter value parameter removed.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/filter_value#url_to_remove)\n\n'
      }
    }
  },
  focal_point: {
    summary: 'The focal point for an image.',
    description: "The focal point for an image. The focal point will remain visible when the image is cropped by the\ntheme. [Learn more about supporting focal points in your theme](https://shopify.dev/themes/architecture/settings/input-settings#image-focal-points).\n\n\n\n**Tip**\n\n> Use the [`image_tag`](https://shopify.dev/docs/api/liquid/filters/image_tag) filter to automatically apply focal point settings to an\n> image on the storefront. This applies the focal point using the `object-position` CSS property.\n\n#### Example\n\nWhen a `focal_point` object is referenced directly, the coordinates are returned as a string, in the format `X% Y%`.\n\n\n```liquid\n\n{{ images['potions-header.png'].presentation.focal_point }}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/focal_point)\n\n",
    type: 'object',
    properties: {
      x: {
        type: 'number',
        description: 'The horizontal position of the focal point, as a percent of the image width. Returns `50` if no focal point is set.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/focal_point#x)\n\n'
      },
      y: {
        type: 'number',
        description: 'The vertical position of the focal point, as a percent of the image height. Returns `50` if no focal point is set.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/focal_point#y)\n\n'
      }
    }
  },
  font: {
    summary: 'A font from a [`font_picker` setting](/themes/architecture/settings/input-settings#font_picker).',
    description: 'A font from a [`font_picker` setting](/themes/architecture/settings/input-settings#font_picker). You can use the `font` object in Liquid [assets](/themes/architecture#assets) or inside a [`style` tag](https://shopify.dev/docs/api/liquid/tags/style)\nto apply font setting values to theme CSS.\n\n\n\n**Tip**\n\n> Use [font filters](https://shopify.dev/docs/api/liquid/filters/font-filters) to modify properties of the `font` object, load the font,\n> or obtain font variants.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/font)\n\n',
    type: 'object',
    properties: {
      family: {
        type: 'string',
        description: 'The family name of the font.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/font#family)\n\n'
      },
      fallback_families: {
        type: 'string',
        description: 'The fallback families of the font.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/font#fallback_families)\n\n'
      },
      baseline_ratio: {
        type: 'number',
        description: 'The baseline ratio of the font as a decimal.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/font#baseline_ratio)\n\n'
      },
      weight: {
        type: 'number',
        description: 'The weight of the font.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/font#weight)\n\n'
      },
      style: {
        type: 'string',
        description: 'The style of the font.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/font#style)\n\n'
      },
      variants: {
        type: 'array',
        description: 'The variants in the family of the font.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/font#variants)\n\n',
        scope: 'font'
      },
      'system?': {
        type: 'boolean',
        description: 'Returns `true` if the font is a system font. Returns `false` if not. \n\n**Tip**\n\n> You can use this property to determine whether you need to include a corresponding [font-face](https://shopify.dev/docs/api/liquid/filters/font_face)\n> declaration for the font.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/font#system?)\n\n'
      }
    }
  },
  form: {
    summary: 'Information about a form created by a [`form` tag](/docs/api/liquid/tags/form).',
    description: 'Information about a form created by a [`form` tag](/docs/api/liquid/tags/form).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form)\n\n',
    type: 'object',
    properties: {
      errors: {
        type: 'object',
        description: 'Any errors from the form. If there are no errors, then `nil` is returned.\n\n\n\n**Tip**\n\n> You can apply the [`default_errors` filter](https://shopify.dev/docs/api/liquid/filters/default_errors) to `form.errors` to output default\n> error messages without having to loop through the array.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#errors)\n\n',
        scope: 'form_errors'
      },
      address1: {
        type: 'string',
        description: 'The first address line associated with the address. This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#address1)\n\n'
      },
      address2: {
        type: 'string',
        description: 'The second address line associated with the address. This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#address2)\n\n'
      },
      author: {
        type: 'string',
        description: 'The name of the author of the article comment. This property is exclusive to the [`new_comment` form](https://shopify.dev/docs/api/liquid/tags/form#form-new_comment).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#author)\n\n'
      },
      body: {
        type: 'string',
        description: 'The content of the contact submission or article comment. This property is exclusive to the [`contact`](https://shopify.dev/docs/api/liquid/tags/form#form-contact) and [`new_comment`](/docs/api/liquid/tags/form#form-new_comment)\nforms.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#body)\n\n'
      },
      city: {
        type: 'string',
        description: 'The city associated with the address. This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#city)\n\n'
      },
      company: {
        type: 'string',
        description: 'The company associated with the address. This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#company)\n\n'
      },
      country: {
        type: 'string',
        description: 'The country associated with the address. This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#country)\n\n'
      },
      email: {
        type: 'string',
        description: 'The email associated with the form. This property is exclusive to the following forms:\n\n- [`contact`](https://shopify.dev/docs/api/liquid/tags/form#form-contact)\n- [`create_customer`](https://shopify.dev/docs/api/liquid/tags/form#form-create_customer)\n- [`customer`](https://shopify.dev/docs/api/liquid/tags/form#form-customer)\n- [`customer_login`](https://shopify.dev/docs/api/liquid/tags/form#form-customer_login)\n- [`new_comment`](https://shopify.dev/docs/api/liquid/tags/form#form-new_comment)\n- [`recover_customer_password`](https://shopify.dev/docs/api/liquid/tags/form#form-recover_customer_password)\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#email)\n\n'
      },
      first_name: {
        type: 'string',
        description: 'The first name associated with the customer or address. This property is exclusive to the [`create_customer`](https://shopify.dev/docs/api/liquid/tags/form#form-create_customer) and\n[`customer_address`](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address) forms.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#first_name)\n\n'
      },
      id: {
        type: 'string',
        description: 'The ID of the form.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#id)\n\n'
      },
      last_name: {
        type: 'string',
        description: 'The last name associated with the customer or address. This property is exclusive to the [`create_customer`](https://shopify.dev/docs/api/liquid/tags/form#form-create_customer) and\n[`customer_address`](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address) forms.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#last_name)\n\n'
      },
      password_needed: {
        type: 'boolean',
        description: 'Returns `true`. This property is exclusive to the [`customer_login` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_login).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#password_needed)\n\n'
      },
      phone: {
        type: 'string',
        description: 'The phone number associated with the address. This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#phone)\n\n'
      },
      'posted_successfully?': {
        type: 'boolean',
        description: 'Returns `true` if the form was submitted successfully. Returns `false` if there were errors. \n\n**Note**\n\n> The [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address) always returns `true`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#posted_successfully?)\n\n'
      },
      province: {
        type: 'string',
        description: 'The province associated with the address. This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#province)\n\n'
      },
      set_as_default_checkbox: {
        type: 'string',
        description: "Renders an HTML checkbox that can submit the address as the customer's default address. This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#set_as_default_checkbox)\n\n"
      },
      zip: {
        type: 'string',
        description: 'The zip or postal code associated with the address. This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form#zip)\n\n'
      }
    }
  },
  fulfillment: {
    summary: 'An order [fulfillment](https://help.shopify.com/manual/orders/fulfillment), which includes information like the line items\nbeing fulfilled and shipment tracking.',
    description: 'An order [fulfillment](https://help.shopify.com/manual/orders/fulfillment), which includes information like the line items\nbeing fulfilled and shipment tracking.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/fulfillment)\n\n',
    type: 'object',
    properties: {
      created_at: {
        type: 'string',
        description: 'A timestamp for when the fulfillment was created. \n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/fulfillment#created_at)\n\n'
      },
      item_count: {
        type: 'number',
        description: 'The number of items in the fulfillment.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/fulfillment#item_count)\n\n'
      },
      fulfillment_line_items: {
        type: 'array',
        description: 'The line items in the fulfillment.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/fulfillment#fulfillment_line_items)\n\n',
        scope: 'line_item'
      },
      tracking_company: {
        type: 'string',
        description: 'The name of the fulfillment service.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/fulfillment#tracking_company)\n\n'
      },
      tracking_number: {
        type: 'string',
        description: "The fulfillment's tracking number. If there's no tracking number, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/fulfillment#tracking_number)\n\n"
      },
      tracking_url: {
        type: 'string',
        description: "The URL for the fulfillment's tracking number. If there's no tracking number, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/fulfillment#tracking_url)\n\n"
      }
    }
  },
  generic_file: {
    summary: 'A file from a `file_reference` type [metafield](/docs/api/liquid/objects/metafield) that is neither an image or video.',
    description: 'A file from a `file_reference` type [metafield](/docs/api/liquid/objects/metafield) that is neither an image or video. \n\n**Tip**\n\n> To learn about metafield types, refer to [Metafield types](/apps/metafields/types).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/generic_file)\n\n',
    type: 'object',
    properties: {
      url: {
        type: 'string',
        description: 'The [CDN URL](/themes/best-practices/performance/platform#shopify-cdn) for the file.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/generic_file#url)\n\n'
      },
      id: {
        type: 'number',
        description: 'The ID of the file.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/generic_file#id)\n\n'
      },
      media_type: {
        type: 'string',
        description: 'The media type of the model. Always returns `generic_file`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/generic_file#media_type)\n\n'
      },
      preview_image: {
        type: 'object',
        description: 'A preview image for the file.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/generic_file#preview_image)\n\n',
        scope: 'image'
      },
      position: {
        type: 'number',
        description: 'The position of the media in the [`product.media` array](/docs/api/liquid/objects/product#product-media). If the source is a [`file_reference` metafield](/apps/metafields/types), then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/generic_file#position)\n\n'
      },
      alt: {
        type: 'string',
        description: 'The alt text of the media.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/generic_file#alt)\n\n'
      }
    }
  },
  gift_card: {
    summary: "A [gift card](https://help.shopify.com/manual/products/gift-card-products) that's been issued to a customer or a recipient.",
    template: [
      'gift_card.liquid'
    ],
    description: "A [gift card](https://help.shopify.com/manual/products/gift-card-products) that's been issued to a customer or a recipient.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card)\n\n",
    type: 'object',
    properties: {
      balance: {
        type: 'number',
        description: "The remaining balance of the gift card in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#balance)\n\n"
      },
      code: {
        type: 'string',
        description: 'The code used to redeem the gift card.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#code)\n\n'
      },
      currency: {
        type: 'string',
        description: 'The [ISO code](https://www.iso.org/iso-4217-currency-codes.html) of the currency that the gift card was issued in.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#currency)\n\n'
      },
      customer: {
        type: 'object',
        description: 'The customer associated with the gift card.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#customer)\n\n',
        scope: 'customer'
      },
      recipient: {
        type: 'object',
        description: 'The recipient associated with the gift card. If there is no recipient associated with the gift card, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#recipient)\n\n',
        scope: 'recipient'
      },
      message: {
        type: 'string',
        description: 'The personalized message intended for the recipient. If there is no message intended for the recipient, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#message)\n\n'
      },
      enabled: {
        type: 'boolean',
        description: 'Returns `true` if the gift card is enabled. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#enabled)\n\n'
      },
      expired: {
        type: 'boolean',
        description: 'Returns `true` if the gift card is expired. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#expired)\n\n'
      },
      expires_on: {
        type: 'string',
        description: 'A timestamp for when the gift card expires. If the gift card never expires, then `nil` is returned.\n\n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#expires_on)\n\n'
      },
      initial_value: {
        type: 'number',
        description: "The initial balance of the gift card in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#initial_value)\n\n"
      },
      url: {
        type: 'string',
        description: 'The URL to view the gift card. This URL is on the `checkout.shopify.com` domain. \n\n**Tip**\n\n> The page at this URL is rendered through the [`gift_card.liquid` template](/themes/architecture/templates/gift-card-liquid)\n> of the theme.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#url)\n\n'
      },
      template_suffix: {
        type: 'string',
        description: "The name of the [custom template](/themes/architecture/templates#alternate-templates) assigned to the gift card. The name doesn't include the `gift_card.` prefix, or the `.liquid` file extension.\n\n If a custom template isn't assigned to the gift card, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#template_suffix)\n\n"
      },
      properties: {
        type: 'array',
        description: "The [line item properties](/docs/api/liquid/objects/line_item#line_item-properties) assigned to the gift card. If there aren't any line item properties, then an [`EmptyDrop`](https://shopify.dev/docs/api/liquid/basics#emptydrop) is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#properties)\n\n",
        scope: 'untyped'
      },
      qr_identifier: {
        type: 'string',
        description: 'A string used to generate a QR code for the gift card.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#qr_identifier)\n\n'
      },
      pass_url: {
        type: 'string',
        description: 'The URL to download the gift card as an Apple Wallet Pass.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#pass_url)\n\n'
      },
      product: {
        type: 'object',
        description: 'The product associated with the gift card.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#product)\n\n',
        scope: 'product'
      },
      last_four_characters: {
        type: 'string',
        description: 'The last 4 characters of the code used to redeem the gift card.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/gift_card#last_four_characters)\n\n'
      }
    }
  },
  image: {
    summary: 'An image, such as a product or collection image.',
    description: "An image, such as a product or collection image. To learn about the image formats that Shopify supports, visit the [Shopify Help Center](https://help.shopify.com/manual/online-store/images/theme-images#image-formats).\n\n\n\n**Tip**\n\n> Use the [`image_url`](https://shopify.dev/docs/api/liquid/filters/image_url) and [`image_tag`](/docs/api/liquid/filters/image_tag) filters to display\n> images on the storefront.\n\n#### Example\n\nWhen an `image` object is referenced directly, the image's relative URL path is returned.\n\n\n```liquid\n\n{{ product.featured_image }}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image)\n\n",
    type: 'object',
    scope: 'image',
    properties: {
      presentation: {
        type: 'object',
        description: 'The presentation settings for the image.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image#presentation)\n\n',
        scope: 'image_presentation'
      },
      src: {
        type: 'string',
        description: 'The relative URL of the image.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image#src)\n\n'
      },
      width: {
        type: 'number',
        description: 'The width of the image in pixels.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image#width)\n\n'
      },
      height: {
        type: 'number',
        description: 'The height of the image in pixels.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image#height)\n\n'
      },
      aspect_ratio: {
        type: 'number',
        description: 'The aspect ratio of the image as a decimal.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image#aspect_ratio)\n\n'
      },
      alt: {
        type: 'string',
        description: 'The alt text of the image.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image#alt)\n\n'
      },
      'attached_to_variant?': {
        type: 'boolean',
        description: 'Returns `true` if the image is associated with a variant. Returns `false` if not. The `attached_to_variant?` property is only available for images accessed through the following sources:\n\n- [`product.featured_image`](https://shopify.dev/docs/api/liquid/objects/product#product-featured_image)\n- [`product.images`](https://shopify.dev/docs/api/liquid/objects/product#product-images)\n\nIf you reference this property on an image from another source, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image#attached_to_variant?)\n\n'
      },
      id: {
        type: 'number',
        description: 'The ID of the image. If you reference the `id` property for preview images of [`generic_file`](https://shopify.dev/docs/api/liquid/objects/generic_file) or\n[`media`](https://shopify.dev/docs/api/liquid/objects/media) objects, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image#id)\n\n'
      },
      media_type: {
        type: 'string',
        description: "The media type of the image. Always returns `image`. The `media_type` property is only available for images accessed through the following sources:\n\n- [`product.media`](https://shopify.dev/docs/api/liquid/objects/product#product-media)\n- [`file_reference` type metafields](/apps/metafields/types#supported-types)\n\nIf you reference this property on an image from another source, then `nil` is returned.\n\n#### Example\n\nYou can use the `media_type` property with the [`where` filter](/docs/api/liquid/filters/where) to filter the [`product.media` array](/docs/api/liquid/objects/product#product-media) for all media of a desired type.\n\n\n```liquid\n\n{% assign images = product.media | where: 'media_type', 'image' %}\n\n{% for image in images %}\n  {{- image | image_url: width: 300 | image_tag }}\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image#media_type)\n\n"
      },
      position: {
        type: 'number',
        description: 'The position of the image in the [`product.images`](/docs/api/liquid/objects/product#product-images) or [`product.media`](/docs/api/liquid/objects/product#product-media)\narray. The `position` property is only available for images that are associated with a product. If you reference this property\non an image from another source, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image#position)\n\n'
      },
      preview_image: {
        type: 'object',
        description: 'A preview image for the image. The `preview_image` property is only available for images accessed through the following sources:\n\n- [`product.featured_media`](https://shopify.dev/docs/api/liquid/objects/product#product-featured_media)\n- [`product.media`](https://shopify.dev/docs/api/liquid/objects/product#product-media)\n- [`file_reference` type metafields](/apps/metafields/types#supported-types)\n\nIf you reference this property on an image from another source, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image#preview_image)\n\n',
        scope: 'image'
      },
      product_id: {
        type: 'number',
        description: 'The ID of the product that the image is associated with. The `product_id` property is only available for images associated with a product. If you reference this property on\nan image from another source, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image#product_id)\n\n'
      },
      variants: {
        type: 'array',
        description: 'The product variants that the image is associated with. The `variants` property is only available for images accessed through the following sources:\n\n- [`product.featured_image`](https://shopify.dev/docs/api/liquid/objects#product-featured_image)\n- [`product.images`](https://shopify.dev/docs/api/liquid/objects/product#product-images)\n\nIf you reference this property on an image from another source, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image#variants)\n\n',
        scope: 'variant'
      }
    }
  },
  image_presentation: {
    summary: 'The presentation settings for an image.',
    description: 'The presentation settings for an image.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image_presentation)\n\n',
    type: 'object',
    properties: {
      focal_point: {
        type: 'object',
        description: 'The focal point for the image.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/image_presentation#focal_point)\n\n',
        scope: 'focal_point'
      }
    }
  },
  images: {
    summary: 'All of the [images](/docs/api/liquid/objects/image) that have been [uploaded](https://help.shopify.com/manual/online-store/images/theme-images#upload-images)\nto a store.',
    global: true,
    description: "All of the [images](/docs/api/liquid/objects/image) that have been [uploaded](https://help.shopify.com/manual/online-store/images/theme-images#upload-images)\nto a store.\n\n#### \n\nYou can access images from the `images` array by their filename.\n\n\n```liquid\n\n{{ images['potions-header.png'] | image_url: width: 300 | image_tag }}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/images)\n\n",
    type: 'array',
    scope: 'image'
  },
  line_item: {
    summary: 'A line in a cart, checkout, or order. Each line item represents a product variant.',
    description: 'A line in a cart, checkout, or order. Each line item represents a product variant.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: "The ID of the line item. The ID differs depending on the context. The following table outlines the possible contexts and their associated values:\n\n| Context | Value |\n| --- | --- |\n| [`cart.items`](https://shopify.dev/docs/api/liquid/objects/cart#cart-items) | The ID of the line item's variant.<br><br>This ID isn't unique, and can be shared by multiple items with the same variant. |\n| [`checkout.line_items`](https://shopify.dev/docs/api/liquid/objects/checkout#checkout-line_items) | A temporary unique hash generated for the checkout. |\n| [`order.line_items`](https://shopify.dev/docs/api/liquid/objects/order#order-line_items) | A unique integer ID. |\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#id)\n\n"
      },
      quantity: {
        type: 'number',
        description: 'The quantity of the line item.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#quantity)\n\n'
      },
      price: {
        type: 'number',
        description: "⚠️ **DEPRECATED** ⚠️\n\nDeprecated because discounts from automatic discounts and discount codes aren't included.\n\nThe `line_item.price` property has been replaced by [`line_item.final_price`](/docs/api/liquid/objects/line_item#line_item-final_price).\n\n---\n\nThe price of the line item in the currency's subunit. This includes any discounts from [Shopify Scripts](https://help.shopify.com/manual/checkout-settings/script-editor). The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#price)\n\n"
      },
      line_price: {
        type: 'number',
        description: "⚠️ **DEPRECATED** ⚠️\n\nDeprecated because discounts from automatic discounts and discount codes aren't included.\n\nThe `line_item.line_price` property has been replaced by [`line_item.final_line_price`](/docs/api/liquid/objects/line_item#line_item-final_line_price).\n\n---\n\nThe combined price, in the currency's subunit, of all of the items in a line item. This includes any discounts from [Shopify Scripts](https://help.shopify.com/manual/checkout-settings/script-editor). The value is equal to `line_item.price` multiplied by `line_item.quantity`. It's output in the customer's local\n(presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#line_price)\n\n"
      },
      total_discount: {
        type: 'number',
        description: "⚠️ **DEPRECATED** ⚠️\n\nDeprecated because discounts from automatic discounts and discount codes aren't included.\n\nThe `line_item.total_discount` property has been replaced by [`line_item.line_level_total_discount`](/docs/api/liquid/objects/line_item#line_item-line_level_total_discount).\n\n---\n\nThe total amount, in the currency's subunit, of any discounts applied to the line item by [Shopify Scripts](https://help.shopify.com/manual/checkout-settings/script-editor). The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#total_discount)\n\n"
      },
      discount_allocations: {
        type: 'array',
        description: 'The discount allocations that apply to the line item.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#discount_allocations)\n\n',
        scope: 'discount_allocation'
      },
      final_price: {
        type: 'number',
        description: "The price of the line item in the currency's subunit. This includes any line-level discounts. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#final_price)\n\n"
      },
      final_line_price: {
        type: 'number',
        description: "The combined price, in the currency's subunit, of all of the items in the line item. This includes any line-level discounts. The value is equal to `line_item.final_price` multiplied by `line_item.quantity`. It's output in the customer's local\n(presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#final_line_price)\n\n"
      },
      variant_id: {
        type: 'number',
        description: "The [ID](/docs/api/liquid/objects/variant#variant-id) of the line item's variant.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#variant_id)\n\n"
      },
      product_id: {
        type: 'number',
        description: "The [ID](/docs/api/liquid/objects/product#product-id) of the line item's product.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#product_id)\n\n"
      },
      product: {
        type: 'object',
        description: 'The product associated with the line item.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#product)\n\n',
        scope: 'product'
      },
      variant: {
        type: 'object',
        description: 'The variant associated with the line item.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#variant)\n\n',
        scope: 'variant'
      },
      tax_lines: {
        type: 'array',
        description: 'The tax lines for the line item.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#tax_lines)\n\n',
        scope: 'tax_line'
      },
      fulfillment: {
        type: 'object',
        description: 'The fulfillment of the line item.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#fulfillment)\n\n',
        scope: 'fulfillment'
      },
      successfully_fulfilled_quantity: {
        type: 'number',
        description: 'The number of items from the line item that have been successfully fulfilled.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#successfully_fulfilled_quantity)\n\n'
      },
      fulfillment_service: {
        type: 'string',
        description: "The [fulfillment service](https://help.shopify.com/manual/shipping/understanding-shipping/dropshipping-and-fulfillment-services)\nfor the vartiant associated with the line item. If there's no fulfillment service, then `manual` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#fulfillment_service)\n\n"
      },
      properties: {
        type: 'array',
        description: "The properties of the line item. You can add, or allow customers to add, custom information to a line item with line item properties.\n\nLine item properties consist of a name and value pair. They can be captured with the following methods:\n\n- [A custom input inside a product form](/themes/architecture/templates/product#line-item-properties)\n- [The AJAX Cart API](/api/ajax/reference/cart#add-line-item-properties)\n\n\n\n**Tip**\n\n> To learn about how to display captured properties, refer to [Display line item properties](/themes/architecture/templates/cart#display-line-item-properties).\n\n#### Example\n\nTo capture line item properties inside the [product form](/docs/api/liquid/tags/form#form-product), you need to include an input, for each property. Each  input needs a unique `name` attribute. Use the following format:\n\n```\nname=\"properties[property-name]\"\n```\n\nThe value of the input is captured as the value of the property.\n\nFor example, you can use the following code to capture custom engraving text for a product:\n\n```liquid\n{% form 'product', product %}\n  ...\n  <label for=\"engravingText\">Engraving<label>\n  <input type=\"text\" id=\"engravingText\" name=\"properties[Engraving]\">\n  ...\n{% endform %}\n```\n\n> Tip:\n> You can add an underscore to the beginning of a property name to hide it from customers at checkout. For example,\n> `properties[_hiddenPropertyName]`.\n\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#properties)\n\n",
        scope: 'untyped'
      },
      unit_price_measurement: {
        type: 'object',
        description: 'The unit price measurement of the line item. \n\n**Note**\n\n> Unit prices are available only to stores located in Germany or France.\n\nTo learn about how to display unit prices in your theme, refer to [Unit pricing](/themes/pricing-payments/unit-pricing).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#unit_price_measurement)\n\n',
        scope: 'unit_price_measurement'
      },
      unit_price: {
        type: 'number',
        description: "The [unit price](https://help.shopify.com/manual/intro-to-shopify/initial-setup/sell-in-france/price-per-unit#add-unit-prices-to-your-product)\n of the line item in the currency's subunit. The price reflects any discounts that are applied to the line item. The value is output in the customer's local\n(presentment) currency.\n\n\n\n**Note**\n\n> Unit prices are available only to stores located in Germany and France.\n\nTo learn about how to display unit prices in your theme, refer to [Unit pricing](/themes/pricing-payments/unit-pricing).\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#unit_price)\n\n"
      },
      sku: {
        type: 'string',
        description: 'The [sku](/docs/api/liquid/objects/variant#variant-sku) of the variant associated with the line item.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#sku)\n\n'
      },
      message: {
        type: 'string',
        description: "Information about the discounts that have affected the line item. The following table outlines what's returned depending on the number of discounts affecting the line item:\n\n| Number of discounts | Value |\n| --- | --- |\n| 0 | `nil` |\n| 1 | The [title](https://shopify.dev/docs/api/liquid/objects/discount_application#discount_application-title) of the discount. |\n| More than 1 | A Shopify generated string noting how many discounts have been applied. |\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#message)\n\n"
      },
      vendor: {
        type: 'string',
        description: 'The vendor of the variant associated with the line item.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#vendor)\n\n'
      },
      title: {
        type: 'string',
        description: "The title of the line item. The title is a combination of `line_item.product.title` and `line_item.variant.title`, separated\nby a hyphen. In most contexts, the line item title appears in the customer's preferred language. However, in the context of an\n[order](https://shopify.dev/docs/api/liquid/objects/order), the line item title appears in the language that the customer checked out in.\n\n#### Line item title history\n\nWhen referencing line item, product, and variant titles in the context of an order, the following changes might result\nin a different output than you expect:\n\n- A product or variant being deleted\n- A product or variant title being edited\n\nWhen `line_item.title` is referenced for an order, the line item title at the time of the order is returned.\nHowever, when `line_item.product.title` and `line_item.variant.title` are referenced, the current value for\neach title is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#title)\n\n"
      },
      taxable: {
        type: 'boolean',
        description: 'Returns `true` if taxes should be charged on the line item. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#taxable)\n\n'
      },
      original_price: {
        type: 'number',
        description: "The price of the line item in the currency's subunit, before discounts have been applied. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#original_price)\n\n"
      },
      original_line_price: {
        type: 'number',
        description: "The combined price of all of the items in a line item in the currency's subunit, before any discounts have been applied. The value is equal to `line_item.original_price` multiplied by `line_item.quantity`. It's output in the customer's local\n(presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#original_line_price)\n\n"
      },
      line_level_total_discount: {
        type: 'number',
        description: "The total amount of any discounts applied to the line item in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#line_level_total_discount)\n\n"
      },
      line_level_discount_allocations: {
        type: 'array',
        description: 'The discount allocations that apply directly to the line item.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#line_level_discount_allocations)\n\n',
        scope: 'discount_allocation'
      },
      discounts: {
        type: 'array',
        description: '⚠️ **DEPRECATED** ⚠️\n\nDeprecated because not all discount types and details are available.\n\nThe `line_item.discounts` property has been replaced by [`line_item.discount_allocations`](/docs/api/liquid/objects/line_item#line_item-discount_allocations).\n\n---\n\nThe discounts applied to the line item.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#discounts)\n\n',
        scope: 'discount'
      },
      gift_card: {
        type: 'boolean',
        description: 'Returns `true` if the product associated with the line item is a gift card. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#gift_card)\n\n'
      },
      requires_shipping: {
        type: 'boolean',
        description: 'Returns `true` if the variant associated with the line item requires shipping. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#requires_shipping)\n\n'
      },
      options_with_values: {
        type: 'array',
        description: "The name and value pairs for each option of the variant associated with the line item. \n\n**Note**\n\n> The array is never empty because variants with no options still have a default option. Because of this, you should use\n> `line_item.product.has_only_default_variant` to check whether there's any information to output.\n\n#### Example\n\n```liquid\n\n{% for item in cart.items %}\n<div class=\"cart__item\">\n  <p class=\"cart__item-title\">\n    {{ item.title }}\n  </p>\n\n  {%- unless item.product.has_only_default_variant %}\n  <ul>\n    {% for option in item.options_with_values -%}\n    <li>{{ option.name }}: {{ option.value }}</li>\n    {%- endfor %}\n  </ul>\n  {% endunless %}\n</div>\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#options_with_values)\n\n",
        scope: 'untyped'
      },
      key: {
        type: 'string',
        description: 'The key of the line item. Line item keys are unique identifiers that consist of the following components separated by a colon:\n\n- The ID of the variant associated with the line item\n- A hash of the properties of the line item, even if there are no properties\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#key)\n\n'
      },
      grams: {
        type: 'number',
        description: "The weight of the line item in the store's [default weight unit](https://help.shopify.com/manual/intro-to-shopify/initial-setup/setup-business-settings#set-or-change-your-stores-default-weight-unit). \n\n**Tip**\n\n> Use this property with the [`weight_with_unit` filter](https://shopify.dev/docs/api/liquid/filters/weight_with_unit) to format the weight.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#grams)\n\n"
      },
      url: {
        type: 'string',
        description: 'The relative URL of the variant associated with the line item.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#url)\n\n'
      },
      url_to_remove: {
        type: 'string',
        description: 'A URL to remove the line item from the cart. \n\n**Tip**\n\n> To learn more about how to use this property in your theme, refer to [Remove line items from the cart](/themes/architecture/templates/cart#remove-line-items-from-the-cart).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#url_to_remove)\n\n'
      },
      image: {
        type: 'object',
        description: "The image of the line item. The image can come from one of the following sources:\n\n- The image of the variant associated with the line item\n- The featured image of the product associated with the line item, if there's no variant image\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#image)\n\n",
        scope: 'image'
      },
      selling_plan_allocation: {
        type: 'object',
        description: "The selling plan allocation of the line item. If the line item doesn't have a selling plan allocation, then `nil` is returned. #### Availability of selling plan information\n\nThe following properties aren't available when referencing selling plan information through an\n[order's line items](https://shopify.dev/docs/api/liquid/objects/order#order-line_items):\n\n- [`selling_plan_allocation.compare_at_price`](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#selling_plan_allocation-compare_at_price)\n- [`selling_plan_allocation.price_adjustments`](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#selling_plan_allocation-price_adjustments)\n- [`selling_plan_allocation.selling_plan.group_id`](https://shopify.dev/docs/api/liquid/objects/selling_plan#selling_plan-group_id)\n- [`selling_plan_allocation.selling_plan.options`](https://shopify.dev/docs/api/liquid/objects/selling_plan#selling_plan-options)\n- [`selling_plan_allocation.selling_plan.price_adjustments`](https://shopify.dev/docs/api/liquid/objects/selling_plan#selling_plan-price_adjustments)\n- [`selling_plan_allocation.selling_plan_group_id`](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#selling_plan_allocation-selling_plan_group_id)\n\n\n\n**Tip**\n\n> If you need to show selling plan information post-purchase, then you should use [`selling_plan.name`](https://shopify.dev/docs/api/liquid/objects/selling_plan#selling_plan-name).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/line_item#selling_plan_allocation)\n\n",
        scope: 'selling_plan_allocation'
      }
    }
  },
  link: {
    summary: 'A link in a [menu](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus).',
    description: 'A link in a [menu](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus). To learn about how to implement navigation in a theme, refer to [Add navigation to your theme](/themes/navigation-search/navigation).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/link)\n\n',
    type: 'object',
    properties: {
      active: {
        type: 'boolean',
        description: "Returns `true` if the link is active. Returns `false` if not. A link is considered to be active if the current URL path matches, or contains, the link's [url](https://shopify.dev/docs/api/liquid/objects/link#link-url).\nFor example, if the current URL path is `/blog/potion-notions/new-potions-for-spring`, then the following link URLs\nwould be considered active:\n\n- `/blog/potion-notions/new-potions-for-spring`\n- `/blog/potion-notions`\n\n\n\n**Tip**\n\n> The `link.active` property is useful for menu designs that highlight when top-level navigation categories are being\n> viewed. For example, if a customer is viewing an article from the \"Potion notions\" blog, then the \"Potion notions\" link\n> is highlighted in the menu.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/link#active)\n\n"
      },
      current: {
        type: 'boolean',
        description: 'Returns `true` if the current URL path matches the [URL](/docs/api/liquid/objects/link#link-url) of the link. Returns `false` if not. \n\n**Note**\n\n> URL parameters are ignored when determining a match.\n>\n> Product URLs [within the context of a collection](https://shopify.dev/docs/api/liquid/filters/within) are treated as equal to a standard product\n> URL for the same product.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/link#current)\n\n'
      },
      child_active: {
        type: 'boolean',
        description: "Returns `true` if a link's child link is active. Returns `false` if not. A link is considered to be active if the current URL path matches, or contains, the [URL](https://shopify.dev/docs/api/liquid/objects/link#link-url) of\nthe link.\n\nFor example, if the current URL path is `/blog/potion-notions/new-potions-for-spring`, then the following link URLs\nwould be considered active:\n\n- `/blog/potion-notions/new-potions-for-spring`\n- `/blog/potion-notions`\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/link#child_active)\n\n"
      },
      child_current: {
        type: 'boolean',
        description: "Returns `true` if current URL path matches a link's child link [URL](/docs/api/liquid/objects/link#link-url). Returns `false` if not. \n\n**Note**\n\n> URL parameters are ignored when determining a match.\n>\n> Product URLs [within the context of a collection](https://shopify.dev/docs/api/liquid/filters/within) and standard product URLs are treated\n> the same.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/link#child_current)\n\n"
      },
      handle: {
        type: 'string',
        description: 'The [handle](/docs/api/liquid/basics#handles) of the link.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/link#handle)\n\n'
      },
      links: {
        type: 'array',
        description: 'The child links of the link.\n\n#### Example\n\n```liquid\n\n{% for link in linklists.main-menu.links -%}\n  {% if link.links.size > 0 -%}\n    - {{ link.title }} ({{ link.links.size }} children)<br>\n  {%- else -%}\n    - {{ link.title }}<br>\n  {%- endif %}\n{%- endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/link#links)\n\n',
        scope: 'link'
      },
      object: {
        type: 'any',
        description: 'The object associated with the link. The object can be one of the following:\n\n- [`article`](https://shopify.dev/docs/api/liquid/objects/article)\n- [`blog`](https://shopify.dev/docs/api/liquid/objects/blog)\n- [`collection`](https://shopify.dev/docs/api/liquid/objects/collection)\n- [`page`](https://shopify.dev/docs/api/liquid/objects/page)\n- [`policy`](https://shopify.dev/docs/api/liquid/objects/policy)\n- [`product`](https://shopify.dev/docs/api/liquid/objects/product)\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/link#object)\n\n'
      },
      title: {
        type: 'string',
        description: 'The title of the link.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/link#title)\n\n'
      },
      type: {
        type: 'string',
        description: 'The type of the link.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/link#type)\n\n',
        literal: [
          'article_link',
          'blog_link',
          'catalog_link',
          'collection_link',
          'collections_link',
          'frontpage_link',
          'http_link',
          'page_link',
          'policy_link',
          'product_link',
          'search_link'
        ]
      },
      levels: {
        type: 'number',
        description: 'The number of nested levels under the link.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/link#levels)\n\n'
      },
      url: {
        type: 'string',
        description: 'The URL of the link.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/link#url)\n\n'
      }
    }
  },
  linklists: {
    summary: 'All of the [menus](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus) in a store.',
    global: true,
    description: "All of the [menus](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus) in a store.\n\n#### \n\nYou can access a specific menu through the `linklists` object using the menu's [handle](/docs/api/liquid/basics#handles).\n\n\n```liquid\n\n<!-- Main menu -->\n{% for link in linklists.main-menu.links -%}\n  {{ link.title | link_to: link.url }}\n{%- endfor %}\n\n<!-- Footer menu -->\n{% for link in linklists['footer'].links -%}\n  {{ link.title | link_to: link.url }}\n{%- endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/linklists)\n\n",
    type: 'array',
    scope: 'linklist'
  },
  linklist: {
    summary: 'A [menu](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus) in a store.',
    description: 'A [menu](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus) in a store. To learn about how to implement navigation in a theme, refer to [Add navigation to your theme](/themes/navigation-search/navigation).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/linklist)\n\n',
    type: 'object',
    properties: {
      links: {
        type: 'array',
        description: 'The links in the menu.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/linklist#links)\n\n',
        scope: 'link'
      },
      handle: {
        type: 'string',
        description: 'The [handle](/docs/api/liquid/basics#handles) of the menu.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/linklist#handle)\n\n'
      },
      levels: {
        type: 'number',
        description: "The number of nested levels in the menu. \n\n**Note**\n\n> There's a maximum of 3 levels.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/linklist#levels)\n\n"
      },
      title: {
        type: 'string',
        description: 'The title of the menu.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/linklist#title)\n\n'
      }
    }
  },
  forloop: {
    summary: 'Information about a parent [`for` loop](/docs/api/liquid/tags/for).',
    description: 'Information about a parent [`for` loop](/docs/api/liquid/tags/for).\n\n#### Example\n\n```liquid\n\n{% for page in pages -%}\n  {%- if forloop.length > 0 -%}\n    {{ page.title }}{% unless forloop.last %}, {% endunless -%}\n  {%- endif -%}\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/forloop)\n\n',
    type: 'object',
    properties: {
      length: {
        type: 'number',
        description: 'The total number of iterations in the loop.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/forloop#length)\n\n'
      },
      parentloop: {
        type: 'object',
        description: "The parent `forloop` object. If the current `for` loop isn't nested inside another `for` loop, then `nil` is returned.\n\n#### Example\n\n```liquid\n\n{% for i in (1..3) -%}\n  {% for j in (1..3) -%}\n    {{ forloop.parentloop.index }} - {{ forloop.index }}\n  {%- endfor %}\n{%- endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/forloop#parentloop)\n\n",
        scope: 'forloop'
      },
      index: {
        type: 'number',
        description: 'The 1-based index of the current iteration.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/forloop#index)\n\n'
      },
      index0: {
        type: 'number',
        description: 'The 0-based index of the current iteration.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/forloop#index0)\n\n'
      },
      rindex: {
        type: 'number',
        description: 'The 1-based index of the current iteration, in reverse order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/forloop#rindex)\n\n'
      },
      rindex0: {
        type: 'number',
        description: 'The 0-based index of the current iteration, in reverse order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/forloop#rindex0)\n\n'
      },
      first: {
        type: 'boolean',
        description: 'Returns `true` if the current iteration is the first. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/forloop#first)\n\n'
      },
      last: {
        type: 'boolean',
        description: 'Returns `true` if the current iteration is the last. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/forloop#last)\n\n'
      }
    }
  },
  tablerowloop: {
    summary: 'Information about a parent [`tablerow` loop](/docs/api/liquid/tags/tablerow).',
    description: 'Information about a parent [`tablerow` loop](/docs/api/liquid/tags/tablerow).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tablerowloop)\n\n',
    type: 'object',
    properties: {
      length: {
        type: 'number',
        description: 'The total number of iterations in the loop.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tablerowloop#length)\n\n'
      },
      col: {
        type: 'number',
        description: 'The 1-based index of the current column.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tablerowloop#col)\n\n'
      },
      row: {
        type: 'number',
        description: 'The 1-based index of current row.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tablerowloop#row)\n\n'
      },
      index: {
        type: 'number',
        description: 'The 1-based index of the current iteration.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tablerowloop#index)\n\n'
      },
      index0: {
        type: 'number',
        description: 'The 0-based index of the current iteration.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tablerowloop#index0)\n\n'
      },
      col0: {
        type: 'number',
        description: 'The 0-based index of the current column.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tablerowloop#col0)\n\n'
      },
      rindex: {
        type: 'number',
        description: 'The 1-based index of the current iteration, in reverse order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tablerowloop#rindex)\n\n'
      },
      rindex0: {
        type: 'number',
        description: 'The 0-based index of the current iteration, in reverse order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tablerowloop#rindex0)\n\n'
      },
      first: {
        type: 'boolean',
        description: 'Returns `true` if the current iteration is the first. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tablerowloop#first)\n\n'
      },
      last: {
        type: 'boolean',
        description: 'Returns `true` if the current iteration is the last. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tablerowloop#last)\n\n'
      },
      col_first: {
        type: 'boolean',
        description: 'Returns `true` if the current column is the first in the row. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tablerowloop#col_first)\n\n'
      },
      col_last: {
        type: 'boolean',
        description: 'Returns `true` if the current column is the last in the row. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tablerowloop#col_last)\n\n'
      }
    }
  },
  localization: {
    summary: 'Information about the countries and languages that are available on a store.',
    global: true,
    description: 'Information about the countries and languages that are available on a store. The `localization` object can be used in a [localization form](https://shopify.dev/docs/api/liquid/tags/form#form-localization).\n\nTo learn about how to offer localization options in your theme, refer to [Support multiple currencies and languages](/themes/internationalization/multiple-currencies-languages).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/localization)\n\n',
    type: 'object',
    properties: {
      available_countries: {
        type: 'array',
        description: 'The countries that are available on the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/localization#available_countries)\n\n',
        scope: 'country'
      },
      available_languages: {
        type: 'array',
        description: 'The languages that are available on the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/localization#available_languages)\n\n',
        scope: 'shop_locale'
      },
      market: {
        type: 'object',
        description: 'The currently selected market on the storefront.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/localization#market)\n\n',
        scope: 'market'
      },
      country: {
        type: 'object',
        description: 'The currently selected country on the storefront.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/localization#country)\n\n',
        scope: 'country'
      },
      language: {
        type: 'object',
        description: 'The currently selected language on the storefront.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/localization#language)\n\n',
        scope: 'shop_locale'
      }
    }
  },
  location: {
    summary: 'A store [location](https://help.shopify.com/manual/locations).',
    description: 'A store [location](https://help.shopify.com/manual/locations). \n\n**Tip**\n\n> The `location` object is defined only if one or more locations has [local pickup](https://help.shopify.com/manual/shipping/setting-up-and-managing-your-shipping/local-methods/local-pickup)\n> enabled.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/location)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: "The location's ID.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/location#id)\n\n"
      },
      name: {
        type: 'string',
        description: "The location's name.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/location#name)\n\n"
      },
      address: {
        type: 'object',
        description: "The location's address.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/location#address)\n\n",
        scope: 'address'
      },
      latitude: {
        type: 'number',
        description: "The latitude of the location's address. If the location's address isn't verified, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/location#latitude)\n\n"
      },
      longitude: {
        type: 'number',
        description: "The longitude of the location's address. If the location's address isn't verified, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/location#longitude)\n\n"
      },
      metafields: {
        type: 'any',
        description: 'The [metafields](/docs/api/liquid/objects/metafield) applied to the location. \n\n**Tip**\n\n> To learn about how to create metafields, refer to [Create and manage metafields](/apps/metafields/manage) or visit\n> the [Shopify Help Center](https://help.shopify.com/manual/metafields).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/location#metafields)\n\n'
      }
    }
  },
  market: {
    summary: 'A group of one or more regions of the world that a merchant is targeting for sales.',
    description: 'A group of one or more regions of the world that a merchant is targeting for sales. To learn more about markets, refer to [the Shopify Markets conceptual\noverview](/docs/apps/markets).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/market)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of the market.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/market#id)\n\n'
      },
      handle: {
        type: 'string',
        description: 'The [handle](/docs/api/liquid/basics#handles) of the market.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/market#handle)\n\n'
      },
      metafields: {
        type: 'array',
        description: 'The [metafields](/docs/api/liquid/objects/metafield) applied to the market. \n\n**Tip**\n\n> To learn about how to create metafields, refer to [Create and manage\n> metafields](/apps/metafields/manage) or visit the [Shopify Help\n> Center](https://help.shopify.com/manual/metafields).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/market#metafields)\n\n',
        scope: 'metafield'
      }
    }
  },
  measurement: {
    summary: 'A measurement from one of the following metafield types:\n\n- `dimension`\n- `volume`\n- `weight`',
    description: 'A measurement from one of the following metafield types:\n\n- `dimension`\n- `volume`\n- `weight` \n\n**Tip**\n\n> To learn about metafield types, refer to [Metafield types](/apps/metafields/types).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/measurement)\n\n',
    type: 'object',
    properties: {
      type: {
        type: 'string',
        description: 'The measurement type.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/measurement#type)\n\n',
        literal: [
          'dimension',
          'volume',
          'weight'
        ]
      },
      value: {
        type: 'number',
        description: 'The measurement value.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/measurement#value)\n\n'
      },
      unit: {
        type: 'string',
        description: 'The measurement unit.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/measurement#unit)\n\n'
      }
    }
  },
  metafield: {
    summary: 'A [metafield](/apps/metafields) attached to a parent object.',
    description: "A [metafield](/apps/metafields) attached to a parent object. To learn about how to access a metafield on a specific object, refer to [Access metafields](https://shopify.dev/docs/api/liquid/objects/metafield#metafield-access-metafields).\n\nMetafields support [multiple data types](/apps/metafields/types), which determine the kind of information that's stored\nin the metafield. You can also output the metafield content in a type-specific format using\n[metafield filters](https://shopify.dev/docs/api/liquid/filters/metafield-filters).\n\n\n\n**Note**\n\n> You can't create metafields in Liquid. Metafields can be created in only the following ways:\n>\n> - [In the Shopify admin](https://help.shopify.com/manual/metafields)\n> - [Through an app](https://shopify.dev/apps/metafields)\n\n\n\n**Note**\n\n> Metafields of type `integer`, `json_string`, and `string` are older implementations that don't have the properties\n  noted on this page, and aren't compatible with metafield filters. To learn more, refer to [Deprecated metafields](https://shopify.dev/docs/api/liquid/objects/metafield#metafield-deprecated-metafields).\n\n#### Example\n\nThe access path for metafields consists of two layers:\n\n- namespace - A grouping of metafields to prevent conflicts.\n- key - The metafield name.\n\nGiven this, you can access the metafield object with the following syntax:\n\n```liquid\n{{ resource.metafields.namespace.key }}\n```\n\n\n```liquid\n\nType: {{ product.metafields.information.directions.type }}\nValue: {{ product.metafields.information.directions.value }}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/metafield)\n\n",
    type: 'object',
    properties: {
      value: {
        type: 'any',
        description: "The value of the metafield. The following table outlines the value format for each metafield type:\n\n<table>\n  <thead>\n    <tr>\n      <th>Type</th>\n      <th>Returned format</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>\n        <code>single_line_text_field</code><br><br>\n        <code>multi_line_text_field</code>\n      </td>\n      <td><a href=\"/docs/api/liquid/basics#string\">A string</a></td>\n    </tr>\n    <tr>\n      <td>\n        <code>product_reference</code>\n      </td>\n      <td><a href=\"/docs/api/liquid/objects/product\">A product object</a></td>\n    </tr>\n    <tr>\n      <td>\n        <code>collection_reference</code>\n      </td>\n      <td><a href=\"/docs/api/liquid/objects/collection\">A collection object</a></td>\n    </tr>\n    <tr>\n      <td>\n        <code>variant_reference</code>\n      </td>\n      <td><a href=\"/docs/api/liquid/objects/variant\">A variant object</a></td>\n    </tr>\n    <tr>\n      <td>\n       <code>page_reference</code>\n     </td>\n     <td><a href=\"/docs/api/liquid/objects/page\">A page object</a></td>\n    </tr>\n    <tr>\n      <td>\n        <code>file_reference</code>\n     </td>\n     <td>\n       <a href=\"/docs/api/liquid/objects/generic-file\">A generic_file object</a><br><br>\n       <a href=\"/docs/api/liquid/objects/media\">A media object (images and videos only)</a>\n     </td>\n    </tr>\n    <tr>\n      <td>\n        <code>number_integer</code><br><br>\n        <code>number_decimal</code>\n      </td>\n      <td><a href=\"/docs/api/liquid/basics#number\">A number</a></td>\n    </tr>\n    <tr>\n      <td>\n        <code>date</code><br><br>\n        <code>date_time</code>\n      </td>\n      <td>A date string. To format the string, use the <a href=\"/docs/api/liquid/filters/date\">date</a> filter.</td>\n    </tr>\n    <tr>\n      <td>\n        <code>url_reference</code>\n      </td>\n      <td><a href=\"/docs/api/liquid/basics#string\">A url string</a></td>\n    </tr>\n    <tr>\n      <td>\n        <code>json</code>\n      </td>\n      <td><a href=\"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON\">A JSON object</a></td>\n    </tr>\n    <tr>\n      <td>\n       <code>boolean</code>\n      </td>\n      <td><a href=\"/docs/api/liquid/basics#boolean\">A boolean</a></td>\n    <tr>\n      <td>\n        <code>color</code>\n      </td>\n      <td><a href=\"/docs/api/liquid/objects/color\">A color object</a></td>\n    </tr>\n    <tr>\n      <td>\n        <code>weight</code><br><br>\n        <code>volume</code><br><br>\n        <code>dimension</code>\n      </td>\n      <td><a href=\"/docs/api/liquid/objects/measurement\">A measurement object</a></td>\n    </tr>\n    <tr>\n      <td>\n        <code>rating</code>\n      </td>\n      <td><a href=\"/docs/api/liquid/objects/rating\">A rating object</a></td>\n    </tr>\n    <tr>\n      <td>\n        <code>list</code>\n      </td>\n      <td><a href=\"/docs/api/liquid/basics#array\">An array of objects, numbers, or strings, depending on the list type</a></td>\n    </tr>\n    <tr>\n      <td>\n        <code>money</code>\n      </td>\n      <td><a href=\"/docs/api/liquid/objects/money\">A money object, displayed in the customer's local (presentment) currency.</a></td>\n    </tr>\n  </tbody>\n</table>\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/metafield#value)\n\n"
      },
      type: {
        type: 'string',
        description: 'The [type](/apps/metafields/types) of the metafield.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/metafield#type)\n\n',
        literal: [
          'single_line_text_field',
          'multi_line_text_field',
          'product_reference',
          'collection_reference',
          'variant_reference',
          'page_reference',
          'file_reference',
          'number_integer',
          'number_decimal',
          'date',
          'date_time',
          'url_reference',
          'json',
          'boolean',
          'color',
          'weight',
          'volume',
          'dimension',
          'rating',
          'list',
          'money'
        ]
      },
      'list?': {
        type: 'boolean',
        description: 'Returns `true` if the metafield is a list type. Returns `false` if not. \n\n**Tip**\n\n> To learn about metafield types, refer to [Metafield types](/apps/metafields/types).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/metafield#list?)\n\n'
      }
    }
  },
  metaobject_definition: {
    summary: 'A `metaobject_definition` defines the structure of a metaobject type for the store, which consists of\na merchant-defined set of [field definitions](https://help.shopify.com/en/manual/metafields/metafield-definitions).',
    description: 'A `metaobject_definition` defines the structure of a metaobject type for the store, which consists of\na merchant-defined set of [field definitions](https://help.shopify.com/en/manual/metafields/metafield-definitions). One or more corresponding [`metaobject`](https://shopify.dev/docs/api/liquid/objects#metaobject) objects contain values for\nthe fields specified in the metaobject definition.\n\n#### Example\n\nIf a metaobject definition has multiple metaobject entries, then you can loop over them using the `values` property.\nFor example, you can display the field `author` for each metaobject using the following `forloop`:\n\n```liquid\n{% for testimonial in shop.metaobjects.testimonials.values %}\n  {{ testimonial.author.value }}\n{% endfor %}\n```\n\n> Note:\n> When the [`publishable` capability](/apps/data-extensions/metaobjects/capabilities) is enabled, loops return only metaobjects with a status of `active`. Metaobjects with a status of `draft` are skipped.\n\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/metaobject_definition)\n\n',
    type: 'object',
    properties: {
      values: {
        type: 'array',
        description: 'The [metaobjects](/docs/api/liquid/objects#metaobject) that follow the definition.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/metaobject_definition#values)\n\n',
        scope: 'metaobject'
      },
      values_count: {
        type: 'number',
        description: 'The total number of entries for the metaobject definition.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/metaobject_definition#values_count)\n\n'
      }
    }
  },
  metaobject: {
    summary: 'A metaobject entry, which includes the values for a set of [fields](/docs/api/liquid/objects#metafield).\nThe set is defined by the parent [`metaobject_definition`](/docs/api/liquid/objects#metaobject_definition).',
    description: "A metaobject entry, which includes the values for a set of [fields](/docs/api/liquid/objects#metafield).\nThe set is defined by the parent [`metaobject_definition`](/docs/api/liquid/objects#metaobject_definition).\n\n#### Example\n\nThe access path for a metaobject consists of two layers:\n\n- type - The type of the parent metaobject definition.\n- handle - The unique [handle](/docs/api/liquid/basics#handles) of the metaobject.\n\nGiven this, you can access a metaobject with the following syntax:\n\n```liquid\n{{ shop.metaobjects.type.handle }}\n```\n\nYou can also use square bracket notation:\n\n```liquid\n{{ shop.metaobjects['type']['handle'] }}\n```\n\nA metaobjects's field values can be accessed using the key of the desired field:\n\n```liquid\n{{ shop.metaobjects.testimonials.homepage.title }}\n{{ shop.metaobjects['highlights']['washable'].image.value }}\n```\n\n> Note:\n> When the [`publishable` capability](/apps/data-extensions/metaobjects/capabilities) is enabled, a metaobject can only be accessed if its status is `active`.  If its status is `draft`, then the return value is `nil`.\n\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/metaobject)\n\n",
    type: 'object',
    properties: {
      system: {
        type: 'object',
        description: 'Basic information about the metaobject. These properties are grouped under the `system` object to avoid collisions between system property names and user-defined metaobject fields.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/metaobject#system)\n\n',
        scope: 'metaobject_system'
      }
    }
  },
  metaobject_system: {
    summary: 'Basic information about a [`metaobject`](/api/liquid/objects#metaobject). These properties are grouped under the `system` object to avoid collisions between system property names and user-defined metaobject fields.',
    description: "Basic information about a [`metaobject`](/api/liquid/objects#metaobject). These properties are grouped under the `system` object to avoid collisions between system property names and user-defined metaobject fields.\n\n#### Example\n\nYou can access the `metaobject_system` object and its properties through the metaobject's `system` property. You can use the following syntax:\n\n```liquid\n{{ shop.metaobjects.testimonials[\"home_page\"].system.id }}\n```\n\nYou can also access `metaobject_system` properties when iterating over a list of metaobjects:\n\n```liquid\n{% for metaobject in product.metafields.custom.mixed_metaobject_list.value %}\n  {% if metaobject.system.type == \"testimonial\" %}\n    {% render 'testimonial' with metaobject as testimonial  %}\n  {% else %}\n    {{ metaobject.system.handle }}\n  {% endif %}\n{% endfor %}\n```\n\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/metaobject_system)\n\n",
    type: 'object',
    properties: {
      type: {
        type: 'string',
        description: "The type of the metaobject definition. This is a free-form string that's defined when the metaobject definition is created.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/metaobject_system#type)\n\n"
      },
      handle: {
        type: 'string',
        description: 'The unique [handle](/api/liquid/basics#handles) of the metaobject.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/metaobject_system#handle)\n\n'
      },
      id: {
        type: 'number',
        description: 'The ID of the metaobject.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/metaobject_system#id)\n\n'
      }
    }
  },
  model: {
    summary: 'A 3D model uploaded as product media.',
    description: 'A 3D model uploaded as product media. \n\n**Tip**\n\n> Use the [`model_viewer_tag` filter](https://shopify.dev/docs/api/liquid/filters/model_viewer_tag) to output a [Google model viewer component](https://modelviewer.dev)\n> for the model.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/model)\n\n',
    type: 'object',
    properties: {
      sources: {
        type: 'array',
        description: 'The source files for the model.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/model#sources)\n\n',
        scope: 'model_source'
      },
      alt: {
        type: 'string',
        description: 'The alt text of the model.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/model#alt)\n\n'
      },
      id: {
        type: 'number',
        description: 'The ID of the model.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/model#id)\n\n'
      },
      media_type: {
        type: 'string',
        description: "The media type of the model. Always returns `model`.\n\n#### Example\n\nYou can use the `media_type` property with the [`where` filter](/docs/api/liquid/filters/where) to filter the [`product.media` array](/docs/api/liquid/objects/product#product-media) for all media of a desired type.\n\n\n```liquid\n\n{% assign models = product.media | where: 'media_type', 'model' %}\n\n{% for model in models %}\n  {{- model | model_viewer_tag }}\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/model#media_type)\n\n"
      },
      position: {
        type: 'number',
        description: 'The position of the model in the [`product.media`](/docs/api/liquid/objects/product#product-media) array.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/model#position)\n\n'
      },
      preview_image: {
        type: 'object',
        description: 'A preview image for the model.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/model#preview_image)\n\n',
        scope: 'image'
      }
    }
  },
  model_source: {
    summary: 'A model source file.',
    description: 'A model source file.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/model_source)\n\n',
    type: 'object',
    properties: {
      format: {
        type: 'string',
        description: 'The format of the model source file.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/model_source#format)\n\n'
      },
      mime_type: {
        type: 'string',
        description: 'The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the model source file.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/model_source#mime_type)\n\n'
      },
      url: {
        type: 'string',
        description: 'The [CDN URL](/themes/best-practices/performance/platform#shopify-cdn) of the model source file.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/model_source#url)\n\n'
      }
    }
  },
  money: {
    summary: "A money value, in the the customer's local (presentment) currency.",
    description: "A money value, in the the customer's local (presentment) currency. \n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n#### Example\n\nWhen a money object is referenced directly, the money value in cents is returned.\n\n\n```liquid\n\n{{ product.metafields.details.price_per_100g.value }}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/money)\n\n",
    type: 'object',
    properties: {
      currency: {
        type: 'object',
        description: "The customer's local (presentment) currency.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/money#currency)\n\n",
        scope: 'currency'
      }
    }
  },
  order: {
    summary: 'An [order](https://help.shopify.com/manual/orders).',
    template: [
      'customers/order'
    ],
    description: 'An [order](https://help.shopify.com/manual/orders).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order)\n\n',
    type: 'object',
    properties: {
      discounts: {
        type: 'object',
        description: '⚠️ **DEPRECATED** ⚠️\n\nDeprecated because not all discount types and details are captured.\n\nThe `order.discounts` property has been replaced by [`order.discount_applications`](/docs/api/liquid/objects/order#order-discount_applications).\n\n---\n\nThe discounts on the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#discounts)\n\n',
        scope: 'discount'
      },
      attributes: {
        type: 'any',
        description: 'The attributes on the order. If there are no attributes on the order, then `nil` is returned.\n\n\n**Tip**\n\n> Attributes are [collected with the cart](https://shopify.dev/themes/architecture/templates/cart#support-cart-notes-and-attributes).\n\n#### Example\n\n```liquid\n<ul>\n  {% for attribute in order.attributes -%}\n    <li><strong>{{ attribute.first }}:</strong> {{ attribute.last }}</li>\n  {%- endfor %}\n</ul>\n```\n\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#attributes)\n\n'
      },
      cancel_reason: {
        type: 'string',
        description: 'The reason that the order was cancelled.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#cancel_reason)\n\n',
        literal: [
          'customer',
          'declined',
          'fraud',
          'inventory',
          'other'
        ]
      },
      cancel_reason_label: {
        type: 'string',
        description: 'The localized version of the [cancellation reason](/docs/api/liquid/objects/order#order-cancel_reason) for the order. \n\n**Tip**\n\n> Use this property to output the cancellation reason on the storefront.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#cancel_reason_label)\n\n'
      },
      cancelled: {
        type: 'boolean',
        description: 'Returns `true` if the order was cancelled. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#cancelled)\n\n'
      },
      cancelled_at: {
        type: 'string',
        description: 'A timestamp for when the order was cancelled. \n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#cancelled_at)\n\n'
      },
      cart_level_discount_applications: {
        type: 'array',
        description: 'The discount applications that apply at the order level.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#cart_level_discount_applications)\n\n',
        scope: 'discount_application'
      },
      created_at: {
        type: 'string',
        description: 'A timestamp for when the order was created. \n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#created_at)\n\n'
      },
      total_duties: {
        type: 'number',
        description: "The sum of all duties applied to the line items in the order in the currency's subunit. If there are no duties, then `nil` is returned. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#total_duties)\n\n"
      },
      customer_url: {
        type: 'string',
        description: 'The URL for the customer to view the order in their account.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#customer_url)\n\n'
      },
      customer: {
        type: 'object',
        description: 'The customer that placed the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#customer)\n\n',
        scope: 'customer'
      },
      discount_applications: {
        type: 'array',
        description: 'All of the discount applications for the order and its line items.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#discount_applications)\n\n',
        scope: 'discount_application'
      },
      total_discounts: {
        type: 'number',
        description: "The total amount of all discounts applied to the order in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#total_discounts)\n\n"
      },
      total_net_amount: {
        type: 'number',
        description: "The net amount of the order in the currency's subunit. The amount is calculated after refunds are applied, so is equal to `order.total_price` minus `order.total_refunded_amount`.\n\nThe value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#total_net_amount)\n\n"
      },
      tax_price: {
        type: 'number',
        description: "The total amount of taxes applied to the order in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#tax_price)\n\n"
      },
      total_refunded_amount: {
        type: 'number',
        description: "The total amount that's been refunded from the order in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#total_refunded_amount)\n\n"
      },
      email: {
        type: 'string',
        description: "The email that's associated with the order. If no email is associated with the order, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#email)\n\n"
      },
      financial_status: {
        type: 'string',
        description: "The order's financial status.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#financial_status)\n\n",
        literal: [
          'authorized',
          'expired',
          'paid',
          'partially_paid',
          'partially_refunded',
          'pending',
          'refunded',
          'unpaid',
          'voided'
        ]
      },
      financial_status_label: {
        type: 22,
        description: 'The localized version of the [financial status](/docs/api/liquid/objects/order#order-financial_status) of the order. \n\n**Tip**\n\n> Use this property to output the financial status on the storefront.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#financial_status_label)\n\n'
      },
      fulfillment_status: {
        type: 'string',
        description: 'The fulfillment status of the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#fulfillment_status)\n\n'
      },
      fulfillment_status_label: {
        type: 'string',
        description: 'The localized version of the [fulfillment status](/docs/api/liquid/objects/order#order-fulfillment_status) of the order. \n\n**Tip**\n\n> Use this property to output the fulfillment status on the storefront.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#fulfillment_status_label)\n\n',
        literal: [
          'complete',
          'fulfilled',
          'partial',
          'restocked',
          'unfulfilled'
        ]
      },
      id: {
        type: 'string',
        description: 'The ID of the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#id)\n\n'
      },
      metafields: {
        type: 'any',
        description: 'The [metafields](/docs/api/liquid/objects/metafield) applied to the order. \n\n**Tip**\n\n> To learn about how to create metafields, refer to [Create and manage metafields](/apps/metafields/manage) or visit\n> the [Shopify Help Center](https://help.shopify.com/manual/metafields).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#metafields)\n\n'
      },
      name: {
        type: 'string',
        description: 'The name of the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#name)\n\n'
      },
      note: {
        type: 'string',
        description: "The note on the order. If there's no note on the order, then `nil` is returned.\n\n\n**Tip**\n\n> Notes are [collected with the cart](https://shopify.dev/themes/architecture/templates/cart#support-cart-notes-and-attributes).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#note)\n\n"
      },
      order_number: {
        type: 'number',
        description: 'The integer representation of the order [name](/docs/api/liquid/objects/order#order-name).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#order_number)\n\n'
      },
      order_status_url: {
        type: 'string',
        description: 'The URL for the [order status page](https://help.shopify.com/manual/orders/status-tracking) for the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#order_status_url)\n\n'
      },
      customer_order_url: {
        type: 'string',
        description: 'The URL for the new order details page. The new customer accounts includes a list of Buyers Orders and an Order Details View.\nThis liquid function exposes a URL to a specific Orders Details in new customer accounts.\n[Setup process for the new order details page](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts)\ncan be found in the help center.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#customer_order_url)\n\n'
      },
      phone: {
        type: 'string',
        description: 'The phone number associated with the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#phone)\n\n'
      },
      shipping_address: {
        type: 'object',
        description: 'The shipping address of the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#shipping_address)\n\n',
        scope: 'address'
      },
      billing_address: {
        type: 'object',
        description: 'The billing address of the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#billing_address)\n\n',
        scope: 'address'
      },
      tags: {
        type: 'array',
        description: 'The [tags](https://help.shopify.com/manual/shopify-admin/productivity-tools/using-tags) on the order. The tags are returned in alphabetical order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#tags)\n\n'
      },
      tax_lines: {
        type: 'array',
        description: 'The tax lines on the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#tax_lines)\n\n',
        scope: 'tax_line'
      },
      transactions: {
        type: 'array',
        description: 'The transactions of the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#transactions)\n\n',
        scope: 'transaction'
      },
      line_items: {
        type: 'array',
        description: 'The line items in the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#line_items)\n\n',
        scope: 'line_item'
      },
      subtotal_line_items: {
        type: 'array',
        description: 'The non-tip line items in the order. \n\n**Note**\n\n> These line items are used to calculate the the [subtotal price](https://shopify.dev/docs/api/liquid/objects/order#order-subtotal_price).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#subtotal_line_items)\n\n',
        scope: 'line_item'
      },
      item_count: {
        type: 'number',
        description: 'The number of items in the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#item_count)\n\n'
      },
      shipping_methods: {
        type: 'array',
        description: 'The shipping methods for the order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#shipping_methods)\n\n',
        scope: 'shipping_method'
      },
      line_items_subtotal_price: {
        type: 'number',
        description: "The sum of the prices of all of the line items in the order in the currency's subunit, after any line item discounts have\nbeen applied. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#line_items_subtotal_price)\n\n"
      },
      subtotal_price: {
        type: 'number',
        description: "The sum of the prices of the [subtotal line items](/docs/api/liquid/objects/order#order-subtotal_line_items) in the currency's subunit, after any line item or\ncart discounts have been applied. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#subtotal_price)\n\n"
      },
      total_price: {
        type: 'number',
        description: "The total price of the order in the currency's subunit. \n\n**Note**\n\n> The total price is calculated before refunds are applied. Use [`order.total_net_amount`](https://shopify.dev/docs/api/liquid/objects/order#order-total_net_amount)\n> to output the total minus any refunds.\n\nThe value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#total_price)\n\n"
      },
      shipping_price: {
        type: 'number',
        description: "The shipping price of the order in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/order#shipping_price)\n\n"
      }
    }
  },
  page: {
    summary: 'A [page](https://help.shopify.com/manual/online-store/themes/theme-structure/pages) on a store.',
    template: [
      'page'
    ],
    description: 'A [page](https://help.shopify.com/manual/online-store/themes/theme-structure/pages) on a store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/page)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'The ID of the page.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/page#id)\n\n'
      },
      author: {
        type: 'string',
        description: 'The author of the page.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/page#author)\n\n'
      },
      handle: {
        type: 'string',
        description: 'The [handle](/docs/api/liquid/basics#handles) of the page.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/page#handle)\n\n'
      },
      title: {
        type: 'string',
        description: 'The title of the page.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/page#title)\n\n'
      },
      template_suffix: {
        type: 'string',
        description: "The name of the [custom template](/themes/architecture/templates#alternate-templates) assigned to the page. The name doesn't include the `page.` prefix, or the file extension (`.json` or `.liquid`).\n\n If a custom template isn't assigned to the page, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/page#template_suffix)\n\n"
      },
      content: {
        type: 'string',
        description: 'The content of the page.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/page#content)\n\n'
      },
      url: {
        type: 'string',
        description: 'The relative URL of the page.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/page#url)\n\n'
      },
      metafields: {
        type: 'any',
        description: 'The [metafields](/docs/api/liquid/objects/metafield) applied to the page. \n\n**Tip**\n\n> To learn about how to create metafields, refer to [Create and manage metafields](/apps/metafields/manage) or visit\n> the [Shopify Help Center](https://help.shopify.com/manual/metafields).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/page#metafields)\n\n'
      },
      published_at: {
        type: 'string',
        description: 'A timestamp for when the page was published. \n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/page#published_at)\n\n'
      }
    }
  },
  paginate: {
    summary: 'Information about the pagination inside a set of [`paginate` tags](/docs/api/liquid/tags/paginate).',
    description: 'Information about the pagination inside a set of [`paginate` tags](/docs/api/liquid/tags/paginate). \n\n**Tip**\n\n> Use the [`default_pagination` filter](https://shopify.dev/docs/api/liquid/filters/default_pagination) to output pagination links.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/paginate)\n\n',
    type: 'object',
    properties: {
      page_size: {
        type: 'number',
        description: 'The number of items displayed per page.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/paginate#page_size)\n\n'
      },
      current_offset: {
        type: 'number',
        description: 'The total number of items on pages previous to the current page. For example, if you show 5 items per page and are on page 3, then the value of `paginate.current_offset` is 10.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/paginate#current_offset)\n\n'
      },
      current_page: {
        type: 'number',
        description: 'The page number of the current page.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/paginate#current_page)\n\n'
      },
      items: {
        type: 'number',
        description: 'The total number of items to be paginated. For example, if you paginate a collection of 120 products, then the value of `paginate.items` is 120.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/paginate#items)\n\n'
      },
      parts: {
        type: 'array',
        description: 'The pagination parts. Pagination parts are used to build pagination navigation.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/paginate#parts)\n\n',
        scope: 'part'
      },
      next: {
        type: 'object',
        description: 'The pagination part to go to the next page.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/paginate#next)\n\n',
        scope: 'part'
      },
      previous: {
        type: 'object',
        description: 'The pagination part to go to the previous page.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/paginate#previous)\n\n',
        scope: 'part'
      },
      pages: {
        type: 'number',
        description: 'The total number of pages.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/paginate#pages)\n\n'
      },
      page_param: {
        type: 'string',
        description: 'The URL parameter denoting the pagination. The default value is `page`.\n\nIf you paginate over an array defined in a setting or a metafield list type, then a unique key is appended to page to allow the paginated list to\noperate independently from other lists on the page. For example, a paginated list defined in a setting might use the key\n`page_a9e329dc`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/paginate#page_param)\n\n'
      }
    }
  },
  predictive_search: {
    summary: 'Information about the results from a predictive search query through the\n[Predictive Search API](/api/ajax/reference/predictive-search#get-locale-search-suggest).',
    description: 'Information about the results from a predictive search query through the\n[Predictive Search API](/api/ajax/reference/predictive-search#get-locale-search-suggest). \n\n**Note**\n\n> The `predictive_search` object returns results only when rendered in a section using the Predictive Saerch API and the\n[Section Rendering API](/api/section-rendering). To learn about how to include predictive search in your theme,\n> refer to [Add predictive search to your theme](/themes/navigation-search/search/predictive-search).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/predictive_search)\n\n',
    type: 'object',
    properties: {
      performed: {
        type: 'boolean',
        description: "Returns `true` when being referenced inside a section that's been rendered using the Predictive Search API and\nthe Section Rendering API. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/predictive_search#performed)\n\n"
      },
      resources: {
        type: 'object',
        description: 'The resources associated with the query. You can check whether any resources of a specific type were returned using the [`size` filter](https://shopify.dev/docs/api/liquid/filters/size).\n\n```liquid\n{% if predictive_search.resources.articles.size > 0 %}\n  {% for article in predictive_search.resources.articles %}\n    {{ article.title }}\n  {% endfor %}\n{% endif %}\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/predictive_search#resources)\n\n',
        scope: 'predictive_search_resources'
      },
      terms: {
        type: 'string',
        description: 'The entered search terms. \n\n**Tip**\n\n> Use the [`highlight` filter](https://shopify.dev/docs/api/liquid/filters/highlight) to highlight the search terms in search results content.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/predictive_search#terms)\n\n'
      },
      types: {
        type: 'array',
        description: 'The object types that the search was performed on. Searches can be performed on the following object types:\n\n- [`article`](https://shopify.dev/docs/api/liquid/objects/article)\n- [`collection`](https://shopify.dev/docs/api/liquid/objects/collection)\n- [`page`](https://shopify.dev/docs/api/liquid/objects/page)\n- [`product`](https://shopify.dev/docs/api/liquid/objects/product)\n\n\n\n**Note**\n\n> The types are determined by the [`types` query parameter](/api/ajax/reference/predictive-search#query-parameters).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/predictive_search#types)\n\n'
      }
    }
  },
  selling_plan_price_adjustment: {
    summary: 'Information about how a selling plan changes the price of a variant for a given period of time.',
    description: 'Information about how a selling plan changes the price of a variant for a given period of time. To learn about how to support selling plans in your theme, refer to [Purchase options](/themes/pricing-payments/purchase-options).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_price_adjustment)\n\n',
    type: 'object',
    properties: {
      order_count: {
        type: 'number',
        description: 'The number of orders that the price adjustment applies to.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_price_adjustment#order_count)\n\n'
      },
      position: {
        type: 'number',
        description: 'The 1-based index of the price adjustment in the [`selling_plan.price_adjustments` array](/docs/api/liquid/objects/selling_plan#selling_plan-price_adjustments).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_price_adjustment#position)\n\n'
      },
      value_type: {
        type: 'string',
        description: 'The type of price adjustment.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_price_adjustment#value_type)\n\n',
        literal: [
          'percentage',
          'fixed_amount',
          'price'
        ]
      },
      value: {
        type: 'number',
        description: "The value of the price adjustment as a decimal. How this value is interpreted depends on the [value type](https://shopify.dev/docs/api/liquid/objects/selling_plan_price_adjustment#selling_plan_price_adjustment-value_type) of\nthe price adjustment. The following table outlines what the value represents for each value type:\n\n| Value type | Value |\n| --- | --- |\n| `fixed_amount` | The amount that the original price is being adjusted by, in the currency's subunit. |\n| `percentage` | The percent amount that the original price is being adjusted by. |\n| `price` | The adjusted amount in the currency's subunit. |\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_price_adjustment#value)\n\n"
      }
    }
  },
  product: {
    summary: 'A [product](https://help.shopify.com/manual/products) in the store.',
    template: [
      'product'
    ],
    description: 'A [product](https://help.shopify.com/manual/products) in the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product)\n\n',
    type: 'object',
    properties: {
      variants: {
        type: 'array',
        description: 'The variants of the product.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#variants)\n\n',
        scope: 'variant'
      },
      images: {
        type: 'array',
        description: 'The images attached to the product.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#images)\n\n',
        scope: 'image'
      },
      metafields: {
        type: 'any',
        description: 'The [metafields](/docs/api/liquid/objects/metafield) applied to the product. \n\n**Tip**\n\n> To learn about how to create metafields, refer to [Create and manage metafields](/apps/metafields/manage) or visit\n> the [Shopify Help Center](https://help.shopify.com/manual/metafields).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#metafields)\n\n'
      },
      options_with_values: {
        type: 'array',
        description: 'The options on the product.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#options_with_values)\n\n',
        scope: 'product_option'
      },
      id: {
        type: 'number',
        description: 'The ID of the product.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#id)\n\n'
      },
      title: {
        type: 'string',
        description: 'The title of the product.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#title)\n\n'
      },
      handle: {
        type: 'string',
        description: 'The [handle](/docs/api/liquid/basics#handles) of the product.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#handle)\n\n'
      },
      template_suffix: {
        type: 'string',
        description: "The name of the [custom template](/themes/architecture/templates#alternate-templates) of the product. The name doesn't include the `product.` prefix, or the file extension (`.json` or `.liquid`).\n\nIf a custom template isn't assigned to the product, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#template_suffix)\n\n"
      },
      vendor: {
        type: 'string',
        description: 'The vendor of the product.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#vendor)\n\n'
      },
      description: {
        type: 'string',
        description: 'The description of the product. \n\n**Note**\n\n> This is the same value as [`product.content`](https://shopify.dev/docs/api/liquid/objects/product#product-content).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#description)\n\n'
      },
      content: {
        type: 'string',
        description: 'The description of the product. \n\n**Note**\n\n> This is the same value as [`product.description`](https://shopify.dev/docs/api/liquid/objects/product#product-description).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#content)\n\n'
      },
      featured_image: {
        type: 'object',
        description: 'The first (featured) image attached to the product.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#featured_image)\n\n',
        scope: 'image'
      },
      featured_media: {
        type: 'object',
        description: 'The first (featured) media attached to the product. \n\n**Tip**\n\n> You can use [media filters](https://shopify.dev/docs/api/liquid/filters/media-filters) to output media URLs and displays. To learn about how\n> to include media in your theme, refer to [Support product media](/themes/product-merchandising/media/support-media).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#featured_media)\n\n',
        scope: 'media'
      },
      media: {
        type: 'array',
        description: 'The media attached to the product, sorted by the date it was added to the product. \n\n**Tip**\n\n> You can use [media filters](https://shopify.dev/docs/api/liquid/filters/media-filters) to output media URLs and displays. To learn about how\n> to include media in your theme, refer to [Support product media](/themes/product-merchandising/media/support-media).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#media)\n\n',
        scope: 'media'
      },
      price_min: {
        type: 'number',
        description: "The lowest price of any variants of the product in the currency's subunit. \n\n**Note**\n\n> This is the same value as [`product.price`](https://shopify.dev/docs/api/liquid/objects/product#product-price).\n\nThe value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#price_min)\n\n"
      },
      price: {
        type: 'number',
        description: "The lowest price of any variants of the product in the currency's subunit. \n\n**Note**\n\n> This is the same value as [`product.price_min`](https://shopify.dev/docs/api/liquid/objects/product#product-price_min).\n\nThe value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#price)\n\n"
      },
      price_max: {
        type: 'number',
        description: "The highest price of any variants of the product in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#price_max)\n\n"
      },
      price_varies: {
        type: 'boolean',
        description: "Returns `true` if the product's variant prices vary. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#price_varies)\n\n"
      },
      selected_or_first_available_variant: {
        type: 'object',
        description: 'The currently selected or first available variant of the product. \n\n**Note**\n\n> The selected variant is determined by the `variant` URL parameter. The `selected_variant` parameter is available on product pages only.\n\nFor a variant to be available, it needs to meet one of the following criteria:\n\n- The `variant.inventory_quantity` is greater than 0.\n- The `variant.inventory_policy` is set to `continue`.\n- The `variant.inventory_management` is `nil`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#selected_or_first_available_variant)\n\n',
        scope: 'variant'
      },
      collections: {
        type: 'array',
        description: "The collections that the product belongs to. \n\n**Note**\n\n> Collections that aren't [available](https://help.shopify.com/manual/products/collections/make-collections-available) on\n> the Online Store sales channel aren't included.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#collections)\n\n",
        scope: 'collection'
      },
      selected_variant: {
        type: 'object',
        description: 'The currently selected variant of the product. If no variant is currently selected, then `nil` is returned.\n\n\n\n**Note**\n\n> The selected variant is determined by the `variant` URL parameter. This URL parameter is available on product pages URLs only.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#selected_variant)\n\n',
        scope: 'variant'
      },
      first_available_variant: {
        type: 'object',
        description: 'The first available variant of the product. For a variant to be available, it needs to meet one of the following criteria:\n\n- The `variant.inventory_quantity` is greater than 0.\n- The `variant.inventory_policy` is set to `continue`.\n- The `variant.inventory_management` is `nil`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#first_available_variant)\n\n',
        scope: 'variant'
      },
      available: {
        type: 'boolean',
        description: 'Returns `true` if at least one of the variants of the product is available. Returns `false` if not. For a variant to be available, it needs to meet one of the following criteria:\n\n- The `variant.inventory_quantity` is greater than 0.\n- The `variant.inventory_policy` is set to `continue`.\n- The `variant.inventory_management` is `nil`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#available)\n\n'
      },
      options: {
        type: 'array',
        description: 'The option names of the product.\n\n#### Example\n\nYou can use the [`size` filter](/docs/api/liquid/filters/size) with dot notation to determine how many options a product has.\n\n\n```liquid\n\n{% if product.options.size > 0 -%}\n  {% for option in product.options -%}\n    - {{ option }}\n  {%- endfor %}\n{%- endif %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#options)\n\n'
      },
      type: {
        type: 'string',
        description: 'The type of the product.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#type)\n\n'
      },
      compare_at_price_min: {
        type: 'number',
        description: "The lowest **compare at** price of any variants of the product in the currency's subunit. This is the same as\n`product.compare_at_price`. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#compare_at_price_min)\n\n"
      },
      compare_at_price_max: {
        type: 'number',
        description: "The highest **compare at** price of any variants of the product in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#compare_at_price_max)\n\n"
      },
      compare_at_price: {
        type: 'number',
        description: "The lowest **compare at** price of any variants of the product in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#compare_at_price)\n\n"
      },
      compare_at_price_varies: {
        type: 'boolean',
        description: 'Returns `true` if the variant **compare at** prices of the product vary. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#compare_at_price_varies)\n\n'
      },
      url: {
        type: 'string',
        description: 'The relative URL of the product.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#url)\n\n'
      },
      tags: {
        type: 'array',
        description: 'The [tags](https://help.shopify.com/manual/shopify-admin/productivity-tools/using-tags) of the product. \n\n**Note**\n\n> The tags are returned in alphabetical order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#tags)\n\n'
      },
      published_at: {
        type: 'string',
        description: 'A timestamp for when the product was published. \n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#published_at)\n\n'
      },
      created_at: {
        type: 'string',
        description: 'A timestamp for when the product was created. \n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#created_at)\n\n'
      },
      options_by_name: {
        type: 'any',
        description: "Allows you to access a specific [product option](/docs/api/liquid/objects/product_option) by its name.\n\n#### Example\n\nWhen accessing a specific option, the name is case-insensitive.\n\n```liquid\n\n<label>\n  Strength\n  <select>\n    {%- for value in product.options_by_name['strength'].values %}\n    <option>{{ value }}</option>\n    {%- endfor %}\n  </select>\n</label>\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#options_by_name)\n\n"
      },
      has_only_default_variant: {
        type: 'boolean',
        description: "Returns `true` if the product doesn't have any options. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#has_only_default_variant)\n\n"
      },
      requires_selling_plan: {
        type: 'boolean',
        description: 'Returns `true` if all of the variants of the product require a selling plan. Returns `false` if not. \n\n**Note**\n\n> A variant requires a selling plan if [`variant.requires_selling_plan`](https://shopify.dev/docs/api/liquid/objects/variant#variant-requires_selling_plan)\n> is `true`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#requires_selling_plan)\n\n'
      },
      selling_plan_groups: {
        type: 'array',
        description: 'The selling plan groups that the variants of the product are included in.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#selling_plan_groups)\n\n',
        scope: 'selling_plan_group'
      },
      selected_selling_plan: {
        type: 'object',
        description: 'The currently selected selling plan. If no selling plan is selected, then `nil` is returned.\n\n\n\n**Note**\n\n> The selected selling plan is determined by the `selling_plan` URL parameter.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#selected_selling_plan)\n\n',
        scope: 'selling_plan'
      },
      selected_selling_plan_allocation: {
        type: 'object',
        description: 'The currently selected selling plan allocation for the currently selected variant. If no variant and selling plan are selected, then `nil` is returned.\n\n\n\n**Note**\n\n> The selected variant is determined by the `variant` URL parameter, and the selected selling plan is determined by the\n> `selling_plan` URL parameter.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#selected_selling_plan_allocation)\n\n',
        scope: 'selling_plan_allocation'
      },
      selected_or_first_available_selling_plan_allocation: {
        type: 'object',
        description: "The currently selected, or first available, selling plan allocation. The following logic is used to determine which selling plan allocation is returned:\n\n| Selling plan allocation | Return criteria |\n| --- | --- |\n| The currently selected allocation | Returned if a variant and selling plan are selected.<br><br>The selected variant is determined by the `variant` URL parameter, and the selected selling plan is determined by the `selling_plan` URL parameter. |\n| The first allocation on the first available variant | Returned if no allocation is currently selected. |\n| The first allocation on the first variant | Returned if no allocation is currently selected, and there are no available variants. |\n\nIf the product doesn't have any selling plans, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#selected_or_first_available_selling_plan_allocation)\n\n",
        scope: 'selling_plan_allocation'
      },
      'gift_card?': {
        type: 'boolean',
        description: 'Returns `true` if the product is a gift card. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product#gift_card?)\n\n'
      }
    }
  },
  product_option: {
    summary: 'A product option, such as size or color.',
    description: 'A product option, such as size or color.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product_option)\n\n',
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the product option.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product_option#name)\n\n'
      },
      position: {
        type: 'number',
        description: 'The 1-based index of the product option in the [`product.options_with_values` array](/docs/api/liquid/objects/product#product-options_with_values).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product_option#position)\n\n'
      },
      values: {
        type: 'array',
        description: 'The possible values for the product option.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product_option#values)\n\n'
      },
      selected_value: {
        type: 'string',
        description: 'The currently selected product option value. If no value is currently selected, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/product_option#selected_value)\n\n'
      }
    }
  },
  variant: {
    summary: 'A [product variant](https://help.shopify.com/manual/products/variants).',
    description: 'A [product variant](https://help.shopify.com/manual/products/variants).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant)\n\n',
    type: 'object',
    properties: {
      metafields: {
        type: 'any',
        description: 'The [metafields](/docs/api/liquid/objects/metafield) applied to the variant. \n\n**Tip**\n\n> To learn about how to create metafields, refer to [Create and manage metafields](/apps/metafields/manage) or visit\n> the [Shopify Help Center](https://help.shopify.com/manual/metafields).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#metafields)\n\n'
      },
      product: {
        type: 'object',
        description: 'The parent product of the variant.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#product)\n\n',
        scope: 'product'
      },
      selected: {
        type: 'boolean',
        description: "Returns `true` if the variant is currently selected. Returns `false` if it's not. \n\n**Note**\n\n> The selected variant is determined by the `variant` URL parameter. This URL parameter is available on product pages URLs only.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#selected)\n\n"
      },
      matched: {
        type: 'boolean',
        description: "Returns `true` if the variant has been matched by a [storefront filter](https://shopify.dev/themes/navigation-search/filtering/storefront-filtering).\nReturns `false` if it hasn't.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#matched)\n\n"
      },
      id: {
        type: 'number',
        description: 'The ID of the variant.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#id)\n\n'
      },
      title: {
        type: 'string',
        description: 'A concatenation of each variant option, separated by a `/`.\n\n#### Example\n\n```liquid\n\n{{ product.variants.first.title }}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#title)\n\n'
      },
      quantity_rule: {
        type: 'object',
        description: 'Returns the specified quantity rule for the variant if one exists in the current customer context. Otherwise returns `min=1,max=nil,increment=1` if the variant does not have any quantity rule. \n\n**Note**\n\n> The default quantity rule is `min=1,max=null,increment=1`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#quantity_rule)\n\n',
        scope: 'quantity_rule'
      },
      price: {
        type: 'number',
        description: "The price of the variant in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#price)\n\n"
      },
      compare_at_price: {
        type: 'number',
        description: "The **compare at** price of the variant in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#compare_at_price)\n\n"
      },
      selected_selling_plan_allocation: {
        type: 'object',
        description: 'The selected `selling_plan_allocation`. If no selling plan is selected, then `nil` is returned.\n\n\n\n**Note**\n\n> The selected selling plan is determined by the `selling_plan` URL parameter.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#selected_selling_plan_allocation)\n\n',
        scope: 'selling_plan_allocation'
      },
      selling_plan_allocations: {
        type: 'array',
        description: 'The `selling_plan_allocation` objects for the variant.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#selling_plan_allocations)\n\n',
        scope: 'selling_plan_allocation'
      },
      sku: {
        type: 'string',
        description: 'The SKU of the variant.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#sku)\n\n'
      },
      barcode: {
        type: 'string',
        description: 'The barcode of the variant.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#barcode)\n\n'
      },
      available: {
        type: 'boolean',
        description: 'Returns `true` if the variant is available. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#available)\n\n'
      },
      options: {
        type: 'string',
        description: 'The values of the variant for each [product option](/docs/api/liquid/objects/product_option).\n\n#### Example\n\n```liquid\n\n{% for variant in product.variants -%}\n  {%- capture options -%}\n    {% for option in variant.options -%}\n      {{ option }}{%- unless forloop.last -%}/{%- endunless -%}\n    {%- endfor %}\n  {%- endcapture -%}\n  \n  {{ variant.id }}: {{ options }}\n{%- endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#options)\n\n'
      },
      option1: {
        type: 'string',
        description: "The value of the variant for the first product option. If there's no first product option, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#option1)\n\n"
      },
      option2: {
        type: 'string',
        description: "The value of the variant for the second product option. If there's no second product option, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#option2)\n\n"
      },
      option3: {
        type: 'string',
        description: "The value of the variant for the third product option. If there's no third product option, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#option3)\n\n"
      },
      url: {
        type: 'string',
        description: 'The URL of the variant. Variant URLs use the following structure:\n\n```\n/products/[product-handle]?variant=[variant-id]\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#url)\n\n'
      },
      weight_unit: {
        type: 'string',
        description: 'The unit for the weight of the variant. \n\n**Tip**\n\n> To output the weight of a variant in this unit, use this property, and the `variant.weight_in_unit` property, with the\n> [`weight_with_unit` filter](https://shopify.dev/docs/api/liquid/filters/weight_with_unit).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#weight_unit)\n\n'
      },
      weight_in_unit: {
        type: 'number',
        description: 'The weight of the variant in the unit specified by `variant.weight_unit`. \n\n**Tip**\n\n> To output this weight, use this property, and the `variant.weight_unit` property, with the [`weight_with_unit` filter](https://shopify.dev/docs/api/liquid/filters/weight_with_unit).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#weight_in_unit)\n\n'
      },
      weight: {
        type: 'number',
        description: "The weight of the variant in grams. \n\n**Tip**\n\n> Use the [`weight_with_unit`](https://shopify.dev/docs/api/liquid/filters/weight_with_unit) filter to format the weight in\n> [the store's format](https://www.shopify.com/admin/settings/general).\n>\n> Use `variant.weight_in_unit` to output the weight in the unit configured on the variant.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#weight)\n\n"
      },
      unit_price_measurement: {
        type: 'object',
        description: 'The unit price measurement of the variant. \n\n**Note**\n\n> Unit prices are available only to stores located in Germany and France.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#unit_price_measurement)\n\n',
        scope: 'unit_price_measurement'
      },
      unit_price: {
        type: 'number',
        description: "The [unit price](https://help.shopify.com/manual/intro-to-shopify/initial-setup/sell-in-france/price-per-unit#add-unit-prices-to-your-product)\nof the variant in the currency's subunit. The price reflects any discounts that are applied to the line item. The value is output in the customer's local\n(presentment) currency.\n\n\n\n**Note**\n\n> Unit prices are available only to stores located in Germany and France.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#unit_price)\n\n"
      },
      inventory_quantity: {
        type: 'number',
        description: "The inventory quantity of the variant. If inventory isn't tracked, then `0` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#inventory_quantity)\n\n"
      },
      inventory_management: {
        type: 'string',
        description: "The inventory management service of the variant. If inventory isn't tracked, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#inventory_management)\n\n"
      },
      inventory_policy: {
        type: 'string',
        description: "Whether the variant should continue to be sold when it's out of stock. \n\n**Tip**\n\n> To learn about why merchants might want to continue selling products when they're out of stock, visit the\n> [Shopify Help Center](https://help.shopify.com/manual/products/inventory/getting-started-with-inventory/selling-when-out-of-stock).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#inventory_policy)\n\n",
        literal: [
          'continue',
          'deny'
        ]
      },
      requires_shipping: {
        type: 'boolean',
        description: "Returns `true` if the variant requires shipping. Returns `false` if it doesn't.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#requires_shipping)\n\n"
      },
      taxable: {
        type: 'boolean',
        description: 'Returns `true` if taxes should be charged on the variant. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#taxable)\n\n'
      },
      featured_image: {
        type: 'object',
        description: 'The image attached to the variant. \n\n**Note**\n\n> This is the same value as [`variant.image`](https://shopify.dev/docs/api/liquid/objects/variant#variant-image).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#featured_image)\n\n',
        scope: 'image'
      },
      image: {
        type: 'object',
        description: 'The image attached to the variant. \n\n**Note**\n\n> This is the same value as [`variant.featured_image`](https://shopify.dev/docs/api/liquid/objects/variant#variant-featured_image).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#image)\n\n',
        scope: 'image'
      },
      featured_media: {
        type: 'object',
        description: 'The first media object attached to the variant.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#featured_media)\n\n',
        scope: 'media'
      },
      incoming: {
        type: 'boolean',
        description: 'Returns `true` if the variant has incoming inventory. Returns `false` if not. Incoming inventory information is populated by [inventory transfers](https://help.shopify.com/manual/products/inventory/transfers).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#incoming)\n\n'
      },
      next_incoming_date: {
        type: 'string',
        description: 'The arrival date for the next incoming inventory of the variant. Incoming inventory information is populated by [inventory transfers](https://help.shopify.com/manual/products/inventory/transfers).\n\n\n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the date.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#next_incoming_date)\n\n'
      },
      store_availabilities: {
        type: 'array',
        description: "The store availabilities for the variant. The array is defined in only the following cases:\n\n- `variant.selected` is `true`\n- The variant is the product's first available variant. For example, `product.first_available_variant` or `product.selected_or_first_available_variant`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#store_availabilities)\n\n",
        scope: 'store_availability'
      },
      requires_selling_plan: {
        type: 'boolean',
        description: 'Returns `true` if the variant is set to require a `selling_plan` when being added to the cart. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/variant#requires_selling_plan)\n\n'
      }
    }
  },
  rating: {
    summary: 'Information for a [`rating` type](/apps/metafields/types) metafield.',
    description: 'Information for a [`rating` type](/apps/metafields/types) metafield. \n\n**Tip**\n\n> To learn about metafield types, refer to [Metafield types](/apps/metafields/types).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/rating)\n\n',
    type: 'object',
    properties: {
      rating: {
        type: 'number',
        description: 'The rating value.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/rating#rating)\n\n'
      },
      scale_min: {
        type: 'number',
        description: 'The minimum value of the rating scale.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/rating#scale_min)\n\n'
      },
      scale_max: {
        type: 'number',
        description: 'The maximum value of the rating scale.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/rating#scale_max)\n\n'
      }
    }
  },
  recipient: {
    summary: 'A recipient that is associated with a [gift card](https://help.shopify.com/manual/products/gift-card-products).',
    template: [
      'gift_card.liquid'
    ],
    description: 'A recipient that is associated with a [gift card](https://help.shopify.com/manual/products/gift-card-products).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/recipient)\n\n',
    type: 'object',
    properties: {
      nickname: {
        type: 'string',
        description: 'The nickname of the recipient.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/recipient#nickname)\n\n'
      },
      email: {
        type: 'string',
        description: 'The email of the recipient.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/recipient#email)\n\n'
      },
      name: {
        type: 'string',
        description: 'The full name of the recipient.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/recipient#name)\n\n'
      }
    }
  },
  recommendations: {
    summary: 'Product recommendations for a specific product based on sales data, product descriptions, and collection relationships.',
    description: 'Product recommendations for a specific product based on sales data, product descriptions, and collection relationships. Product recommendations become more accurate over time as new orders and product data become available. To learn more about\nhow product recommendations are generated, refer to [Product recommendations](/themes/product-merchandising/recommendations).\n\n\n\n**Note**\n\n> The `recommendations` object returns products only when rendered in a section using the [Product Recommendations API](/api/ajax/reference/product-recommendations)\n> and the [Section Rendering API](/api/section-rendering). To learn about how to include product recommendations in your theme,\n> refer to [Show product recommendations](/themes/product-merchandising/recommendations/show-product-recommendations).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/recommendations)\n\n',
    type: 'object',
    properties: {
      'performed?': {
        type: 'boolean',
        description: "Returns `true` when being referenced inside a section that's been rendered using the Product Recommendations API and\nthe Section Rendering API. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/recommendations#performed?)\n\n"
      },
      products: {
        type: 'array',
        description: 'The recommended products. If `performed?` is `false`, then an [EmptyDrop](https://shopify.dev/docs/api/liquid/basics#emptydrop) is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/recommendations#products)\n\n',
        scope: 'product'
      },
      products_count: {
        type: 'number',
        description: 'The number of recommended products. If `performed?` is `false`, then 0 is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/recommendations#products_count)\n\n'
      },
      intent: {
        type: 'string',
        description: 'The recommendation intent. If `performed?` is `false`, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/recommendations#intent)\n\n'
      }
    }
  },
  request: {
    summary: 'Information about the current URL and the associated page.',
    global: true,
    description: 'Information about the current URL and the associated page.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/request)\n\n',
    type: 'object',
    properties: {
      design_mode: {
        type: 'boolean',
        description: "Returns `true` if the request is being made from within the theme editor. Returns `false` if not. You can use `request.design_mode` to control theme behavior depending on whether the theme is being viewed in the editor.\nFor example, you can prevent session data from being tracked by tracking scripts in the theme editor.\n\n> Caution:\n> You shouldn't use `request.design_mode` to change customer-facing functionality. The theme editor preview should match\n> what the merchant's customers see on the live store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/request#design_mode)\n\n"
      },
      page_type: {
        type: 'string',
        description: 'The type of page being requested.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/request#page_type)\n\n',
        literal: [
          '404',
          'article',
          'blog',
          'captcha',
          'cart',
          'collection',
          'list-collections',
          'customers/account',
          'customers/activate_account',
          'customers/addresses',
          'customers/login',
          'customers/order',
          'customers/register',
          'customers/reset_password',
          'gift_card',
          'index',
          'page',
          'password',
          'policy',
          'product',
          'search'
        ]
      },
      host: {
        type: 'string',
        description: 'The domain that the request is hosted on.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/request#host)\n\n'
      },
      origin: {
        type: 'string',
        description: 'The protocol and host of the request.\n\n#### Example\n\nYou can use `request.origin` with any object, object property, or filter that returns a relative URL to build a context-aware absolute URL.\n\n\n```liquid\n\n{{ product.selected_variant.url | default: product.url | prepend: request.origin }}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/request#origin)\n\n'
      },
      path: {
        type: 'string',
        description: "The path of the request. \n\n**Note**\n\n> If the current path is for a page that doesn't exist, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/request#path)\n\n"
      },
      locale: {
        type: 'object',
        description: 'The locale of the request.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/request#locale)\n\n',
        scope: 'shop_locale'
      }
    }
  },
  robots: {
    summary: 'The default rule groups for the `robots.txt` file.',
    template: [
      'robots.txt.liquid'
    ],
    description: 'The default rule groups for the `robots.txt` file. \n\n**Tip**\n\n> You can [customize the `robots.txt` file](/themes/seo/robots-txt) with the [`robots.txt.liquid` template](/themes/architecture/templates/robots-txt-liquid).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/robots)\n\n',
    type: 'object',
    properties: {
      default_groups: {
        type: 'array',
        description: 'The rule groups.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/robots#default_groups)\n\n',
        scope: 'group'
      }
    }
  },
  group: {
    summary: 'A group of rules for the `robots.txt` file.',
    description: 'A group of rules for the `robots.txt` file. \n\n**Tip**\n\n> You can [customize the `robots.txt` file](/themes/seo/robots-txt) with the [`robots.txt.liquid` template](/themes/architecture/templates/robots-txt-liquid).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/group)\n\n',
    type: 'object',
    properties: {
      user_agent: {
        type: 'object',
        description: 'The user agent for the group.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/group#user_agent)\n\n',
        scope: 'user_agent'
      },
      rules: {
        type: 'array',
        description: 'The rules in the group.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/group#rules)\n\n',
        scope: 'rule'
      },
      sitemap: {
        type: 'object',
        description: "The sitemap for the group. If the group doesn't require a sitemap, then `blank` is returned.\n\nThe sitemap can be accessed at `/sitemap.xml`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/group#sitemap)\n\n",
        scope: 'sitemap'
      }
    }
  },
  rule: {
    summary: "A rule for the `robots.txt` file, which tells crawlers which pages can, or can't, be accessed.",
    description: "A rule for the `robots.txt` file, which tells crawlers which pages can, or can't, be accessed. A rule consists of a directive, which can be either `Allow` or `Disallow`, and a value of the associated URL path.\n\nFor example:\n\n```\nDisallow: /policies/\n```\n\nYou can output a rule directly, instead of referencing each of its properties.\n\n\n\n**Tip**\n\n> You can [customize the `robots.txt` file](/themes/seo/robots-txt) with the [`robots.txt.liquid` template](/themes/architecture/templates/robots-txt-liquid).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/rule)\n\n",
    type: 'object',
    properties: {
      directive: {
        type: 'string',
        description: 'The directive of the rule.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/rule#directive)\n\n'
      },
      value: {
        type: 'string',
        description: 'The value of the rule.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/rule#value)\n\n'
      }
    }
  },
  routes: {
    summary: 'Allows you to generate standard URLs for the storefront.',
    global: true,
    description: 'Allows you to generate standard URLs for the storefront. Using the `routes` object instead of hardcoding URLs helps ensure that your theme supports\n[multiple languages](/themes/internationalization/multiple-currencies-languages), as well as any possible changes in URL\nformat.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes)\n\n',
    type: 'object',
    properties: {
      root_url: {
        type: 'string',
        description: 'The index (home page) URL.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#root_url)\n\n'
      },
      account_url: {
        type: 'string',
        description: 'The [account page](https://help.shopify.com/manual/customers/customer-accounts) URL. Redirects to [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#account_url)\n\n'
      },
      account_login_url: {
        type: 'string',
        description: 'The [account login page](/themes/architecture/templates/customers-login) URL. Redirects to [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#account_login_url)\n\n'
      },
      account_logout_url: {
        type: 'string',
        description: 'The URL to log a customer out of their account. Redirects to [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#account_logout_url)\n\n'
      },
      account_recover_url: {
        type: 'string',
        description: 'The [password recovery page](/themes/architecture/templates/customers-reset-password) URL. Redirects to [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#account_recover_url)\n\n'
      },
      account_register_url: {
        type: 'string',
        description: 'The [account registration page](/themes/architecture/templates/customers-register) URL.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#account_register_url)\n\n'
      },
      account_addresses_url: {
        type: 'string',
        description: 'The [account addresses page](/themes/architecture/templates/customers-addresses) URL. Redirects to [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#account_addresses_url)\n\n'
      },
      collections_url: {
        type: 'string',
        description: 'The [collection list page](/themes/architecture/templates/list-collections) URL.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#collections_url)\n\n'
      },
      all_products_collection_url: {
        type: 'string',
        description: 'The all-products collection page URL. The all-products collection is automatically generated by Shopify and contains all products in the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#all_products_collection_url)\n\n'
      },
      search_url: {
        type: 'string',
        description: 'The [search page](/themes/architecture/templates/search) URL.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#search_url)\n\n'
      },
      predictive_search_url: {
        type: 'string',
        description: 'The [Predictive Search API](/api/ajax/reference/predictive-search) URL. \n\n**Tip**\n\n> To learn about how to support predictive search in your theme, refer to [Add predictive search to your theme](/themes/navigation-search/search/predictive-search).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#predictive_search_url)\n\n'
      },
      cart_url: {
        type: 'string',
        description: 'The [cart page](/themes/architecture/templates/cart) URL.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#cart_url)\n\n'
      },
      cart_add_url: {
        type: 'string',
        description: 'The URL for the [`/cart/add` Cart API endpoint](/api/ajax/reference/cart#post-locale-cart-add-js).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#cart_add_url)\n\n'
      },
      cart_change_url: {
        type: 'string',
        description: 'The URL for the [`/cart/change` Cart API endpoint](/api/ajax/reference/cart#post-locale-cart-change-js).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#cart_change_url)\n\n'
      },
      cart_clear_url: {
        type: 'string',
        description: 'The URL for the [`/cart/clear` Cart API endpoint](/api/ajax/reference/cart#post-locale-cart-clear-js).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#cart_clear_url)\n\n'
      },
      cart_update_url: {
        type: 'string',
        description: 'The URL for the [`/cart/update` Cart API endpoint](/api/ajax/reference/cart#post-locale-cart-update-js).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#cart_update_url)\n\n'
      },
      product_recommendations_url: {
        type: 'string',
        description: 'The [Product Recommendations API](https://shopify.dev/api/ajax/reference/product-recommendations) URL.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/routes#product_recommendations_url)\n\n'
      }
    }
  },
  script: {
    summary: 'Information about a Shopify Script.',
    description: 'Information about a Shopify Script. \n\n**Tip**\n\n> To learn more about Shopify Scripts and the Script Editor, visit the [Shopify Help Center](https://help.shopify.com/manual/checkout-settings/script-editor).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/script)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'The ID of the script.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/script#id)\n\n'
      },
      name: {
        type: 'string',
        description: 'The name of the script.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/script#name)\n\n'
      }
    }
  },
  search: {
    summary: 'Information about a storefront search query.',
    template: [
      'search'
    ],
    description: 'Information about a storefront search query. To learn about storefront search and how to include it in your theme, refer to [Storefront search](/themes/navigation-search/search).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/search)\n\n',
    type: 'object',
    properties: {
      terms: {
        type: 'string',
        description: 'The entered search terms. \n\n**Tip**\n\n> Use the [`highlight` filter](https://shopify.dev/docs/api/liquid/filters/highlight) to highlight the search terms in search result content.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/search#terms)\n\n'
      },
      filters: {
        type: 'array',
        description: 'The filters that have been set up on the search page. Only filters that are relevant to the current search results are returned. If the search results contain more than 1000\nproducts, then the array will be empty.\n\n\n\n**Tip**\n\n> To learn about how to set up filters in the admin, visit the [Shopify Help Center](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/search#filters)\n\n',
        scope: 'filter'
      },
      performed: {
        type: 'boolean',
        description: 'Returns `true` if a search was successfully performed. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/search#performed)\n\n'
      },
      results: {
        type: 'any',
        description: "The search result items. An item can be an [`article`](https://shopify.dev/docs/api/liquid/objects/article), a [`page`](/docs/api/liquid/objects/page), or a\n[`product`](https://shopify.dev/docs/api/liquid/objects/product).\n\n\n\n**Tip**\n\n> Use the [paginate](https://shopify.dev/docs/api/liquid/tags/paginate) tag to choose how many results to show per page, up to a limit of 50.\n\n#### Example\n\nSearch results have an additional `object_type` property that returns the object type of the result.\n\n```liquid\n\n{% for item in search.results %}\n<!-- Result {{ forloop.index }}-->\n<h3>\n  {{ item.title | link_to: item.url }}\n</h3>\n\n{% if item.object_type == 'article' -%}\n  {%- comment -%}\n     'item' is an article\n     All article object properties can be accessed.\n  {%- endcomment -%}\n\n  {% if item.image -%}\n    <div class=\"result-image\">\n      <a href=\"{{ item.url }}\" title=\"{{ item.title | escape }}\">\n        {{ item | image_url: width: 100 | image_tag }}\n       </a>\n    </div>\n   {% endif %}\n{%- elsif item.object_type == 'page' -%}\n  {%- comment -%}\n    'item' is a page.\n     All page object properties can be accessed.\n  {%- endcomment -%}\n{%- else -%}\n  {%- comment -%}\n     'item' is a product.\n     All product object properties can be accessed.\n  {%- endcomment -%}\n\n  {%- if item.featured_image -%}\n    <div class=\"result-image\">\n       <a href=\"{{ item.url }}\" title=\"{{ item.title | escape }}\">\n         {{ item.featured_image | image_url: width: 100 | image_tag }}\n      </a>\n    </div>\n  {% endif %}\n{%- endif -%}\n\n<span>{{ item.content | strip_html | truncatewords: 40 | highlight: search.terms }}</span>\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/search#results)\n\n"
      },
      results_count: {
        type: 'number',
        description: 'The number of results.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/search#results_count)\n\n'
      },
      sort_options: {
        type: 'array',
        description: 'The available sorting options for the search results.\n\n#### Example\n\n```liquid\n\n{%- assign sort_by = search.sort_by | default: search.default_sort_by -%}\n\n<select>\n{%- for option in search.sort_options %}\n  <option\n    value="{{ option.value }}"\n    {%- if option.value == sort_by %}\n      selected="selected"\n    {%- endif %}\n  >\n    {{ option.name }}\n  </option>\n{% endfor -%}\n</select>\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/search#sort_options)\n\n',
        scope: 'sort_option'
      },
      sort_by: {
        type: 22,
        description: "The sort order of the search results. This is determined by the `sort_by` URL parameter. If there's no `sort_by` URL parameter, then the value is `nil`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/search#sort_by)\n\n"
      },
      default_sort_by: {
        type: 'string',
        description: 'The default sort order of the search results, which is `relevance`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/search#default_sort_by)\n\n'
      },
      types: {
        type: 'array',
        description: 'The object types that the search was performed on. A search can be performed on the following object types:\n\n- [`article`](https://shopify.dev/docs/api/liquid/objects/article)\n- [`page`](https://shopify.dev/docs/api/liquid/objects/page)\n- [`product`](https://shopify.dev/docs/api/liquid/objects/product)\n\n\n\n**Note**\n\n> The types are determined by the `types` URL parameter.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/search#types)\n\n'
      }
    }
  },
  section: {
    summary: 'The properties and settings of a section.',
    description: 'The properties and settings of a section. \n\n**Tip**\n\n> To learn about sections and using them in a theme, refer to [Sections](/themes/architecture/sections).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/section)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of the section. The ID for sections included through [JSON templates](/themes/architecture/templates/json-templates) are dynamically\ngenerated by Shopify.\n\nThe ID for static sections is the section file name without the `.liquid` extension. For example, a `header.liquid`\nsection has an ID of `header`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/section#id)\n\n'
      },
      settings: {
        type: 'any',
        description: 'The [settings](https://shopify.dev/themes/architecture/sections/section-schema#settings) of the section. To learn about how to access settings, refer to [Access settings](/themes/architecture/settings#access-settings).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/section#settings)\n\n'
      },
      blocks: {
        type: 'array',
        description: 'The blocks of the section.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/section#blocks)\n\n',
        scope: 'block'
      }
    }
  },
  selling_plan_allocation: {
    summary: 'Information about how a specific [selling plan](/apps/subscriptions/selling-plans) affects a line item.',
    description: 'Information about how a specific [selling plan](/apps/subscriptions/selling-plans) affects a line item. To learn about how to support selling plans in your theme, refer to [Purchase options](/themes/pricing-payments/purchase-options).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation)\n\n',
    type: 'object',
    properties: {
      price: {
        type: 'number',
        description: "The price of the selling plan allocation in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#price)\n\n"
      },
      compare_at_price: {
        type: 'number',
        description: "The **compare at** price of the selling plan allocation in the currency's subunit. The value of the **compare at** price is the line item's price without the selling plan applied. If the price and compare\nat price are equal, then `nil` is returned.\n\nThe value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#compare_at_price)\n\n"
      },
      price_adjustments: {
        type: 'array',
        description: "The selling plan allocation price adjustments. The maximum length of the array is two. If the associated selling plan doesn't create any price adjustments, then the\narray is empty.\n\nEach `selling_plan_allocation_price_adjustment` maps to a [`selling_plan_price_adjustment`](https://shopify.dev/docs/api/liquid/objects/selling_plan_price_adjustment)\nin the [`selling_plan.price_adjustments` array](https://shopify.dev/docs/api/liquid/objects/selling_plan#selling_plan-price_adjustments). The\n`selling_plan.price_adjustments` array contains the intent of the selling plan, and the\n`selling_plan_allocation.price_adjustments` array contains the resulting money amounts.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#price_adjustments)\n\n",
        scope: 'selling_plan_allocation_price_adjustment'
      },
      unit_price: {
        type: 'number',
        description: "The [unit price](/docs/api/liquid/objects/variant#variant-unit_price) of the variant associated with the selling plan, in the currency's subunit. If the variant doesn't have a unit price, then `nil` is returned.\n\nThe value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#unit_price)\n\n"
      },
      per_delivery_price: {
        type: 'number',
        description: "The price for each delivery in the selling plan in the currency's subunit. If a selling plan includes multiple deliveries, then the `per_delivery_price` is the `price` divided by the number of\ndeliveries.\n\nThe value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#per_delivery_price)\n\n"
      },
      selling_plan: {
        type: 'object',
        description: 'The selling plan that created the allocation.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#selling_plan)\n\n',
        scope: 'selling_plan'
      },
      selling_plan_group_id: {
        type: 'string',
        description: 'The ID of the [`selling_plan_group`](/docs/api/liquid/objects/selling_plan_group) that the selling plan of the allocation belongs to.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#selling_plan_group_id)\n\n'
      },
      checkout_charge_amount: {
        type: 'number',
        description: "The amount that the customer will be charged at checkout in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#checkout_charge_amount)\n\n"
      },
      remaining_balance_charge_amount: {
        type: 'number',
        description: "The remaining amount for the customer to pay, in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#remaining_balance_charge_amount)\n\n"
      }
    }
  },
  selling_plan_allocation_price_adjustment: {
    summary: 'The resulting price from the intent of the associated [`selling_plan_price_adjustment`](/docs/api/liquid/objects/selling_plan_price_adjustment).',
    description: 'The resulting price from the intent of the associated [`selling_plan_price_adjustment`](/docs/api/liquid/objects/selling_plan_price_adjustment). To learn about how to support selling plans in your theme, refer to [Purchase options](/themes/pricing-payments/purchase-options).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation_price_adjustment)\n\n',
    type: 'object',
    properties: {
      position: {
        type: 'number',
        description: 'The 1-based index of the price adjustment in the\n[`selling_plan_allocation.price_adjustments` array](/docs/api/liquid/objects/selling_plan_allocation#selling_plan_allocation-price_adjustments).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation_price_adjustment#position)\n\n'
      },
      price: {
        type: 'number',
        description: "The price that will be charged for the price adjustment's lifetime, in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation_price_adjustment#price)\n\n"
      }
    }
  },
  selling_plan_checkout_charge: {
    summary: 'Information about how a specific [selling plan](/apps/subscriptions/selling-plans) affects the amount that a\ncustomer needs to pay for a line item at checkout.',
    description: 'Information about how a specific [selling plan](/apps/subscriptions/selling-plans) affects the amount that a\ncustomer needs to pay for a line item at checkout. To learn about how to support selling plans in your theme, refer to [Purchase options](/themes/pricing-payments/purchase-options).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_checkout_charge)\n\n',
    type: 'object',
    properties: {
      value_type: {
        type: 'string',
        description: 'The value type of the checkout charge.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_checkout_charge#value_type)\n\n',
        literal: [
          'percentage',
          'price'
        ]
      },
      value: {
        type: 'number',
        description: "The value of the checkout charge. How this value is interpreted depends on the [value type](https://shopify.dev/docs/api/liquid/objects/selling_plan_checkout_charge#selling_plan_checkout_charge-value_type) of\nthe checkout charge. The following table outlines what the value represents for each value type:\n\n| Value type | Value |\n| --- | --- |\n| `percentage` | The percent amount of the original price that the customer needs to pay.<br><br>For example, if the value is 50, then the customer needs to pay 50% of the original price. |\n| `price` | The amount that the customer needs to pay in the currency's subunit. |\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_checkout_charge#value)\n\n"
      }
    }
  },
  selling_plan: {
    summary: 'Information about the intent of how a specific [selling plan](/apps/subscriptions/selling-plans) affects a line item.',
    description: 'Information about the intent of how a specific [selling plan](/apps/subscriptions/selling-plans) affects a line item. To learn about how to support selling plans in your theme, refer to [Purchase options](/themes/pricing-payments/purchase-options).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'The ID of the selling plan.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan#id)\n\n'
      },
      name: {
        type: 'string',
        description: 'The name of the selling plan. \n\n**Note**\n\n> The name is shown at checkout with the line item summary.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan#name)\n\n'
      },
      description: {
        type: 'string',
        description: 'The description of the selling plan.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan#description)\n\n'
      },
      group_id: {
        type: 'string',
        description: 'The ID of the [`selling_plan_group`](/docs/api/liquid/objects/selling_plan_group) that the selling plan belongs to. \n\n**Note**\n\n> The name is shown at checkout with the line item summary.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan#group_id)\n\n'
      },
      recurring_deliveries: {
        type: 'boolean',
        description: 'Returns `true` if the selling plan includes multiple deliveries. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan#recurring_deliveries)\n\n'
      },
      options: {
        type: 'array',
        description: 'The selling plan options.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan#options)\n\n',
        scope: 'selling_plan_option'
      },
      price_adjustments: {
        type: 'array',
        description: "The selling plan price adjustments. The maximum length of the array is two. If the selling plan doesn't create any price adjustments, then the\narray is empty.\n\nEach `selling_plan_price_adjustment` maps to a [`selling_plan_allocation_price_adjustment`](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation_price_adjustment)\nin the [`selling_plan_allocation.price_adjustments` array](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#selling_plan_allocation-price_adjustments).\nThe `selling_plan.price_adjustments` array contains the intent of the selling plan, and the\n`selling_plan_allocation.price_adjustments` contains the resulting money amounts.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan#price_adjustments)\n\n",
        scope: 'selling_plan_price_adjustment'
      },
      selected: {
        type: 'boolean',
        description: 'Returns `true` if the selling plan is currently selected. Returns `false` if not. \n\n**Note**\n\n> The selected selling plan is determined by the `selling_plan` URL parameter.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan#selected)\n\n'
      },
      checkout_charge: {
        type: 'object',
        description: 'The checkout charge of the selling plan.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan#checkout_charge)\n\n',
        scope: 'selling_plan_checkout_charge'
      }
    }
  },
  selling_plan_group: {
    summary: "Information about a specific group of [selling plans](/apps/subscriptions/selling-plans) that include any of a\nproduct's variants.",
    description: "Information about a specific group of [selling plans](/apps/subscriptions/selling-plans) that include any of a\nproduct's variants. Selling plans are grouped based on shared [selling plan option names](https://shopify.dev/docs/api/liquid/objects/selling_plan_option#selling_plan_option-name).\n\nTo learn about how to support selling plans in your theme, refer to [Purchase options](/themes/pricing-payments/purchase-options).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_group)\n\n",
    type: 'object',
    properties: {
      selling_plans: {
        type: 'array',
        description: 'The selling plans in the group.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_group#selling_plans)\n\n',
        scope: 'selling_plan'
      },
      id: {
        type: 'number',
        description: 'The ID of the selling plan group.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_group#id)\n\n'
      },
      name: {
        type: 'number',
        description: 'The name of the selling plan group.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_group#name)\n\n'
      },
      app_id: {
        type: 'string',
        description: "An optional string provided by an app to identify selling plan groups created by that app. If the app doesn't provide a value, then `nil` is returned.\n\n\n\n**Tip**\n\n> You can use this property, with the [`where` filter](https://shopify.dev/docs/api/liquid/filters/where), to filter the\n> [`product.selling_plan_groups` array](https://shopify.dev/docs/api/liquid/objects/product#product-selling_plan_groups) for all selling plan groups\n> from a specific app.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_group#app_id)\n\n"
      },
      options: {
        type: 'array',
        description: 'The selling plan group options.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_group#options)\n\n',
        scope: 'selling_plan_group_option'
      },
      selling_plan_selected: {
        type: 'boolean',
        description: 'Returns `true` if the currently selected selling plan is part of the selling plan group. Returns `false` if not. \n\n**Note**\n\n> The selected selling plan is determined by the `selling_plan` URL parameter.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_group#selling_plan_selected)\n\n'
      }
    }
  },
  selling_plan_group_option: {
    summary: 'Information about a specific option in a [selling plan group](/docs/api/liquid/objects/selling_plan_group).',
    description: 'Information about a specific option in a [selling plan group](/docs/api/liquid/objects/selling_plan_group).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_group_option)\n\n',
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the option.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_group_option#name)\n\n'
      },
      position: {
        type: 'number',
        description: 'The 1-based index of the option in the [`selling_plan_group.options` array](/docs/api/liquid/objects/selling_plan_group#selling_plan_group-options).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_group_option#position)\n\n'
      },
      values: {
        type: 'array',
        description: 'The values of the option.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_group_option#values)\n\n'
      },
      selected_value: {
        type: 'string',
        description: 'The option value of the currently selected selling plan. If no selling plan is currently selected, then `nil` is returned.\n\n\n\n**Note**\n\n> The selected selling plan is determined by the `selling_plan` URL parameter.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_group_option#selected_value)\n\n'
      }
    }
  },
  selling_plan_option: {
    summary: "Information about a selling plan's value for a specific [`selling_plan_group_option`](/docs/api/liquid/objects/selling_plan_group_option).",
    description: "Information about a selling plan's value for a specific [`selling_plan_group_option`](/docs/api/liquid/objects/selling_plan_group_option). To learn about how to support selling plans in your theme, refer to [Purchase options](/themes/pricing-payments/purchase-options).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_option)\n\n",
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the associated `selling_plan_group_option`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_option#name)\n\n'
      },
      position: {
        type: 'number',
        description: 'The 1-based index of the selling plan option in the associated [`selling_plan_group.options` array](/docs/api/liquid/objects/selling_plan_group#selling_plan_group-options).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_option#position)\n\n'
      },
      value: {
        type: 'string',
        description: 'The value of the selling plan option. The value is one of the [`selling_plan_group_option.values`](https://shopify.dev/docs/api/liquid/objects/selling_plan_group_option#selling_plan_group_option-values).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/selling_plan_option#value)\n\n'
      }
    }
  },
  shipping_method: {
    summary: 'Information about the shipping method for an order.',
    description: 'Information about the shipping method for an order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shipping_method)\n\n',
    type: 'object',
    properties: {
      title: {
        type: 'string',
        description: "The title of the shipping method. In most contexts, the shipping method title appears in the customer's preferred language. However, in the context of an\n[order](https://shopify.dev/docs/api/liquid/objects/order), the shipping method title appears in the language that the customer checked out in.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shipping_method#title)\n\n"
      },
      original_price: {
        type: 'number',
        description: "The price of the shipping method in the currency's subunit, before discounts have been applied. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shipping_method#original_price)\n\n"
      },
      price: {
        type: 'number',
        description: "The price of the shipping method in the currency's subunit, after discounts have been applied. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shipping_method#price)\n\n"
      },
      handle: {
        type: 'string',
        description: 'The [handle](/docs/api/liquid/basics#handles) of the shipping method. \n\n**Note**\n\n> The price of the shipping method is appended to handle.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shipping_method#handle)\n\n'
      },
      id: {
        type: 'string',
        description: 'The ID of the shipping method.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shipping_method#id)\n\n'
      },
      tax_lines: {
        type: 'array',
        description: 'The tax lines for the shipping method.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shipping_method#tax_lines)\n\n',
        scope: 'tax_line'
      },
      discount_allocations: {
        type: 'array',
        description: 'The discount allocations that apply to the shipping method.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shipping_method#discount_allocations)\n\n',
        scope: 'discount_allocation'
      }
    }
  },
  shop: {
    summary: 'Information about the store, such as the store address, the total number of products, and various settings.',
    global: true,
    description: 'Information about the store, such as the store address, the total number of products, and various settings.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#id)\n\n'
      },
      name: {
        type: 'string',
        description: 'The name of the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#name)\n\n'
      },
      description: {
        type: 'string',
        description: 'The [description](https://help.shopify.com/manual/online-store/setting-up/preferences#edit-the-title-and-meta-description)\nof the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#description)\n\n'
      },
      enabled_currencies: {
        type: 'array',
        description: "The currencies that the store accepts. \n\n**Tip**\n\n> You can get the store's currency with [`shop.currency`](https://shopify.dev/docs/api/liquid/objects/shop#shop-currency).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#enabled_currencies)\n\n",
        scope: 'currency'
      },
      published_locales: {
        type: 'array',
        description: 'The locales (languages) that are published on the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#published_locales)\n\n',
        scope: 'shop_locale'
      },
      enabled_locales: {
        type: 'array',
        description: "⚠️ **DEPRECATED** ⚠️\n\nDeprecated because the name didn't make it clear that the returned locales were published.\n\nThe `shop.enabled_locales` property has been replaced by [`shop.published_locales`](/docs/api/liquid/objects/shop#shop-published_locales).\n\n---\n\nThe locales (languages) that are published on the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#enabled_locales)\n\n",
        scope: 'shop_locale'
      },
      locale: {
        type: 'object',
        description: '⚠️ **DEPRECATED** ⚠️\n\nDeprecated because this value is contextual to the request and not a property of the shop resource.\n\nThe `shop.locale` property has been replaced by [request.locale](/docs/api/liquid/objects/request#request-locale).\n\n---\n\nThe currently active locale (language).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#locale)\n\n',
        scope: 'shop_locale'
      },
      url: {
        type: 'string',
        description: 'The full URL of the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#url)\n\n'
      },
      email: {
        type: 'string',
        description: 'The [sender email](https://help.shopify.com/manual/intro-to-shopify/initial-setup/setup-your-email#change-your-sender-email-address)\nof the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#email)\n\n'
      },
      secure_url: {
        type: 'string',
        description: 'The full URL of the store, with an `https` protocol.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#secure_url)\n\n'
      },
      domain: {
        type: 'string',
        description: 'The primary domain of the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#domain)\n\n'
      },
      permanent_domain: {
        type: 'string',
        description: 'The `.myshopify.com` domain of the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#permanent_domain)\n\n'
      },
      phone: {
        type: 'string',
        description: 'The phone number of the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#phone)\n\n'
      },
      password_message: {
        type: 'string',
        description: 'The password page message of the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#password_message)\n\n'
      },
      address: {
        type: 'object',
        description: 'The address of the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#address)\n\n',
        scope: 'address'
      },
      customer_accounts_enabled: {
        type: 'boolean',
        description: 'Returns `true` if customer accounts are required to complete checkout. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#customer_accounts_enabled)\n\n'
      },
      customer_accounts_optional: {
        type: 'boolean',
        description: 'Returns `true` if customer accounts are optional to complete checkout. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#customer_accounts_optional)\n\n'
      },
      currency: {
        type: 'object',
        description: 'The currency of the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#currency)\n\n',
        scope: 'currency'
      },
      money_format: {
        type: 'object',
        description: 'The money format of the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#money_format)\n\n',
        scope: 'currency'
      },
      money_with_currency_format: {
        type: 'object',
        description: 'The money format of the store with the currency included.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#money_with_currency_format)\n\n',
        scope: 'currency'
      },
      metafields: {
        type: 22,
        description: 'The [metafields](/docs/api/liquid/objects/metafield) applied to the store. \n\n**Tip**\n\n> To learn about how to create metafields, refer to [Create and manage metafields](/apps/metafields/manage) or visit\n> the [Shopify Help Center](https://help.shopify.com/manual/metafields).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#metafields)\n\n'
      },
      enabled_payment_types: {
        type: 'string',
        description: "The accepted payment types on the store. The payment types are based on the store's enabled [payment providers](https://help.shopify.com/manual/payments) and\nthe customer's current region and currency.\n\n\n\n**Tip**\n\n> You can output an `svg` logo for each payment type with the [`payment_type_svg_tag` filter](https://shopify.dev/docs/api/liquid/filters/payment_type_svg_tag).\n> Alternatively, you can get the source URL for each `svg` with the [`payment_type_img_url` filter](https://shopify.dev/docs/api/liquid/filters/payment_type_img_url).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#enabled_payment_types)\n\n"
      },
      taxes_included: {
        type: 'boolean',
        description: "⚠️ **DEPRECATED** ⚠️\n\nDeprecated because whether or not prices have taxes included is dependent on the customer's country.\n\nThe `shop.taxes_included` property has been replaced by [cart.taxes_included](/docs/api/liquid/objects/cart#cart-taxes_included).\n\n---\n\nReturns `true` if prices include taxes. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#taxes_included)\n\n"
      },
      refund_policy: {
        type: 'object',
        description: 'The refund policy for the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#refund_policy)\n\n',
        scope: 'policy'
      },
      shipping_policy: {
        type: 'object',
        description: 'The shipping policy for the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#shipping_policy)\n\n',
        scope: 'policy'
      },
      privacy_policy: {
        type: 'object',
        description: 'The privacy policy for the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#privacy_policy)\n\n',
        scope: 'policy'
      },
      terms_of_service: {
        type: 'object',
        description: 'The terms of service for the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#terms_of_service)\n\n',
        scope: 'policy'
      },
      subscription_policy: {
        type: 'object',
        description: 'The subscription policy for the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#subscription_policy)\n\n',
        scope: 'policy'
      },
      policies: {
        type: 'array',
        description: "The policies for the store. The policies are set in the store's [Policies settings](https://www.shopify.com/admin/settings/legal).\n\n#### Example\n\n```liquid\n\n<ul>\n{%- for policy in shop.policies %}\n  <li>{{ policy.title }}</li>\n{%- endfor %}\n</ul>\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#policies)\n\n",
        scope: 'policy'
      },
      vendors: {
        type: 'array',
        description: 'All of the product vendors for the store.\n\n#### Example\n\n```liquid\n\n{% for vendor in shop.vendors %}\n  {{- vendor | link_to_vendor }}\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#vendors)\n\n'
      },
      types: {
        type: 'array',
        description: 'All of the product types in the store.\n\n#### Example\n\n```liquid\n\n{% for type in shop.types %}\n  {{- type | link_to_type }}\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#types)\n\n'
      },
      products_count: {
        type: 'number',
        description: 'The number of products in the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#products_count)\n\n'
      },
      collections_count: {
        type: 'number',
        description: 'The number of collections in the store.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#collections_count)\n\n'
      },
      accepts_gift_cards: {
        type: 'boolean',
        description: 'Returns `true` if the store accepts gift cards. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#accepts_gift_cards)\n\n'
      },
      metaobjects: {
        type: 22,
        description: 'All of the [metaobjects](/docs/api/liquid/objects/metaobject) of the store. Metaobjects can only be accessed by specifying their type and handle. For more information, refer to [Access metaobjects individually](https://shopify.dev/docs/api/liquid/objects#metaobject-access-metaobjects-individually).\n\nMetaobjects are created in the [Content](https://www.shopify.com/admin/content) page of the Shopify admin.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop#metaobjects)\n\n'
      }
    }
  },
  shop_locale: {
    summary: 'A language in a store.',
    description: 'A language in a store. To learn how to offer localization options in your theme, refer to [Support multiple currencies and languages](/themes/internationalization/multiple-currencies-languages).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop_locale)\n\n',
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: "The name of the locale in the store's primary locale.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop_locale#name)\n\n"
      },
      endonym_name: {
        type: 'string',
        description: 'The name of the locale in the locale itself.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop_locale#endonym_name)\n\n'
      },
      iso_code: {
        type: 'string',
        description: 'The ISO code of the locale in [IETF language tag format](https://en.wikipedia.org/wiki/IETF_language_tag).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop_locale#iso_code)\n\n'
      },
      primary: {
        type: 'boolean',
        description: "Returns `true` if the locale is the store's primary locale. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop_locale#primary)\n\n"
      },
      root_url: {
        type: 'string',
        description: 'The relative root URL of the locale.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/shop_locale#root_url)\n\n'
      }
    }
  },
  policy: {
    summary: 'A [store policy](https://help.shopify.com/manual/checkout-settings/refund-privacy-tos), such as a privacy or return policy.',
    description: 'A [store policy](https://help.shopify.com/manual/checkout-settings/refund-privacy-tos), such as a privacy or return policy.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/policy)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of the policy.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/policy#id)\n\n'
      },
      body: {
        type: 'string',
        description: 'The content of the policy.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/policy#body)\n\n'
      },
      url: {
        type: 'string',
        description: 'The relative URL of the policy.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/policy#url)\n\n'
      },
      title: {
        type: 'string',
        description: 'The title of the policy.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/policy#title)\n\n'
      }
    }
  },
  store_availability: {
    summary: "A variant's inventory information for a physical store location.",
    description: "A variant's inventory information for a physical store location. If a location doesn't stock a variant, then there won't be a `store_availability` for that variant and location.\n\n\n\n**Note**\n\n> The `store_availability` object is defined only if one or more locations has [local pickup](https://help.shopify.com/manual/shipping/setting-up-and-managing-your-shipping/local-methods/local-pickup)\n> enabled.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/store_availability)\n\n",
    type: 'object',
    properties: {
      available: {
        type: 'boolean',
        description: 'Returns `true` if the variant has available inventory at the location. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/store_availability#available)\n\n'
      },
      pick_up_enabled: {
        type: 'boolean',
        description: 'Returns `true` if the location has pickup enabled. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/store_availability#pick_up_enabled)\n\n'
      },
      pick_up_time: {
        type: 'string',
        description: 'The amount of time that it takes for pickup orders to be ready at the location. \n\n**Tip**\n\n> This value can be configured in the Shopify admin. To learn more, visit the [Shopify Help Center](https://help.shopify.com/en/manual/sell-in-person/shopify-pos/order-management/local-pickup-for-online-orders#manage-preferences-for-a-local-pickup-location).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/store_availability#pick_up_time)\n\n'
      },
      location: {
        type: 'object',
        description: 'The location that the variant is stocked at.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/store_availability#location)\n\n',
        scope: 'location'
      }
    }
  },
  tax_line: {
    summary: 'Information about a tax line of a checkout or order.',
    description: 'Information about a tax line of a checkout or order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tax_line)\n\n',
    type: 'object',
    properties: {
      title: {
        type: 'string',
        description: 'The title of the tax.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tax_line#title)\n\n'
      },
      price: {
        type: 'number',
        description: "The tax amount in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tax_line#price)\n\n"
      },
      rate: {
        type: 'number',
        description: 'The decimal value of the tax rate.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tax_line#rate)\n\n'
      },
      rate_percentage: {
        type: 'number',
        description: 'The decimal value of the tax rate, as a percentage.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/tax_line#rate_percentage)\n\n'
      }
    }
  },
  theme: {
    summary: 'Information about the current theme.',
    global: true,
    deprecated: true,
    description: "⚠️ **DEPRECATED** ⚠️\n\nDeprecated because the values of this object's properties are subject to change, so can't be relied on within the theme.\n\nIf you want to link to the theme editor for the published theme, then you can use the URL path `/admin/themes/current/editor`.\n\nWhile this object is deprecated in Liquid and shouldn't be used, you can still access it through the [REST Admin API](/api/admin-rest/current/resources/theme).\n\n---\n\nInformation about the current theme.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/theme)\n\n",
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'The ID of the theme.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/theme#id)\n\n',
        deprecated: true
      },
      name: {
        type: 'string',
        description: 'The name of the theme.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/theme#name)\n\n',
        deprecated: true
      },
      role: {
        type: 'string',
        description: 'The role of the theme.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/theme#role)\n\n',
        deprecated: true,
        literal: [
          'main',
          'unpublished',
          'demo',
          'development'
        ]
      }
    }
  },
  settings: {
    summary: "Allows you to access all of the theme's settings from the [`settings_schema.json` file](/themes/architecture/config/settings-schema-json).",
    global: true,
    description: "Allows you to access all of the theme's settings from the [`settings_schema.json` file](/themes/architecture/config/settings-schema-json). \n\n**Tip**\n\n> To learn about the available setting types, refer to [Input settings](/themes/architecture/settings/input-settings).\n\n#### Example\n\n```liquid\n\n{% if settings.favicon != blank %}\n  <link rel=\"icon\" type=\"image/png\" href=\"{{ settings.favicon | image_url: width: 32, height: 32 }}\">\n{% endif %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/settings)\n\n",
    const: true
  },
  template: {
    summary: 'Information about the current template.',
    global: true,
    description: 'Information about the current template.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/template)\n\n',
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: "The name of the template's [type](/themes/architecture/templates#template-types).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/template#name)\n\n",
        literal: [
          '404',
          'article',
          'blog',
          'cart',
          'collection',
          'list-collections',
          'customers/account',
          'customers/activate_account',
          'customers/addresses',
          'customers/login',
          'customers/order',
          'customers/register',
          'customers/reset_password',
          'gift_card',
          'index',
          'page',
          'password',
          'product',
          'search'
        ]
      },
      suffix: {
        type: 'string',
        description: 'The custom name of an [alternate template](/themes/architecture/templates#alternate-templates). Returns `nil` if the default template is being used.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/template#suffix)\n\n'
      },
      directory: {
        type: 'string',
        description: "The name of the template's parent directory. Returns `nil` if the template's parent directory is `/templates`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/template#directory)\n\n"
      }
    }
  },
  transaction: {
    summary: 'A transaction associated with a checkout or order.',
    description: 'A transaction associated with a checkout or order.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction)\n\n',
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'The ID of the transaction.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#id)\n\n'
      },
      name: {
        type: 'string',
        description: 'The name of the transaction.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#name)\n\n'
      },
      status: {
        type: 'string',
        description: 'The status of the transaction.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#status)\n\n',
        literal: [
          'success',
          'pending',
          'failure',
          'error'
        ]
      },
      created_at: {
        type: 'string',
        description: 'A timestamp of when the transaction was created. \n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#created_at)\n\n'
      },
      receipt: {
        type: 'string',
        description: 'Information from the payment provider about the payment receipt. This includes things like whether the payment was a test, or an authorization code if there was one.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#receipt)\n\n'
      },
      kind: {
        type: 'string',
        description: 'The type of transaction.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#kind)\n\n',
        literal: [
          'authorization',
          'capture',
          'sale',
          'void',
          'refund'
        ]
      },
      gateway: {
        type: 'string',
        description: 'The [handleized](/docs/api/liquid/basics#modifying-handles) name of the payment provider used for the transaction.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#gateway)\n\n'
      },
      status_label: {
        type: 'string',
        description: 'The status of the transaction, translated based on the current locale.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#status_label)\n\n'
      },
      payment_details: {
        type: 'object',
        description: 'The transaction payment details.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#payment_details)\n\n',
        scope: 'transaction_payment_details'
      },
      amount: {
        type: 'string',
        description: "The amount of the transaction in the currency's subunit. The amount is in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#amount)\n\n"
      },
      gateway_display_name: {
        type: 'string',
        description: 'The name of the payment provider used for the transaction.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#gateway_display_name)\n\n'
      },
      'show_buyer_pending_payment_instructions?': {
        type: 'boolean',
        description: 'Whether the transaction is pending, and whether additional customer info is required to process the payment.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#show_buyer_pending_payment_instructions?)\n\n'
      },
      buyer_pending_payment_notice: {
        type: 'string',
        description: 'A notice that contains instructions for the customer on how to complete their payment.\nThe messages are specific to the payment method used.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#buyer_pending_payment_notice)\n\n'
      },
      buyer_pending_payment_instructions: {
        type: 'array',
        description: 'A list of `pending_payment_instruction_input` header-value pairs, with payment method-specific details.\nThe customer can use these details to complete their purchase offline.\n\nIf the payment method doesn’t support pending payment instructions, then an empty array is returned.\n\n| Supported payment method | Expected Values |\n| --- | ----------- |\n| ShopifyPayments - Multibanco | [{header="Entity", value="12345"}, {header="Reference", value="999999999"}] |\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction#buyer_pending_payment_instructions)\n\n',
        scope: 'pending_payment_instruction_input'
      }
    }
  },
  unit_price_measurement: {
    summary: "Information about how units of a product variant are measured. It's used to calculate\n[unit prices](https://help.shopify.com/manual/intro-to-shopify/initial-setup/sell-in-france/price-per-unit#add-unit-prices-to-your-product).",
    description: "Information about how units of a product variant are measured. It's used to calculate\n[unit prices](https://help.shopify.com/manual/intro-to-shopify/initial-setup/sell-in-france/price-per-unit#add-unit-prices-to-your-product). \n\n**Note**\n\n> Unit prices are available only to stores located in Germany and France.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/unit_price_measurement)\n\n",
    type: 'object',
    properties: {
      measured_type: {
        type: 'string',
        description: 'The type of unit measurement.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/unit_price_measurement#measured_type)\n\n',
        literal: [
          'volume',
          'weight',
          'dimension'
        ]
      },
      quantity_value: {
        type: 'number',
        description: 'The quantity of the unit.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/unit_price_measurement#quantity_value)\n\n'
      },
      quantity_unit: {
        type: 'string',
        description: 'The unit of measurement used to measure the [`quantity_value`](/docs/api/liquid/objects/unit_price_measurement#unit_price_measurement-quantity_value).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/unit_price_measurement#quantity_unit)\n\n'
      },
      reference_value: {
        type: 'number',
        description: 'The quantity of the unit for the base unit price.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/unit_price_measurement#reference_value)\n\n'
      },
      reference_unit: {
        type: 'string',
        description: 'The unit of measurement used to measure the [`reference_value`](/docs/api/liquid/objects/unit_price_measurement#unit_price_measurement-reference_value).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/unit_price_measurement#reference_unit)\n\n'
      }
    }
  },
  user: {
    summary: 'The author of a blog article.',
    description: 'The author of a blog article. \n\n**Tip**\n\n> The information returned by the `user` object can be edited on the [**Account** page](https://www.shopify.com/admin/settings/account)\n> of the Shopify admin.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/user)\n\n',
    type: 'object',
    properties: {
      account_owner: {
        type: 'boolean',
        description: 'Returns `true` if the author is the account owner of the store. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/user#account_owner)\n\n'
      },
      bio: {
        type: 'string',
        description: "The bio associated with the author's account. If no bio is specified, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/user#bio)\n\n"
      },
      email: {
        type: 'string',
        description: "The email associated with the author's account.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/user#email)\n\n"
      },
      first_name: {
        type: 'string',
        description: "The first name associated with the author's account.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/user#first_name)\n\n"
      },
      homepage: {
        type: 'string',
        description: "The URL for the personal website associated with the author's account. If no personal website is specified, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/user#homepage)\n\n"
      },
      image: {
        type: 'object',
        description: "The image associated with the author's account. If no image is specified, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/user#image)\n\n",
        scope: 'image'
      },
      last_name: {
        type: 'string',
        description: "The last name associated with the author's account.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/user#last_name)\n\n"
      },
      name: {
        type: 'string',
        description: "The first and last name associated with the author's account.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/user#name)\n\n"
      }
    }
  },
  video: {
    summary: 'Information about a video uploaded as [product media](/docs/api/liquid/objects/product-media) or a [`file_reference` metafield](/apps/metafields/types).',
    description: 'Information about a video uploaded as [product media](/docs/api/liquid/objects/product-media) or a [`file_reference` metafield](/apps/metafields/types). \n\n**Tip**\n\n> Use the [`video_tag` filter](https://shopify.dev/docs/api/liquid/filters/video_tag) to output the video in an HTML `<video>` tag.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video)\n\n',
    type: 'object',
    properties: {
      sources: {
        type: 'array',
        description: 'The source files for the video.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video#sources)\n\n',
        scope: 'video_source'
      },
      duration: {
        type: 'number',
        description: 'The duration of the video in milliseconds.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video#duration)\n\n'
      },
      aspect_ratio: {
        type: 'number',
        description: 'The aspect ratio of the video as a decimal.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video#aspect_ratio)\n\n'
      },
      alt: {
        type: 'string',
        description: 'The alt text of the video.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video#alt)\n\n'
      },
      id: {
        type: 'number',
        description: 'The ID of the video.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video#id)\n\n'
      },
      media_type: {
        type: 'string',
        description: "The media type of the model. Always returns `video`.\n\n#### Example\n\nYou can use the `media_type` property with the [`where` filter](/docs/api/liquid/filters/where) to filter the [`product.media` array](/docs/api/liquid/objects/product#product-media) for all media of a desired type.\n\n\n```liquid\n\n{% assign videos = product.media | where: 'media_type', 'video' %}\n\n{% for video in videos %}\n  {{- video | video_tag }}\n{% endfor %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video#media_type)\n\n"
      },
      position: {
        type: 'number',
        description: 'The position of the video in the [`product.media`](/docs/api/liquid/objects/product#product-media) array.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video#position)\n\n'
      },
      preview_image: {
        type: 'object',
        description: 'A preview image for the video.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video#preview_image)\n\n',
        scope: 'image'
      }
    }
  },
  video_source: {
    summary: 'Information about the source files for a video.',
    description: 'Information about the source files for a video.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video_source)\n\n',
    type: 'object',
    properties: {
      width: {
        type: 'number',
        description: 'The width of the video source file.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video_source#width)\n\n'
      },
      format: {
        type: 'string',
        description: "The format of the video source file. \n\n**Note**\n\n> When mp4 videos are uploaded, Shopify generates an m3u8 file as an additional video source. An m3u8 file enables video\n> players to leverage HTTP live streaming (HLS), resulting in an optimized video experience based on the user's internet\n> connection.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video_source#format)\n\n",
        literal: [
          'mov',
          'mp4',
          'm3u8'
        ]
      },
      height: {
        type: 'number',
        description: 'The height of the video source file.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video_source#height)\n\n'
      },
      mime_type: {
        type: 'string',
        description: 'The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the video source file.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video_source#mime_type)\n\n'
      },
      url: {
        type: 'string',
        description: 'The [CDN URL](/themes/best-practices/performance/platform#shopify-cdn) of the video source file.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/video_source#url)\n\n'
      }
    }
  },
  additional_checkout_buttons: {
    summary: 'Returns `true` if a store has any payment providers with offsite checkouts, such as PayPal Express Checkout.',
    global: true,
    description: 'Returns `true` if a store has any payment providers with offsite checkouts, such as PayPal Express Checkout. Use `additional_checkout_buttons` to check whether these payment providers exist, and\n[`content_for_additional_checkout_buttons`](https://shopify.dev/docs/api/liquid/objects/content_for_additional_checkout_buttons)\nto show the associated checkout buttons. To learn more about how to use these objects, refer to\n[Accelerated checkout](/themes/pricing-payments/accelerated-checkout).\n\n```liquid\n{% if additional_checkout_buttons %}\n  {{ content_for_additional_checkout_buttons }}\n{% endif %}\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/additional_checkout_buttons)\n\n',
    type: 'boolean',
    const: true
  },
  all_country_option_tags: {
    summary: 'Creates an `&lt;option&gt;` tag for each country.',
    global: true,
    description: "Creates an `&lt;option&gt;` tag for each country. An attribute called `data-provinces` is set for each `<option>`, and contains a JSON-encoded array of the\ncountry or region's subregions. If a country doesn't have any subregions, then an empty array is set for\nits `data-provinces` attribute.\n\n\n\n**Tip**\n\n> To return only the countries and regions included in the store's shipping zones, use the [`country_option_tags` object](https://shopify.dev/docs/api/liquid/objects/country_option_tags).\n\n#### \n\nYou can wrap the `all_country_option_tags` object in `<select>` tags to build a country option selector.\n\n```liquid\n<select name=\"country\">\n  {{ all_country_option_tags }}\n</select>\n```\n\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/all_country_option_tags)\n\n",
    type: 'string',
    const: true
  },
  canonical_url: {
    summary: 'The canonical URL for the current page.',
    global: true,
    description: "The canonical URL for the current page. To learn about canonical URLs, refer to [Google's documentation](https://support.google.com/webmasters/answer/139066?hl=en).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/canonical_url)\n\n",
    type: 'string',
    const: true
  },
  checkout: {
    summary: "A customer's checkout.",
    template: [
      'checkout'
    ],
    description: "A customer's checkout.\n\n> Deprecated:\n> <p>The <code>checkout</code> object will be deprecated for the Information, Shipping, and Payment pages on August 13, 2024. Merchants who have customized these pages using <code>checkout.liquid</code> to <a href=\"https://help.shopify.com/manual/online-store/themes/theme-structure/extend/checkout-migration#migrate-to-checkout-extensibility\">upgrade to checkout extensibility</a> before August 13, 2024.</p>\n> <p>Learn <a href=\"/apps/checkout\">how to build checkout extensions</a> that extend the functionality of Shopify checkout.</p>\n\nYou can access the `checkout` object on the [order status page](https://help.shopify.com/manual/orders/status-tracking/customize-order-status).\n\nShopify Plus merchants can access the `checkout` object in the [`checkout.liquid` layout](/themes/architecture/layouts/checkout-liquid).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout)\n\n",
    type: 'object',
    properties: {
      applied_gift_cards: {
        type: 'array',
        description: 'The gift cards applied to the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#applied_gift_cards)\n\n',
        scope: 'gift_card'
      },
      attributes: {
        type: 'any',
        description: 'Additional attributes entered by the customer with the [cart](/docs/api/liquid/objects/cart#cart-attributes). Shopify Plus merchants that have access to `checkout.liquid` can [capture attributes at checkout](/themes/architecture/layouts/checkout-liquid#capture-checkout-attributes).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#attributes)\n\n'
      },
      billing_address: {
        type: 'object',
        description: 'The billing address entered at checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#billing_address)\n\n',
        scope: 'address'
      },
      buyer_accepts_marketing: {
        type: 'boolean',
        description: 'Returns `true` if the customer checks the email marketing subscription checkbox. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#buyer_accepts_marketing)\n\n'
      },
      cancelled: {
        type: 'boolean',
        description: '⚠️ **DEPRECATED** ⚠️\n\nDeprecated because `false` is always returned.\n\n---\n\nReturns `true` if the checkout has been cancelled. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#cancelled)\n\n'
      },
      cart_level_discount_applications: {
        type: 'array',
        description: 'The cart-specific discount applications for the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#cart_level_discount_applications)\n\n',
        scope: 'discount_application'
      },
      currency: {
        type: 'string',
        description: 'The [ISO code](https://www.iso.org/iso-4217-currency-codes.html) of the currency of the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#currency)\n\n'
      },
      customer: {
        type: 'object',
        description: 'The customer associated with the checkout.\n&gt; Note:\n&gt; The `customer` object is available only on the Thank You and Order Status [pages](https://help.shopify.com/manual/orders/status-tracking).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#customer)\n\n',
        scope: 'customer'
      },
      discount: {
        type: 'object',
        description: "⚠️ **DEPRECATED** ⚠️\n\nDeprecated because an unsaved discount doesn't exist on the [Order status page](https://help.shopify.com/manual/orders/status-tracking).\n\n---\n\nA discount applied to the checkout without being saved.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#discount)\n\n",
        scope: 'discount'
      },
      discounts: {
        type: 'array',
        description: '⚠️ **DEPRECATED** ⚠️\n\nDeprecated because not all discount types and details are captured.\n\nThe `checkout.discounts` property has been replaced by [`checkout.discount_applications`](/docs/api/liquid/objects/checkout#checkout-discount_applications).\n\n---\n\nThe discounts applied to the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#discounts)\n\n',
        scope: 'discount'
      },
      discount_applications: {
        type: 'array',
        description: 'The discount applications for the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#discount_applications)\n\n',
        scope: 'discount_application'
      },
      discounts_amount: {
        type: 'array',
        description: "The total amount of the discounts applied to the checkout in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#discounts_amount)\n\n",
        scope: 'discount_application'
      },
      discounts_savings: {
        type: 'array',
        description: "The total amount of the discounts applied to the checkout in the currency's subunit, as a negative value. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#discounts_savings)\n\n",
        scope: 'discount_application'
      },
      email: {
        type: 'string',
        description: 'The email associated with the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#email)\n\n'
      },
      financial_status: {
        type: 'string',
        description: '⚠️ **DEPRECATED** ⚠️\n\nDeprecated because `nil` is always returned.\n\n---\n\nThe financial status of the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#financial_status)\n\n'
      },
      fulfilled_at: {
        type: 'string',
        description: '⚠️ **DEPRECATED** ⚠️\n\nDeprecated because `nil` is always returned.\n\n---\n\nA timestamp for the fulfullment of the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#fulfilled_at)\n\n'
      },
      fulfilled_line_items: {
        type: 'array',
        description: '⚠️ **DEPRECATED** ⚠️\n\nDeprecated because the array is always empty.\n\n---\n\nThe fulfilled line items from the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#fulfilled_line_items)\n\n',
        scope: 'line_item'
      },
      fulfillment_status: {
        type: 'string',
        description: '⚠️ **DEPRECATED** ⚠️\n\nDeprecated because `unfulfilled` is always returned.\n\n---\n\nThe fulfillment status of the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#fulfillment_status)\n\n'
      },
      gift_cards_amount: {
        type: 'string',
        description: "The amount of the checkout price paid in gift cards. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#gift_cards_amount)\n\n"
      },
      id: {
        type: 'number',
        description: 'The ID of the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#id)\n\n'
      },
      line_items: {
        type: 'array',
        description: 'The line items of the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#line_items)\n\n',
        scope: 'line_item'
      },
      line_items_subtotal_price: {
        type: 'number',
        description: "The sum of the prices of all of the line items of the checkout in the currency's subunit, after any line item discounts\nhave been applied. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#line_items_subtotal_price)\n\n"
      },
      name: {
        type: 'number',
        description: 'The name of the checkout. This value is the same as [`checkout.id`](https://shopify.dev/docs/api/liquid/objects/checkout#checkout-id) with a `#` prepended to it.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#name)\n\n'
      },
      note: {
        type: 'string',
        description: 'Additional information entered by the customer with the [cart](/docs/api/liquid/objects/cart#cart-note).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#note)\n\n'
      },
      order: {
        type: 'object',
        description: "The order created by the checkout. Depending on the payment provider, the order might not have been created when the [Thank You page](https://help.shopify.com/en/manual/orders/status-tracking)\nis first viewed. In this case, `nil` is returned.\n\n\n**Note**\n\n> The `order` object isn't available on the Thank You page.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#order)\n\n",
        scope: 'order'
      },
      order_id: {
        type: 'string',
        description: 'The ID of the order created by the checkout. The value is the same as [`order.id`](https://shopify.dev/docs/api/liquid/objects/order#order-id).\n\nDepending on the payment provider, the order might not have been created when the [Order status page](https://help.shopify.com/en/manual/orders/status-tracking)\nis first viewed. In this case, `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#order_id)\n\n'
      },
      order_name: {
        type: 'string',
        description: 'The name of the order created by the checkout. The value is the same as [`order.name`](https://shopify.dev/docs/api/liquid/objects/order#order-name).\n\nDepending on the payment provider, the order might not have been created when the [Order status page](https://help.shopify.com/en/manual/orders/status-tracking)\nis first viewed. In this case, `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#order_name)\n\n'
      },
      order_number: {
        type: 'string',
        description: 'An integer representation of the name of the order created by the checkout. The value is the same as [`order.order_number`](https://shopify.dev/docs/api/liquid/objects/order#order-order_number).\n\nDepending on the payment provider, the order might not have been created when the [Order status page](https://help.shopify.com/en/manual/orders/status-tracking)\nis first viewed. In this case, `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#order_number)\n\n'
      },
      requires_shipping: {
        type: 'boolean',
        description: 'Returns `true` if any of the line items of the checkout require shipping. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#requires_shipping)\n\n'
      },
      shipping_address: {
        type: 'object',
        description: 'The shipping address of the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#shipping_address)\n\n',
        scope: 'address'
      },
      shipping_method: {
        type: 'object',
        description: 'The shipping method of the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#shipping_method)\n\n',
        scope: 'shipping_method'
      },
      shipping_price: {
        type: 'number',
        description: "The shipping price of the checkout in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#shipping_price)\n\n"
      },
      tax_lines: {
        type: 'array',
        description: 'The tax lines for the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#tax_lines)\n\n',
        scope: 'tax_line'
      },
      tax_price: {
        type: 'number',
        description: "The total tax amount of the checkout in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#tax_price)\n\n"
      },
      total_price: {
        type: 'number',
        description: "The total price of the checkout in the currency's subunit. The value is output in the customer's local (presentment) currency.\n\n\n\n**Tip**\n\n> Use [money filters](https://shopify.dev/docs/api/liquid/filters/money-filters) to output a formatted amount.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#total_price)\n\n"
      },
      transactions: {
        type: 'array',
        description: 'The transactions of the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#transactions)\n\n',
        scope: 'transaction'
      },
      unavailable_line_items: {
        type: 'array',
        description: '⚠️ **DEPRECATED** ⚠️\n\nDeprecated because the array is always empty.\n\n---\n\nThe unavailable line items of the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#unavailable_line_items)\n\n',
        scope: 'line_item'
      },
      unfulfilled_line_items: {
        type: 'array',
        description: '⚠️ **DEPRECATED** ⚠️\n\nDeprecated because the array is always the same as [`checkout.line_items`](/docs/api/liquid/objects/checkout#checkout-line_items).\n\n---\n\nThe unfulfilled line items of the checkout.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/checkout#unfulfilled_line_items)\n\n',
        scope: 'line_item'
      }
    }
  },
  comment: {
    summary: 'An article comment.',
    description: 'An article comment.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/comment)\n\n',
    type: 'object',
    properties: {
      author: {
        type: 'string',
        description: 'The full name of the author of the comment.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/comment#author)\n\n'
      },
      content: {
        type: 'string',
        description: 'The content of the comment.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/comment#content)\n\n'
      },
      created_at: {
        type: 'string',
        description: 'A timestamp for when the comment was created. \n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/comment#created_at)\n\n'
      },
      email: {
        type: 'string',
        description: 'The email of he author of the comment.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/comment#email)\n\n'
      },
      id: {
        type: 'number',
        description: 'The ID of the comment.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/comment#id)\n\n'
      },
      status: {
        type: 'string',
        description: 'The status of the comment. Always returns `published`. Outside of the Liquid context, the status of a comment can vary based on spam detection and whether blog comments are\nmoderated. However, only comments with a status of `published` are included in the [`article.comments` array](https://shopify.dev/docs/api/liquid/objects/article#article-comments).\n\n\n\n**Tip**\n\n> To learn more about blog comments, visit the [Shopify Help Center](https://help.shopify.com/manual/online-store/blogs/managing-comments).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/comment#status)\n\n'
      },
      updated_at: {
        type: 'string',
        description: 'A timestamp for when the status of the comment was last updated. \n\n**Tip**\n\n> Use the [`date` filter](https://shopify.dev/docs/api/liquid/filters/date) to format the timestamp.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/comment#updated_at)\n\n'
      },
      url: {
        type: 'string',
        description: 'The relative URL of the article that the comment is associated with, with [`comment.id`](/docs/api/liquid/objects/comment#comment-id)\nappended.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/comment#url)\n\n'
      }
    }
  },
  content_for_additional_checkout_buttons: {
    summary: 'Returns checkout buttons for any active payment providers with offsite checkouts.',
    global: true,
    description: 'Returns checkout buttons for any active payment providers with offsite checkouts. Use [`additional_checkout_buttons`](https://shopify.dev/docs/api/liquid/objects/additional_checkout_buttons)\nto check whether these payment providers exist, and `content_for_additional_checkout_buttons`\nto show the associated checkout buttons. To learn more about how to use these objects, refer to\n[Accelerated checkout](/themes/pricing-payments/accelerated-checkout).\n\n```liquid\n{% if additional_checkout_buttons %}\n  {{ content_for_additional_checkout_buttons }}\n{% endif %}\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/content_for_additional_checkout_buttons)\n\n',
    type: 'string',
    const: true
  },
  content_for_index: {
    summary: 'Dynamically returns the content of [sections](/themes/architecture/sections) to be rendered on the home page.',
    global: true,
    description: "Dynamically returns the content of [sections](/themes/architecture/sections) to be rendered on the home page. If you use a [Liquid index template](/themes/architecture/templates/index-template) (`templates/index.liquid`), then you must include `{{ content_for_index }}` in the template. This object can't be used in JSON index templates.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/content_for_index)\n\n",
    type: 'string',
    const: true
  },
  content_for_layout: {
    summary: 'Dynamically returns content based on the current [template](/themes/architecture/templates).',
    global: true,
    description: 'Dynamically returns content based on the current [template](/themes/architecture/templates). Include the `content_for_layout` object in your [layout files](/themes/architecture/layouts) between the `<body>` and\n`</body>` HTML tags.\n\n\n\n**Note**\n\n> The `content_for_layout` object is required in `theme.liquid`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/content_for_layout)\n\n',
    type: 'string',
    const: true
  },
  country_option_tags: {
    summary: "Creates an `&lt;option&gt;` tag for each country and region that's included in a shipping zone on the [Shipping](https://www.shopify.com/admin/settings/shipping) page of the Shopify admin.",
    global: true,
    description: "Creates an `&lt;option&gt;` tag for each country and region that's included in a shipping zone on the [Shipping](https://www.shopify.com/admin/settings/shipping) page of the Shopify admin. An attribute called `data-provinces` is set for each `<option>`, and contains a JSON-encoded array of the\ncountry or region's subregions. If a country doesn't have any subregions, then an empty array is set for its\n`data-provinces` attribute.\n\n\n\n**Tip**\n\n> To return all countries and regions included in the store's shipping zones, use [`all_country_option_tags`](https://shopify.dev/docs/api/liquid/objects/all_country_option_tags).\n\n#### \n\nYou can wrap the `country_option_tags` object in `<select>` tags to build a country option selector.\n\n```liquid\n\n<select name=\"country\">\n  {{ country_option_tags }}\n</select>\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/country_option_tags)\n\n",
    type: 'string',
    const: true
  },
  current_page: {
    summary: 'The current page number.',
    global: true,
    description: 'The current page number. The `current_page` object has a value of 1 for non-paginated resources.\n\n#### \n\n```liquid\n\n{{ page_title }}{% unless current_page == 1 %} - Page {{ current_page }}{% endunless %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/current_page)\n\n',
    type: 'number',
    const: true
  },
  current_tags: {
    summary: 'The currently applied tags.',
    template: [
      'blog',
      'collection'
    ],
    description: 'The currently applied tags. You can [add tags](https://help.shopify.com/en/manual/shopify-admin/productivity-tools/using-tags) to articles and\nproducts. Article tags can be used to [filter a blog page](/themes/architecture/templates/blog#filter-articles-by-tag)\nto show only articles with specific tags. Similarly, product tags can be used to [filter a collection page](/themes/navigation-search/filtering/tag-filtering)\nto show only products with specific tags.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/current_tags)\n\n',
    type: 'array'
  },
  form_errors: {
    summary: 'The error category strings for errors from a form created by a [`form` tag](/docs/api/liquid/tags/form).',
    description: "The error category strings for errors from a form created by a [`form` tag](/docs/api/liquid/tags/form). The following table outlines the strings that can be returned and the reason that they would be:\n\n| Form property name | Return reason |\n| --- | --- |\n| `author` | There were issues with required name fields. |\n| `body` | There were issues with required text content fields. |\n| `email` | There were issues with required email fields. |\n| `form` | There were general issues with the form. |\n| `password` | There were issues with required password fields. |\n\n#### Example\n\nYou can output the name of the field related to the error, and the error message, by using the error as a key to access the `translated_fields` and `messages` properties.\n\n```liquid\n<ul>\n  {% for error in form.errors %}\n    <li>\n      {% if error == 'form' %}\n        {{ form.errors.messages[error] }}\n      {% else %}\n        {{ form.errors.translated_fields[error] }} - {{ form.errors.messages[error] }}\n      {% endif %}\n    </li>\n  {% endfor %}\n</ul>\n```\n\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form_errors)\n\n",
    type: 'object',
    properties: {
      messages: {
        type: 'array',
        description: 'The translated error messages for each value in the `form_errors` array. You can access a specific message in the array by using a specific error from the `form_errors` array as a key.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form_errors#messages)\n\n'
      },
      translated_fields: {
        type: 'array',
        description: 'The translated names for each value in the `form_errors` array. You can access a specific field in the array by using a specific error from the `form_errors` array as a key.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/form_errors#translated_fields)\n\n'
      }
    }
  },
  handle: {
    summary: 'The [handle](/docs/api/liquid/basics#handles) of the resource associated with the current template.',
    global: true,
    description: 'The [handle](/docs/api/liquid/basics#handles) of the resource associated with the current template. The `handle` object will return a value only when the following templates are being viewed:\n\n- [article](/themes/architecture/templates/article)\n- [blog](/themes/architecture/templates/blog)\n- [collection](/themes/architecture/templates/collection)\n- [page](/themes/architecture/templates/page)\n- [product](/themes/architecture/templates/product)\n\nIf none of the above templates are being viewed, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/handle)\n\n',
    type: 'string',
    const: true
  },
  page_description: {
    summary: 'The meta description of the current page.',
    global: true,
    description: 'The meta description of the current page. The `page_description` object can be used to provide a brief description of a page for search engine listings and social\nmedia previews.\n\nTo learn about where to edit the meta description for a page, visit the [Shopify Help Center](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords#edit-the-title-and-meta-description-for-a-page).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/page_description)\n\n',
    type: 'string',
    const: true
  },
  page_image: {
    summary: 'An image to be shown in search engine listings and social media previews for the current page.',
    global: true,
    description: "An image to be shown in search engine listings and social media previews for the current page. The resource's featured image for product and collection pages, and blog posts, is used. For all other pages, or pages where\nthere's no featured image, the [social sharing image](https://help.shopify.com/manual/online-store/images/showing-social-media-thumbnail-images?#setting-the-social-sharing-image-in-your-admin)\nis used.\n\n### Open Graph fallback tags\n\nThe `page_image` object can be used for creating [Open Graph](https://ogp.me/) `og:image` meta tags.\n\nIf a theme doesn't include `og:image` tags for a page, then Shopify automatically generates the following tags using the\n`page_image` object:\n\n- `og:image`\n- `og:image:secure_url`\n- `og:image:width`\n- `og:image:height`\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/page_image)\n\n",
    type: 'object',
    scope: 'image',
    const: true
  },
  page_title: {
    summary: 'The page title of the current page.',
    global: true,
    description: 'The page title of the current page. The `page_title` object can be used to specify the title of page for search engine listings and social media previews.\n\nTo learn about where to edit the title for a page, visit the [Shopify Help Center](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords#edit-the-title-and-meta-description-for-a-page).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/page_title)\n\n',
    type: 'string',
    const: true
  },
  part: {
    summary: 'A part in the navigation for pagination.',
    description: 'A part in the navigation for pagination.\n\n#### Example\n\nYou can create a pagination navigation by iterating over each `part` of a [`paginate` object](/docs/api/liquid/objects/paginate).\n\n\n```liquid\n\n{% paginate collection.products by 5 -%}\n  {% for part in paginate.parts -%}\n    {% if part.is_link -%}\n      {{ part.title | link_to: part.url}}\n    {%- else -%}\n      <span>{{ part.title }}</span>\n    {% endif %}\n  {%- endfor %}\n{%- endpaginate %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/part)\n\n',
    type: 'object',
    properties: {
      is_link: {
        type: 'boolean',
        description: 'Returns `true` if the part is a link. Returns `false` if not.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/part#is_link)\n\n'
      },
      title: {
        type: 'string',
        description: 'The page number associated with the part.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/part#title)\n\n'
      },
      url: {
        type: 'string',
        description: 'The URL of the part. It consists of the current page URL path with the pagination parameter for the current part appended.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/part#url)\n\n'
      }
    }
  },
  pending_payment_instruction_input: {
    summary: 'Header-value pairs that make up the list of payment information specific to the payment method.\nThis information can be be used by the customer to complete the transaction offline.',
    description: 'Header-value pairs that make up the list of payment information specific to the payment method.\nThis information can be be used by the customer to complete the transaction offline.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/pending_payment_instruction_input)\n\n',
    type: 'object',
    properties: {
      header: {
        type: 'string',
        description: 'The header of the payment instruction.\nThese are payment method-specific. Example: "Entity" and "Reference" for Multibanco\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/pending_payment_instruction_input#header)\n\n'
      },
      value: {
        type: 'string',
        description: 'Contains the corresponding values to the headers of the payment instruction.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/pending_payment_instruction_input#value)\n\n'
      }
    }
  },
  powered_by_link: {
    summary: 'Creates an HTML link element that links to a localied version of `shopify.com`, based on the locale of the store.',
    global: true,
    description: 'Creates an HTML link element that links to a localied version of `shopify.com`, based on the locale of the store.\n\n#### \n\n```liquid\n\n{{ powered_by_link }}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/powered_by_link)\n\n',
    const: true
  },
  predictive_search_resources: {
    summary: 'Contains arrays of objects for each resource type that can be returned by a [predictive search query](/api/ajax/reference/predictive-search#get-locale-search-suggest).',
    description: 'Contains arrays of objects for each resource type that can be returned by a [predictive search query](/api/ajax/reference/predictive-search#get-locale-search-suggest). You can check whether any resources of a specific type were returned using the [`size` filter](https://shopify.dev/docs/api/liquid/filters/size).\n\n```liquid\n{% if predictive_search.resources.articles.size > 0 %}\n  {% for article in predictive_search.resources.articles %}\n    {{ article.title }}\n  {% endfor %}\n{% endif %}\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/predictive_search_resources)\n\n',
    type: 'object',
    properties: {
      articles: {
        type: 'array',
        description: 'The articles associated with the query.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/predictive_search_resources#articles)\n\n',
        scope: 'article'
      },
      collections: {
        type: 'array',
        description: 'The collections associated with the query.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/predictive_search_resources#collections)\n\n',
        scope: 'collection'
      },
      pages: {
        type: 'array',
        description: 'The pages associated with the query.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/predictive_search_resources#pages)\n\n',
        scope: 'page'
      },
      products: {
        type: 'array',
        description: 'The products associated with the query.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/predictive_search_resources#products)\n\n',
        scope: 'product'
      }
    }
  },
  quantity_rule: {
    summary: 'A variant order quantity rule (minimum, maximum, and increment). The default order variant quantity rule is `min=1,max=null,increment=1`.',
    description: 'A variant order quantity rule (minimum, maximum, and increment). The default order variant quantity rule is `min=1,max=null,increment=1`.\n\n#### Example\n\n```liquid\n\n{{ product.variants.first.quantity_rule }}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/quantity_rule)\n\n',
    type: 'object',
    properties: {
      min: {
        type: 'number',
        description: 'Minimum order quantity (default 1)\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/quantity_rule#min)\n\n'
      },
      max: {
        type: 'number',
        description: 'Maximum order quantity If there is no maximum, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/quantity_rule#max)\n\n'
      },
      increment: {
        type: 'number',
        description: 'Order quantity increment (default 1)\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/quantity_rule#increment)\n\n'
      }
    }
  },
  scripts: {
    summary: 'The active scripts, of each script type, on the store.',
    global: true,
    description: 'The active scripts, of each script type, on the store. There can be only one active script of each type. Currently, the only type accessible in Liquid is\n`cart_calculate_line_items`.\n\n\n\n**Tip**\n\n> To learn more about Shopify Scripts and the Script Editor, visit the [Shopify Help Center](https://help.shopify.com/manual/checkout-settings/script-editor).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/scripts)\n\n',
    type: 'object',
    properties: {
      cart_calculate_line_items: {
        type: 'object',
        description: "The active line item script. If no line item script is currently active, then `nil` is returned.\n\n#### Example\n\n```liquid\n\n{% if scripts.cart_calculate_line_items %}\n  <p>Don't miss our current sale: <strong>{{ scripts.cart_calculate_line_items.name }}</strong></p>\n{% endif %}\n\n```\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/scripts#cart_calculate_line_items)\n\n",
        scope: 'script'
      }
    }
  },
  sitemap: {
    summary: 'The sitemap for a specific group in the [`robots.txt` file](/themes/architecture/templates/robots-txt-liquid).',
    description: "The sitemap for a specific group in the [`robots.txt` file](/themes/architecture/templates/robots-txt-liquid). The sitemap provides information about the pages and content on a site, and the relationships between them, which helps\ncrawlers crawl a site more efficiently.\n\n\n\n**Tip**\n\n> To learn more about sitemaps, refer to [Google's documentation](https://developers.google.com/search/docs/advanced/sitemaps/overview).\n\nThe `sitemap` object consists of a `Sitemap` directive, and a value of the URL that the sitemap is hosted at. For example:\n\n```\nSitemap: https://your-store.myshopify.com/sitemap.xml\n```\n\n\n\n**Tip**\n\n> You can [customize the `robots.txt` file](/themes/seo/robots-txt) with the [`robots.txt.liquid` template](/themes/architecture/templates/robots-txt-liquid).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/sitemap)\n\n",
    type: 'object',
    properties: {
      directive: {
        type: 'string',
        description: 'Returns `Sitemap`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/sitemap#directive)\n\n'
      },
      value: {
        type: 'string',
        description: 'The URL that the sitemap is hosted at.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/sitemap#value)\n\n'
      }
    }
  },
  sort_option: {
    summary: 'A sort option for a collection or search results page.',
    description: 'A sort option for a collection or search results page.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/sort_option)\n\n',
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The customer-facing name of the sort option. The name can be edited by merchants in the [language editor](https://help.shopify.com/manual/online-store/themes/customizing-themes/language/change-wording).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/sort_option#name)\n\n'
      },
      value: {
        type: 'string',
        description: 'The value of the sort option. This value is used when assigning the [`collection.sort_by`](https://shopify.dev/docs/api/liquid/objects/collection#collection-sort_by) and\n[`search.sort_by`](https://shopify.dev/docs/api/liquid/objects/search#search-sort_by) parameters.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/sort_option#value)\n\n'
      }
    }
  },
  transaction_payment_details: {
    summary: 'Information about the payment methods used for a transaction.',
    description: 'Information about the payment methods used for a transaction.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction_payment_details)\n\n',
    type: 'object',
    properties: {
      credit_card_company: {
        type: 'string',
        description: 'The name of the company that issued the credit card used for the transaction.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction_payment_details#credit_card_company)\n\n'
      },
      credit_card_last_four_digits: {
        type: 'string',
        description: 'The last four digits of the credit card number of the credit card used for the transaction.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction_payment_details#credit_card_last_four_digits)\n\n'
      },
      credit_card_number: {
        type: 'string',
        description: 'The credit card number of the credit card used for the transaction. All but the last four digits are redacted.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction_payment_details#credit_card_number)\n\n'
      },
      gift_card: {
        type: 'object',
        description: 'The gift card used for the transaction. If no gift card was used, then `nil` is returned.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/transaction_payment_details#gift_card)\n\n',
        scope: 'gift_card'
      }
    }
  },
  user_agent: {
    summary: 'The user-agent, which is the name of the crawler, for a specific group in the [`robots.txt` file](/themes/architecture/templates/robots-txt-liquid).',
    description: 'The user-agent, which is the name of the crawler, for a specific group in the [`robots.txt` file](/themes/architecture/templates/robots-txt-liquid). The `user_agent` object consists of a `User-agent` directive, and a value of the name of the user-agent. For example:\n\n```\nUser-agent: *\n```\n\n\n\n**Tip**\n\n> You can [customize the `robots.txt` file](/themes/seo/robots-txt) with the [`robots.txt.liquid` template](/themes/architecture/templates/robots-txt-liquid).\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/user_agent)\n\n',
    type: 'object',
    properties: {
      directive: {
        type: 'string',
        description: 'Returns `User-agent`.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/user_agent#directive)\n\n'
      },
      value: {
        type: 'string',
        description: 'The name of the user-agent.\n\n---\n\n[Shopify Liquid](https://shopify.dev/docs/api/liquid/objects/user_agent#value)\n\n'
      }
    }
  }
};
