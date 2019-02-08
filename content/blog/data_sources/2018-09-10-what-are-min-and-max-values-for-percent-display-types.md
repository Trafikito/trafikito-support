---
layout: post
title:  "What are min and max values for percent display types?"
uri: what-are-min-and-max-values-for-percent-display-types
tags: [data sources]
---

<p>
    When the value display type is percent, you can define minimum and maximum values. Let’s say you want to have RAM
    available as a percent.
</p>

<!--more-->

<p>
    Let’s say your machine has <strong>2 GB of RAM</strong>, which is <strong>2097152 bytes</strong>. <span
        class="t-code">free -m</span> command returns available RAM: <strong>1730556</strong>. So for this case 100% is
    <strong>2 GB (2097152)</strong> and 0% is <strong>0</strong>.
</p>

<p>So current value of <strong>1730556</strong> is <strong>83%</strong>.</p>

<!-- todo img -->

