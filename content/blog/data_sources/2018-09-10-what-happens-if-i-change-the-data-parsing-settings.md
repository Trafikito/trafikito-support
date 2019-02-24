---
id: ff27d674-928c-46ac-9092-99971963c624
layout: post
title:  "What happens if I change the data parsing settings?"
uri: what-happens-if-i-change-the-data-parsing-settings
tags: [data sources]
---

To save changes you must click **Save data source** so you can experiment with parsing settings without saving and nothing will be changed.

<!--more-->

While changing the parsing settings you will immediately see the updated table of data. If the data location changes in a table, then variables assigned to the table must be updated too.

**Example**: If the previous value of **load_1** was inside cell **A2** 0.21 and now it is in **A11.** The variable **load\_1** is still pointing to **A2** 01:51:48, which is the current server’s time now. To fix it, just select **A11** from the drop-down in the variables settings.
