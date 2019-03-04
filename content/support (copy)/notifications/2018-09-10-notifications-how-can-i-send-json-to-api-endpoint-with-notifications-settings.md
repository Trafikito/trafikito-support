---
id: 708dfdbb-00a8-4f13-8b7a-ca28b9ea3827
layout: post
title:  "How can I send JSON to API endpoint with notifications settings?"
uri: how-can-i-send-json-to-api-endpoint-with-notifications-settings
tags: [notifications]
date: 2018-11-15
---

You can send any text to API endpoint. To send JSON, use raw body type and add header _content-type: application/json_.

<!-- more -->

#### Note:

You can use any variable placeholders inside the body, URL or header value fields. Placeholders will be replaced with actual value on a fly. Below all configuration options for <wiki>notifications</wiki>, you will find all your variables from all data sources. Click on any to copy. Variables must be surrounded by pairs of curly braces like this: `{{ram_used}}`