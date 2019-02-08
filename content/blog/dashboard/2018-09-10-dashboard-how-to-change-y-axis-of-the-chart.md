---
layout: post
title:  "How to change y-axis of the chart?"
uri: how-to-change-y-axis-of-the-chart
tags: [dashboard]
---

<ol>
    <li>
        Go to single server view where you can see the box with the chart.
    </li>
    <li>
        Turn on the edit mode switch, which is on the bottom left of single server view. Now you can view settings of
        any box, drag boxes around, add new or remove current.
    </li>
    <li>
        To edit a specific t chart, click the pencil icon on it. Dialog with settings appear.
    </li>
    <li>
        Scroll down to the “Optional settings” section and edit the min or max value of y-axis. You can use numbers
        together with any variables. Variables must be surrounded by pairs of curly braces like this: <span
            class="t-code">{% raw %}{{variable_name}}{% endraw %}</span>.
        Variables will be replaced with the current value. On the bottom of the same view you can see a cloud of chips
        with all variables. Click any to copy and paste it in the settings field. When a variable is pasted in options,
        an input preview will be rendered of the current value above the input.
    </li>
    <li>
        Click save on the bottom right hand corner.
    </li>
    <li>
        Close the settings dialog with the button on the top right of the dialog.
    </li>
    <li>
        Switch edit mode off.
    </li>
</ol>

<!--more-->

<p>
    While adding variables in the y-axis for the min or max values, you can see a rendered preview with the current
    value of the variable. How variables are rendered depends on the variable display type.
</p>

<h4>Notes:</h4>
<ul>
    <li>Don’t forget to click “Save”</li>
    <li>Changes will be applied to all members of the workspace.</li>
    <li>To save any changes you must have an admin or owner role in an active workspace.</li>
</ul>