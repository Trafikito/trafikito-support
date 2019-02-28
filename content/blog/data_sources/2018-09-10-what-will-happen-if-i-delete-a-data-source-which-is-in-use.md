---
id: 1247a04e-d6a1-4925-aa43-16c73fa969ea
layout: post
title:  "What will happen if I delete a data source which is in use?"
uri: what-will-happen-if-i-delete-a-data-source-which-is-in-use
tags: [data sources]
---

Deleting data sources will delete it’s variables and logs. Logs and variables are removed for this data source only. Other data sources will be kept unmodified. If the data source does not have any variables defined or defined variables are not in use anywhere - nothing else will happen.

<!--more-->

If this data source does have variables defined and those variables are in use:

*   In the text boxes, [notification](f7277d70-7b35-489b-b378-009a690e0a3f) email and anywhere it is rendered as text, you will see the variable name instead of a value.
*   In charts variables will have no logs and depending on if the chart have other active variables, it will display an empty chart for the deleted variable or just the message **No data for this time interval.**