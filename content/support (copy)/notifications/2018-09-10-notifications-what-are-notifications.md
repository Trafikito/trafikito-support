---
id: f7277d70-7b35-489b-b378-009a690e0a3f
layout: post
title:  "What are notifications?"
uri: what-are-notifications
tags: [notifications]
date: 2018-11-15
---

Notifications are actions that occur after specific events. The default action is to send an email but it can be an API call. Each notification is made of 2 parts:

<!-- more -->

1.  **When cases** define when notifications are triggered
2.  **Actions** are API calls. By default its emails.

Notifications inform you when something is going wrong or can be proactive actions that try to fix an issue without your help. E.g. if your hosting service provider has API to restart your server, you can setup Trafikito to do it for you on event.