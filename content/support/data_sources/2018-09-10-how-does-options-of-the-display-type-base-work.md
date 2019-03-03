---
id: 28eed697-dd80-4ccb-afc8-514ae64d7466
layout: post
title:  "How does options of the display type: base work?"
uri: how-does-options-of-the-display-type-base-work
tags: [data sources]
---
Display type base can be used with numeric values. It can do some basic math and apply suffix to the final number. This is how it works:

<!--more-->

Let’s say we use df -P command to get the available disk space and the current value is **3977700.** It means there are **3977700 Kilobytes** left. It is useful to have the raw value to display it on a chart but on a text box it would be better to have a formatted value.

You can set Base as **1024** and add a few names. We will use KB, MB, GB and TB for now. Trafikito will take the raw value of **3977700** and divide it by **1024**:

3977700 / 1024 = 3884.47265625

  

While **3884** is more then **1024,** it will be divided again:

3884.47265625 / 1024 = 3.7934303284

  

Now you have decimal places option - how many numbers to show in decimal places. If it is set to **2,** final formatted value will be **3.79** and while it was divided **2** times, the 3rd value name will be used, which in our case is GB. So the final render with suffix is: 3.79 GB