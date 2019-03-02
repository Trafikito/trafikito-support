---
id: 78b80d3f-31d1-4ad8-9c61-a9d1d45a8b98
layout: post
title:  "It is possible to monitor the output of any command"
categories: trafikito
uri: blog/possible-to-monitor-output-of-any-command
featured_image: possible-to-monitor-output-of-any-command.png
tags: [blog]
---


<h2>What is Trafikito?</h2>
<p>
    Trafikito is a monitoring system which allows you to track any output of any command and take automatic action when
    things happen.
</p>

<!--more-->

<h2>Is this something people need?</h2>
<p>
    I am super excited to finally be able to show off Trafikito. Thank you for all the support along the way and
    especially for patiently awaiting this day. Truly, it means a lot to me. When building a company, product or service
    there is always one crucial question to consider "is this something people need?”
</p>

<p>
    One thing is certain and it is that Trafikito is needed even during its developmental stage. It's crazy but it’s
    true. A lot has been done but there is a huge horizon for the future development.
</p>

{% include image.html file="trafikito-dashboard-v1.png" alt="Trafikito dashboard at initial launch" %}

<p class="t-quote">
    The main goal is to make a stable tool which provides information in a new way for free, for everyone and with smart
    defaults yet powerful configurable options.
</p>

<p>
    I have personally tested it with many different Linux machines - Ubuntu, CentOS, and others. On VPNs and Google
    Cloud instances. I believe it should already provide good insights for many individuals and companies.
</p>

<p>
    Before Trafikito I was using New Relic. Which is a great application that can provide a lot but it now comes with a
    big price tag. Indeed, they have removed free plan. I am not sure why but I would do anything to keep the free plan
    option. I think the internet is a great place for everyone because of the freedom. Absolutely anybody can learn how
    to code and build solutions for themselves and even others. The best part is that this can be done WITHOUT paywalls.
</p>

<p>
    The Internet is created by people using only a few fundamental tools. Hosting and domain are the first items. Then
    you must ensure that your server is up and running. It's fun and interesting to create solutions but people will not
    be able to use it if they are not running. You can’t go and check your server every single minute to ensure that
    it's all good. Plus no one would want to be doing that every minute. That's why you need monitoring.
</p>

<h2>Trafikito is easy.</h2>
<p>
    No black magic, no closed source agents. Trafikito agent running on your server is pure open sourced ‘sh’ files.
    They will do nothing but execute standard, built-in functions that shows RAM usage
    information e.g. how much free ram you have at the moment. What's even better is that functions are actually at no
    cost.
</p>
<p>
    Trafikito collects output and sends it to the cloud. In the dashboard, you can see default charts or customization
    settings. By default, you will see CPU, RAM, disk space related information but you can always add a new data
    source and track anything else, e.g. count of queries to the database.
</p>

<p>
    Trafikito can track and show graphical data for any command available in your system. For instance, applications,
    such as MongoDB and MySQL provide commands that show statistical information about the running application. In
    turn, Trafikito can track these stats and show them in a graph. Similar to the graph in the snippet above.
</p>
<p>
    Even though Trafikito is just a baby it's growing rapidly. Have you tried it with your server as yet? If so, make
    sure to leave a comment. Please say what you found interesting and what you would like to see in the future
    releases.
</p>