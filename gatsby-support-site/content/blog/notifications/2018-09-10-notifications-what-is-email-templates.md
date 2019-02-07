---
layout: post
title:  "What is email templates?"
uri: what-is-email-templates
tags: [notifications]
---

<p>
    An email template is a 1-click solution when you want your action to be an email message. You can change who gets
    the email in the workspace settings <!--[link-how-to & about it]-->.
    While actions in notifications is any API call, Trafikito provides custom endpoint to send an email. When you click
    to use email templates, an action form will be filled with all the required details: Method, URL, Headers. <!-- An email
    you will receive will be something like this:-->
</p>

<!--more-->

<!-- // todo image -->

<p>
    If you add text to the body input, you will see that text in the grey box below the notification itself.
</p>

<h4>Note:</h4>

<p>
    You can use any variable placeholders inside the body, URL or header value fields. Placeholders will be replaced
    with actual value on a fly. Below all configuration options for notifications, you will find all your variables from
    all data sources. Click on any to copy. Variables must be surrounded by pairs of curly braces like this:
    <span class="t-code">{% raw %}{{ram_used}}{% endraw %}</span>
</p>