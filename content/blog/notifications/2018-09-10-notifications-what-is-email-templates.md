---
layout: post
title:  "What is email templates?"
uri: what-is-email-templates
tags: [notifications]
---

An email template is a 1-click solution when you want your action to be an email message. You can change who gets the email in the workspace settings . While actions in notifications is any API call, Trafikito provides custom endpoint to send an email. When you click to use email templates, an action form will be filled with all the required details: Method, URL, Headers.

<!-- more -->

If you add text to the body input, you will see that text in the grey box below the notification itself.

#### Note:

You can use any variable placeholders inside the body, URL or header value fields. Placeholders will be replaced with actual value on a fly. Below all configuration options for notifications, you will find all your variables from all data sources. Click on any to copy. Variables must be surrounded by pairs of curly braces like this: `{{ram_used}}`