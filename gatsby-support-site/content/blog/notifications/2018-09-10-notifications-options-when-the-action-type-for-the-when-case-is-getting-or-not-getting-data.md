---
layout: post
title:  "Options when the action type for the when case is getting or not getting data?"
uri: options-when-the-action-type-for-the-when-case-is-getting-or-not-getting-data
tags: [notifications]
---

<p>
    While creating notifications you have to add when cases. When cases define when to trigger the action of
    notifications. If the action type is set to <em>Getting data</em> or <em>Not getting data</em> you will get these
    options to make adjustments:
</p>

<!--more-->

<ol>
    <li>
        <strong>Getting / not getting for</strong> - select the amount of minutes to wait before it’s considered a real
        situation. There may be random issues like the network between your server and Trafikito endpoint lags a bit and
        drops a package. Trafikito agent will try to submit logs several times before giving up, so it may just be a
        temporary issue and no need to react immediately.
    </li>
    <li>
        <strong>Wait before firing again</strong> - you can select if you want to fire this action several times or just
        fire once. Trafikito recommends setting this to <strong>no repeat</strong>, when <strong>type is getting
        data</strong> and <strong>set to some interval</strong> in minutes <strong>when action type is <em>not getting
        data</em></strong>. With such settings only one notification will be fired after recovery and several if
        Trafikito stops receiving data continuously.
    </li>
</ol>
