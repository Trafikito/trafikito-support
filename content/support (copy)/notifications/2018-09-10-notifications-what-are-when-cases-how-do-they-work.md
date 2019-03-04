---
id: 262eeb04-e1d6-43d0-b1d9-073d47d4ee13
layout: post
title:  "What are when cases & how do they work?"
uri: what-are-when-cases-how-do-they-work
tags: [notifications]
date: 2018-11-15
---

When cases are a set of options that define situations when notifications should be fired. Each when case has a selected action type:

<!-- more -->

1.  **Variable in ranges** - tracks when the value of variables moves to different ranges between normal, warning and error ranges and stays in a new range for a defined time.
2.  **Getting data** - situations when Trafikito starts getting data from your server. Not getting data event must be fired first.
3.  **Not getting data** - situations when Trafikito stops getting data from your server. Use it together with getting data type to get notifications when Trafikito starts getting data again.

A single <wiki>notification</wiki> may have one or more when cases. A <wiki>notification</wiki> is triggered when any when cases are positive.

**Getting data event will never fire if not getting data event is not fired first.** Always define both when cases _when_ building notifications.