---
id: aefd2b09-041c-4650-930e-3b818d01b343
layout: post
title:  "Dashboard Customization"
categories: trafikito users
uri: blog/dashboard-customization
featured_image: dashboard-customization.jpg
tags: [blog]
---


<p>
    At Trafikito you can monitor the output of any commands available on your Linux server. During installation,
    Trafikito agent tries to detect basic available commands and generate an initial dashboard for you automatically.
    Then, you can make desired changes to the default dashboard as it is very flexible.
</p>
<!--more-->

{% include image.html file="trafikito-dashboard-animated.gif" alt="Trafikito single server view - drag & resize" %}

<h2>Default View</h2>

<p>The default view will contain:</p>

<ol>
    <li>Hostname and overview of main resources: Disk space, RAM, CPU</li>
    <li>Detailed average load logs over time</li>
    <li>Detailed disk space, RAM and CPU logs over time</li>
    <li>Several text boxes with a more detailed overview of the disk space, RAM, and CPU at the moment</li>
</ol>

<h2>Desktop and Mobile Layouts</h2>
<p>
    The mobile and desktop layouts are different. The default view on mobile devices will appear as columns of boxes.
    So, you will need to enter the Edit Mode on your mobile device in order to drag around & resize the boxes for the
    mobile view.
</p>
<p>
    While dragging on a mobile is a little harder, you can just narrow the window of your browser on the desktop to view
    mobile layout and edit it on the desktop too.
</p>
<h2>Edit Mode</h2>
<p>
    You can switch to the Edit Mode and make your desired changes to everything, at any given time. You can add a new
    block, drag around and resize the existing ones. Plus, you can change the contents of anything and switch a block
    type from text to chart or chart to text. You can change the line colors of the charts, the title, set the default
    visibility of the series and the minimum or maximum range of the y-axis. You can use custom text together with
    variables for all settings.
</p>
{% include image.html file="dashboard-edit-text-box.gif" alt="Text box edit view at single server view" %}

<h2>Chart vs. Text Blocks</h2>
<p>
    Every block may contain text or a chart. In the Edit Mode, you can switch between modes of the block. Currently, you
    can choose between chart or text but there will be more modes available down the line. In order to have custom
    auto-updating titles like “RAM free: 1008.91 MB” you can use variables in any settings of a chart or in a text. You
    will always find all of your variables in settings. The color next to the variable indicates if its value is in the
    <span class="t-range-normal t-txt-white t-p3 t-mh3">normal</span>, <span
        class="t-range-warning t-txt-white t-p3 t-mh3">warn</span> or
    <span class="t-range-error t-txt-white t-p3 t-mh3">error</span> ranges.
</p>


{% include image.html file="dashboard-edit-chart-box.gif" alt="Text box edit view at single server view" %}

<h2>Working with a Team</h2>
<p>
    The dashboard is visible for all active members of the workspace. When boxes are updated, updates are visible for
    all, in both the desktop and mobile layouts. As a general practice, we recommend giving a minimum specified role to
    each member of a team to prevent accidents. You can always make changes to the user roles in the workspace settings.
</p>


{% include image.html file="trafikito-workspace-members-list.jpg" alt="Trafikito workspace members list" %}
