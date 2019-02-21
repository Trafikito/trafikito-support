---
layout: post
title:  "What are min and max values for percent display types?"
uri: what-are-min-and-max-values-for-percent-display-types
tags: [data sources]
---

When the value display type is percent, you can define minimum and maximum values. Let’s say you want to have RAM 
available as a percent.

<!--more-->

Let’s say your machine has **2 GB of RAM,** which is **2097152 bytes.** `free -m` command returns 
available RAM: **1730556.** So for this case 100% is **2 GB (2097152)** and 0% is **0.**

So current value of **1730556** is **83%.**