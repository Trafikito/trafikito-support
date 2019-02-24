---
id: d142b50c-9e31-4ce3-b30e-4ade5ec0823f
layout: post
title:  "What happens when new data arrives at Trafikito?"
uri: what-happens-when-new-data-arrives-at-trafikito
tags: [data sources]
---

Every minute the agent running on your server sends data to Trafikito. When the data arrives several things happen:


<!--more-->

1.  Current available commands list is updated which you can see on the drop-down while adding a new data source
2.  The data size is measured against an active plan and if it’s oversized some output is replaced by messages about it
3.  The output is saved to the database and becomes visible on the dashboard
4.  New data is checked against notification options of the server
    1.  If needed - notification API calls are made which by default is sending an email