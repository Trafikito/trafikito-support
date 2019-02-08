---
layout: post
title:  "What are the options for an action type: getting and not getting data?"
uri: what-are-the-options-for-an-action-type-getting-and-not-getting-data
tags: [notifications]
---

<ol>
    <li>
        <strong>Getting or not getting for</strong> specified minutes. You can select how long to wait before firing
        actions. The minimum amount is 5 minutes because it’s ok if your server is running but a network failure
        resulted in logs not being delivered to Trafikito. However, if it happens for more than 5 minutes then it’s an
        issue not just a random event.
    </li>
    <li>
        <strong>Wait before firing again</strong> - you can set if when cases should be fired several times and how long
        to wait before firing again.
    </li>
</ol>
