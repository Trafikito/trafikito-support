---
layout: post
title:  "What happens if I change the data parsing settings?"
uri: what-happens-if-i-change-the-data-parsing-settings
tags: [data sources]
---

<p>
    To save changes you must click <strong>Save data source</strong> so you can experiment with parsing settings without
    saving and nothing will be changed.
</p>

<!--more-->

<p>
    While changing the parsing settings you will immediately see the updated table of data. If the data location changes
    in a table, then variables assigned to the table must be updated too.
</p>

<p>
    <strong>Example</strong>: If the previous value of <strong>load_1</strong> was inside cell <strong>A2</strong> <span
        class="t-code">0.21</span> and now it is in <strong>A11</strong>. The variable <strong>load_1</strong> is still
    pointing to <strong>A2</strong> <span class="t-code">01:51:48</span>, which is the current server’s time now. To fix
    it, just select <strong>A11</strong> from the drop-down in the variables settings.
</p>

<!-- todo before-after image/video/gif -->
