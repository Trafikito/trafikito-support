---
layout: post
title:  "What is available in the default single server view?"
uri: what-is-available-in-the-default-single-server-view
tags: [dashboard]
---

<p>
    During installation, Trafikito will try to get details about all your server’s base resources and generate a
    dashboard for you.
</p>

<!--more-->

<p>
    By default, Trafikito checks include information on the <span class="t-code">average load</span>, <span
        class="t-code">CPU</span>, <span class="t-code">disk</span>, and <span class="t-code">RAM</span>. As well
    as, several extra details such as the server’s <span class="t-code">hostname</span>.
</p>

<h4>Note:</h4>
<p>
    With some configuration, you can track the output of <strong>any command</strong> running on your server.
</p>

<p>
    In single server view by default you will see:
</p>

<ol>
    <li>
        A text box with the current values of:
        <ol type="i">
            <li>An average load over the last minute, 5 minutes and 15 minutes.</li>
            <li>CPU units count</li>
            <li>Cores per CPU count</li>
            <li>The amount of free disk space and its total capacity.</li>
            <li>The amount of RAM free and its total capacity.</li>
            <li>The amount of Swap memory used and its total capacity.</li>
        </ol>
    </li>
    <li>
        An average load chart. You can choose whether to view an average load per minute, 5 minutes or 15 minutes at any
        given time.
    </li>
    <li>
        A disk space chart. You have the option of viewing the available space, total capacity or the amount of space
        used.
    </li>
    <li>
        A free RAM chart. You will be able to choose whether to view free memory, used memory or the total size of RAM.
    </li>
    <li>
        CPU usage by type. You can choose to view CPU usage by user, system processes, or by processes that are waiting
        or is in an idle state.
    </li>
    <li>
        A Textbox with information regarding the RAM, this includes:
        <ol type="i">
            <li>The amount of free RAM and its total size.</li>
            <li>The amount of RAM used.</li>
            <li>The amount of swap memory used and its total size.</li>
        </ol>
    </li>
    <li>
        A Textbox with information about the disk space, this includes:
        <ol>
            <li>The amount of disk space free and its total capacity.</li>
            <li>The amount of disk space used.</li>
            <li>The point at which the disk is mounted.</li>
        </ol>
    </li>
</ol>

<h4>Note:</h4>
<p>
    During installation, Trafikito will try to retrieve information about the primary disk then display its stats to the
    user. You can always go to the data source settings and change which value particular variables should represent.
</p>


<!-- todo video & img -->
