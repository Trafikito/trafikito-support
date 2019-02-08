---
layout: post
title:  "How to change the name of a current command?"
uri: how-to-change-the-name-of-a-current-command
tags: [data sources]
---

<p>
    To change the command name you need to login to your server and update <span class="t-code">/opt/trafikito/available_commands.sh</span>
    file.
</p>

<!--more-->

<ol>
    <li>
        Login to your machine. You can use SSH, FTP or anything else depending on your machine.
    </li>
    <li>
        Edit this file: <span class="t-code">/opt/trafikito/available_commands.sh</span>
        <ol type="i">
            <li>
                If this file is not available, Trafikito agent is not installed yet or it is installed at a custom
                location
            </li>
        </ol>
    </li>
    <li>
        Edit the alias of the command at the end of the file.
    </li>
    <li>
        Save the file and wait a couple minutes.
    </li>
</ol>

<h4>Warning:</h4>

<p>
    If any data sources were using the changed command, you must update those data sources to use the new command. If
    the new command is not available yet on the dashboard, make sure to wait a couple minutes for the new data to come.
</p>

<!-- todo validate warning, is it so for sure? -->