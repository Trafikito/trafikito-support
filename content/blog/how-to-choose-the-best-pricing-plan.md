---
id: 3382f794-9b36-4f84-b908-e3a6393ef883
layout: post
title:  "How to choose the best pricing plan?"
categories: trafikito users
uri: blog/how-to-choose-the-best-pricing-plan
featured_image: trafikito-visibility-vs-market-standard.jpg
tags: [blog]
---


<p>
    Trafikito logs data every minute while the market standard for free plans is 5-15 minutes interval. Why is this
    important for you? As an example let’s take a common scenario of a failed backup cron job (<em>an automatically
    scheduled task</em>). The backup started at 20:04 but after 4 minutes the disk ran out of space. At 20:08 the
    application crashed and was left in an unresponsive state. The cron job cleaned itself and disk space was available
    again but the damage was already done because the main application was left in a broken state. With 5-15 minutes
    intervals, you would not see what happened. Trafikito solves this problem because it gives better visibility for all
    plans.
</p>
<!--more-->

{% include image.html file="trafikito-visibility-vs-market-standard.jpg" alt="Trafikito gives 1 minute visibility which is needed to have better knowledge of what is happening" %}

<h2>The Free and Paid plans offer high-quality logs for everyone</h2>

<p>
    Trafikito receives log data every single minute. While, the market standard is usually 5, 10 or 15 minutes,
    especially for free plans. This means that when you see statistical data every 5 minutes, it's an average of that 5
    minutes and if there was an issue in that period of time, then you will not see it. So for instance, if a backup is
    running 3 minutes and it eats all of your resources, which causes your <strong>Node.js</strong> application to
    become frozen, you will not see such data without 1-minute density.
</p>
<p>
    You can clearly see the need to have more visibility with logs of every single minute. Trafikito solves this issue,
    as it possesses a higher density of logs. Your mind can be at ease because Trafikito provides 1-minute density for
    all plans.
</p>
<h2>How many logs will be available for you to browse?</h2>
<p>
    The Free plan offers 24 hours of visibility. Which is totally fine for hobby projects or if you react quickly after
    getting a notification. However, if you want to debug all that occurred over the weekend after you return to the
    office on Monday; then you will need 3 days of visibility.
</p>
<p>
    Often this is the situation when the update is pushed on Friday morning, everything seems OK but on Monday you
    notice that your servers were overloaded by some random backup <em>cron job</em>. The most suitable plans to prevent
    an issue like this would be the “Medium” plan that offers 1 week of visibility as an extra premium feature or the
    “Roarr” plan that gives 2 weeks of coverage which is more than enough for any outage.
</p>
<h2>Notifications</h2>

<p>
    Trafikito notifications are API calls when something happens. Something is defined with ‘<em>when cases</em>’. For
    example, if you want to get an email when <em>free_ram</em> is in error range (e.g. 0-100MB) for 5 minutes or when
    the same variable is in the warning range for 15 minutes. You can combine several ‘<em>when cases</em>’ and when any
    of these becomes true, then an API call will be executed and by default, an email will be sent.
</p>
<p>
    The market standard is to give notifications only for paid plans and most of the time only in the form of an email
    but Trafikito goal is to provide more. There is close to no value from monitoring if you don’t get notifications
    when something happens.
</p>
<p>
    With the free plan you can get up to 100 notifications triggers per 24 hours and 30 ‘<em>when cases</em>’ per
    server. Paid plans <a target="_blank" href="https://trafikito.com/price">get more</a>.
</p>

<h2>Data sources</h2>
<p>
    Trafikito runs commands on the server and collects output. Each running command is a data source. So if you want to
    track an average load, you can use <em>uptime</em> command which is one data source. To get RAM information, the
    popular command is <em>free -m</em> and this is another data source. With the free plan, you can have up to 11 data
    sources which should be enough for any hobbyist. On the other hand, the Paid plans allow you to add more data
    sources.
</p>

<h2>Total output size</h2>

<p>
    The commands from data sources return output. Some commands may return in a single number, while some may return as
    a full page of text. Whichever format it returns in, you can always optimize an output length by writing custom
    commands on your server. The total output size limits are the number of bytes that can be sent to Trafikito in total
    at once. The Free plan can send 3.3KB of data every minute, Start plan is 3.8KB, Medium is 5.8KB and Roarrr is 7.8KB
    of data. In most cases, the default configuration will eat ±2KB of this data but you can always change it to
    whatever makes the most sense for you. Though, the Actual size depends on your machine and commands in use. So, some
    commands return more data and some less.
</p>

<p>
    If you are on a Medium plan and have 15 data sources and all of them combined tries to send more than 3.8KB of data,
    Trafikito will replace the biggest output with a message about it. The message will be available in the sample
    output of the command in server settings.
</p>

<h2>Support</h2>
Support is important for any product. At the moment we offer support by:
<ol>
    <li>Email</li>
    <li>Facebook Messenger</li>
</ol>
<p>
    Facebook Messenger is available for general queries to all users but extended support is only offered to Medium and
    Roarr plans.
</p>

<h2>User management</h2>

<p>
    When working with a team, Trafikito allows you to assign user roles for each member. We recommend assigning an admin
    role only if you need someone else to setup your environment but when the setup is done, its best to downgrade the
    member to a “member” role. This will ensure that no accidental edits are made by anyone from the team.
</p>
<p>
    The Free plan is great for individuals and It allows a single user in a workspace for free. However, if you want to
    work together with up to 5 members, you will require the Start plan. Though, to assign user roles you would need to
    upgrade to the Medium or Roarr plans If you want to make sure some users can only see logs but not modify anything.
    The Medium plan offers 15 users in a workspace, which should be plenty for most. While the Roarr plan will give
    double the amount which is 30 users per workspace.
</p>
<h2>Server management</h2>
<p>
    You can be an active member of as many workspaces as you need with the same account. It’s very convenient to see if
    everything is in good shape for all servers, especially If you have several of them running at the same time.
    Starting with a free plan for one workspace, you can add up to 10 servers to monitor. Respectively, paid plans allow
    you to add more servers per workspace.
</p>
<h2>Main differences between the plans</h2>
<p>
    At Trafikito we try to keep things simple. Including price. You can choose to use Trafikito with a free plan or pick
    1 of 3 paid plans. The main differences between the plans are:
</p>
<ol>
    <li>The number of logs that are available for you to browse in the history.</li>
    <li>The number of users that you can have in the company and the specific roles for these users.</li>
    <li>The number of servers, notifications and data sources that are required.</li>
    <li>The total output size, whether the Free plan-3.3KB, Start plan-3.8KB, Medium plan-5.8KB and Roarrr plan-7.8KB.
    </li>
</ol>
<p>
    You can always see up to date pricing information
    at <a href="https://trafikito.com/price" target="_blank">https://trafikito.com/price</a>
</p>
<h2>Conclusion</h2>
<p>
    Trafikito’s goal is to provide great service to everyone and it is not our goal to eventually offer only paid
    services to our users. This will never happen. Trafikito can successfully run businesses with only 1% of paid users
    and this is why even the free plan is great. You will only need the paid plans if you need to have several members
    in the same workspace or you have many servers that you want to monitor and see the history of logs.
</p>