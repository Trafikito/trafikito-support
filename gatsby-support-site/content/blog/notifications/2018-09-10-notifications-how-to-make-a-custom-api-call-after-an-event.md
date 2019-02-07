---
layout: post
title:  "How to make a custom API call after an event?"
uri: how-to-make-a-custom-api-call-after-an-event
tags: [notifications]
---

<p>
    At Trafikito notifications are made of 2 parts:
</p>

<ol>
    <li>When cases</li>
    <li>Action to do</li>
</ol>

<!--more-->

<p>
    When cases determine when to do the action and action is just any API call. If you want to make a custom API call,
    use the form to adjust all the details. There are available options to format any API call:
</p>

<ul>
    <li><strong>HTTP method</strong>: POST, GET, PUT, DELETE, PATCH, HEAD, OPTIONS</li>
    <li><strong>URL</strong></li>
    <li><strong>Headers</strong>. Maximum 5 header key-value pairs</li>
    <li><strong>Body</strong>. Can be <strong>HTML</strong> or raw text, e.g. <strong>JSON</strong>.</li>
</ul>


<h4>Note:</h4>

<p>
    You can use any variable placeholders inside the body, URL or header value fields. Placeholders will be replaced
    with actual value on a fly. Below all configuration options for notifications, you will find all your variables from
    all data sources. Click on any to copy. Variables must be surrounded by pairs of curly braces like this:
    <span class="t-code">{% raw %}{{ram_used}}{% endraw %}</span>
</p>

<!-- todo [link how-add-variable to data source] -->