---
layout: post
title:  "What is an action body?"
uri: what-is-an-action-body
tags: [notifications]
---

<p>
    An action body is content sent to the endpoint. You can choose to enter HTML - you will see an editor to make text
    bold, italic, aligned and other popular options. You can switch to raw if you want to send JSON.
</p>

<!--more-->

<h4>Note:</h4>

<p>
    To make API calls you need to set the HTTP method and URL. Headers and body are optional depending on the API you
    are calling.
</p>

<h4>Note:</h4>

<p>
    You can use any variable placeholders inside the body, URL or header value fields. Placeholders will be replaced
    with actual value on a fly. Below all configuration options for notifications, you will find all your variables from
    all data sources. Click on any to copy. Variables must be surrounded by pairs of curly braces like this:
    <span class="t-code">{% raw %}{{ram_used}}{% endraw %}</span>
</p>