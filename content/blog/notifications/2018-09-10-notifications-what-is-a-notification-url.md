---
layout: post
title:  "What is a notification url?"
uri: what-is-a-notification-url
tags: [notifications]
---

A notification URL is the API endpoint where a request will be sent to configure when a notification is fired. Trafikito will submit headers and body if those are defined.

<!-- more -->

#### Note:

To make an API call you need to set the HTTP method and URL. Headers and body are optional depending on the API you are calling.

#### Note:

You can use any variable placeholders inside the body, URL or header value fields. Placeholders will be replaced with actual value on a fly. Below all configuration options for notifications, you will find all your variables from all data sources. Click on any to copy. Variables must be surrounded by pairs of curly braces like this: `{{ram_used}}`