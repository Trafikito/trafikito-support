---
layout: post
title:  "What happens when new data arrives at Trafikito?"
uri: what-happens-when-new-data-arrives-at-trafikito
tags: [data sources]
---

<p>
    Every minute the agent running on your server sends data to Trafikito. When the data arrives several things happen:
</p>

<!--more-->

<ol>
    <li>
        Current available commands list is updated which you can see on the drop-down while adding a new data source
    </li>
    <li>
        The data size is measured against an active plan and if it’s oversized some output is replaced by messages about
        it
    </li>
    <li>
        The output is saved to the database and becomes visible on the dashboard
    </li>
    <li>
        New data is checked against notification options of the server
        <ol type="i">
            <li>If needed - notification API calls are made which by default is sending an email</li>
        </ol>
    </li>
</ol>
