---
id: d847ee41-a60d-438e-8ea2-c6735a93fada
layout: post
title:  "What is data parsing?"
uri: what-is-data-parsing
tags: [data sources]
date: 2018-09-10
---

Data parsing is the required step to split the output of the command, which is the text, into the table. If you want to track numbers available in the output of the command, e.g. this one:


<!--more-->

You need to split text 18:13 up 6 days, 9:21, 4 users, load averages: 3.03 3.33 3.96 to the table. This can be done with data parsing options. Use delimiter in the red square to define how to split the text into rows and use delimiters in the green square to change how to split each row into columns.

Each cell in this table has unique letter and number combination defining the location of the data. In the table below an average load of 1 minute is in cell A2. Now you can define the variable representing this value.

By default Trafikito sets line delimiter to new line symbol, which is: \\n and row delimiter is regular expression \[,\]+, which splits row into columns by one or more space or comma symbols which is what you need most of the time. You will notice that by default settings most of the time you will have data parsing done automatically.