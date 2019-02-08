---
layout: post
title:  "What is the difference between HTML and Raw body?"
uri: what-is-the-difference-between-html-and-raw-body
tags: [notifications]
---

<p>
    <strong>HTML</strong> allows the use of WYSIWYG editor to input text or variables. With WYSIWYG you have control to
    make text bold, italic, change text color, align, make a list, table and much more. It is a great way for things
    like formatting an email.
</p>

<!--more-->

<p>
    <strong>Raw</strong> body is raw text. If you need to send JSON content to the URL, use raw. Most APIs also require
    JSON header with JSON body, which is <em>content-type: application/json</em>. You can add such a header in <strong>Headers</strong>
    part of the action.
</p>


<h4>Note:</h4>
<p>
    You can use any variable placeholders inside the body, URL or header value fields. Placeholders will be replaced
    with actual value on a fly. Below all configuration options for notifications, you will find all your variables from
    all data sources. Click on any to copy. Variables must be surrounded by pairs of curly braces like this:
    <span class="t-code">{% raw %}{{ram_used}}{% endraw %}</span>
</p>