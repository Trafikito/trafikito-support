---
id: 97911417-cb48-4a58-b598-9cec1944fd87
layout: post
title:  "How to make a custom API call after an event?"
uri: how-to-make-a-custom-api-call-after-an-event
tags: [notifications]
date: 2018-11-15
---

At Trafikito notifications are made of 2 parts:

1.  When cases
2.  Action to do

<!-- more -->

When cases determine when to do the action and action is just any API call. If you want to make a custom API call, use the form to adjust all the details. There are available options to format any API call:

*   **HTTP method**: POST, GET, PUT, DELETE, PATCH, HEAD, OPTIONS
*   **URL**
*   **Headers.** Maximum 5 header key-value pairs
*   **Body.** Can be **HTML** or raw text, e.g. **JSON.**

#### Note:

You can use any variable placeholders inside the body, URL or header value 
fields. Placeholders will be replaced with actual value on a fly. Below 
all configuration options for <wiki>notifications</wiki>, you will find all your variables
from all data sources. Click on any to copy. Variables must be surrounded by
pairs of curly braces like this: `{{ram_used}}`