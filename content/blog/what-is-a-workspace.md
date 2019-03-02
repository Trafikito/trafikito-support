---
layout: post
title:  "What is a workspace?"
categories: trafikito users
permalink: /what-is-a-workspace/
featured_image: trafikito-what-is-a-workspace.png
---


<p>
    At Trafikito you can monitor several servers at once. Whether you have a database running on 3 servers, a web
    application on another, some caching on the next or maybe several projects and microservices running on different
    machines. The bottom line is <strong>you need to monitor several different machines at once</strong>. With Trafikito
    you can combine
    all servers in a single workspace and have a great overview of all your servers at once.
</p>
<!--more-->

<p>
    A Workspace is like a container for several monitors. A single workspace contains:
<ol>
    <li>Servers to monitor</li>
    <li>Members</li>
</ol>
</p>

{% include image.html file="trafikito-workspace-servers-list.jpg" alt="Workspaces at Trafikito (servers list)" %}

<h2>Servers Management</h2>

<p>
    The Initial view of any workspace is your list of servers. In this list, you can see how all of your servers are
    doing. On the left, you can see the overall status and It may be:
</p>

<div class="t-flex-align-center t-m6">
    <div>1.</div>
    <div class="t-range-normal t-mh6"></div>
    <div>Everything's <strong class="t-mh3">ok</strong></div>
</div>
<div class="t-flex-align-center t-m6">
    <div>2.</div>
    <div class="t-range-warning t-mh6"></div>
    <div>At least one monitored value is in the <strong class="t-mh3">warning</strong> range</div>
</div>
<div class="t-flex-align-center t-m6">
    <div>3.</div>
    <div class="t-range-error t-mh6"></div>
    <div>At least one monitored value is in an <strong class="t-mh3">error</strong> range</div>
</div>

{% include image.html file="trafikito-workspace-servers-list-something-wrong.jpg" alt="Workspaces at Trafikito (servers list)" %}

<p>
    This list <strong>refreshes automatically</strong> per minute to ensure the overview is current.
</p>
<p>
    Also, you have the option of adding more servers, viewing Trafikito installation instructions and removing a server.
    This is all done in the same clean list of servers in the selected workspace.
</p>

<h2>Members Management</h2>
<p>
    The Free plan allows only one member in a workspace but with the paid plans you can add up to <strong>30
    members</strong>. Also, you can be a member of several workspaces at once. After registering, you automatically get
    the default workspace but you can delete or make changes if you desire.
</p>
<p>
    The User that creates a workspace automatically becomes the owner of it and any new user will have the role of a
    member.
</p>

{% include image.html file="trafikito-workspace-members-list.jpg" alt="Workspaces at Trafikito (members list)" %}
