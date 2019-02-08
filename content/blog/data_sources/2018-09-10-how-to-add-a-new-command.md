---
layout: post
title:  "How to add a new command?"
uri: how-to-add-a-new-command
tags: [data sources]
---

<ol>
    <li>
        Login to your machine. You can use SSH, FTP or anything else depending on your machine.
    </li>
    <li>
        Edit this file: <span class="t-code">/opt/trafikito/available_commands.sh</span>
        <ol type="i">
            <li>If this file is not available, Trafikito agent is not installed yet or it is installed at a custom
                location
            </li>
        </ol>
    </li>
    <li>
        Add a new alias of command at the end of the file.
    </li>
    <li>
        Save the file and wait a couple minutes.
    </li>
</ol>

<!--more-->

<p>
    E.g. you want to execute <span class="t-code">top -bcn1</span> command. To add it, you can use:
</p>

<div class="t-code">trafikito_custom="top -bcn1"</div>
<br>

<p>
    After <strong>a minute or two</strong> you will find <span class="t-code">trafikito_custom</span> available in the
    data source edit views on the dashboard.
</p>

<h4>Note:</h4>
Make sure all commands have a <span class="t-code">trafikito_</span> prefix or it won’t work.

<!-- todo [link to Why all commands start with trafikito_?] -->
