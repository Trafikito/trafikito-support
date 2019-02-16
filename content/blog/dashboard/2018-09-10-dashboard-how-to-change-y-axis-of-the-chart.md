---
layout: post
title:  "How to change y-axis of the chart?"
uri: how-to-change-y-axis-of-the-chart
tags: [dashboard]
---
1.  Go to single server view where you can see the box with the chart.
2.  Turn on the edit mode switch, which is on the bottom left of single server view. Now you can view settings of any box, drag boxes around, add new or remove current.
3.  To edit a specific t chart, click the pencil icon on it. Dialog with settings appear.
4.  Scroll down to the “Optional settings” section and edit the min or max value of y-axis. You can use numbers together with any variables. Variables must be surrounded by pairs of curly braces like this: `{{variable_name}}`. Variables will be replaced with the current value. On the bottom of the same view you can see a cloud of chips with all variables. Click any to copy and paste it in the settings field. When a variable is pasted in options, an input preview will be rendered of the current value above the input.
5.  Click save on the bottom right hand corner.
6.  Close the settings dialog with the button on the top right of the dialog.
7.  Switch edit mode off.

<!--more-->

While adding variables in the y-axis for the min or max values, you can see a rendered preview with the current value of the variable. How variables are rendered depends on the variable display type.

#### Notes:

*   Don’t forget to click “Save”
*   Changes will be applied to all members of the workspace.
*   To save any changes you must have an admin or owner role in an active workspace.