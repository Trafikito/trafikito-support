---
id:993b0b31-51c4-4533-8cd5-93b556d81d88
layout: post
title:  "What is data splitting inside data source configuration?"
uri: what-is-data-splitting-inside-data-source-configuration
tags: [data sources]
---

Trafikito gets command output from Linux machines as text. While you need to track some part of the text, e.g. you want to monitor an average load while using uptime command.

<!--more-->

This is the sample output of an uptime command:

16:32:47 up 3 min, 1 user, load average: 2.3, 0.41, 0.19

  

You want the **chart** displaying the current value of 2.3 and the change over time. So you have to extract this number. You can do this by splitting the text into a table using delimiters.

One delimiter is used to split the text into rows and then each row can have the custom delimiter to split it into columns.

After its finished, you have a table and in some cells your required values. Every minute Trafikito gets new output, splits it into a table using the same delimiters and data is updated.

#### Note:

By default Trafikito sets line delimiter to new line symbol, which is: \\n and row delimiter is regular expression \[,\]+, which splits row into columns by one or more space or comma symbols which is what you need most of the time. You will notice that by default settings most of the time you will have data parsing done automatically.

When you have a table with data you can create new variables and assign cells. Variables will always hold updated values of specific cells.