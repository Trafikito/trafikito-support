---
layout: post
title:  "What are API call headers?"
uri: what-are-api-call-headers
tags: [notifications]
---

<p>
    Headers are parts of any HTTP call over the internet. You can set custom headers to make any API calls needed. It
    may be authorization headers, content type or anything else.
</p>

<!--more-->

<h4>Note:</h4>
<p>
    To make an API call you need to set the HTTP method and URL. Headers and body are optional depending on the API you
    are calling.
</p>

<h4>Note:</h4>
<p>
    You can use any variable placeholders inside the body, URL or header value fields. Placeholders will be replaced
    with actual value on a fly. Below all configuration options for notifications, you will find all your variables from
    all data sources. Click on any to copy. Variables must be surrounded by pairs of curly braces like this:
    <span class="t-code">{% raw %}{{ram_used}}{% endraw %}</span>
</p>