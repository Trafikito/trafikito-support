---
id: 92614829-ba17-41fb-a96f-13954a4cdc98
layout: post
title:  "What is available in the default single server view?"
uri: what-is-available-in-the-default-single-server-view
tags: [dashboard] 
date: 2018-09-10
---

During installation, Trafikito will try to get details about all your server’s base resources and generate a dashboard for you.

<!--more-->

By default, Trafikito checks include information on the average load, CPU, disk, and RAM. As well as, several extra details such as the server’s hostname.

#### Note:

With some configuration, you can track the output of **any command** running on your server.

In single server view by default you will see:

1.  A text box with the current values of:
    1.  An average load over the last minute, 5 minutes and 15 minutes.
    2.  CPU units count
    3.  Cores per CPU count
    4.  The amount of free disk space and its total capacity.
    5.  The amount of RAM free and its total capacity.
    6.  The amount of Swap memory used and its total capacity.
2.  An average load chart. You can choose whether to view an average load per minute, 5 minutes or 15 minutes at any given time.
3.  A disk space chart. You have the option of viewing the available space, total capacity or the amount of space used.
4.  A free RAM chart. You will be able to choose whether to view free memory, used memory or the total size of RAM.
5.  CPU usage by type. You can choose to view CPU usage by user, system processes, or by processes that are waiting or is in an idle state.
6.  A Textbox with information regarding the RAM, this includes:
    1.  The amount of free RAM and its total size.
    2.  The amount of RAM used.
    3.  The amount of swap memory used and its total size.
7.  A Textbox with information about the disk space, this includes:
    1.  The amount of disk space free and its total capacity.
    2.  The amount of disk space used.
    3.  The point at which the disk is mounted.

#### Note:

During installation, Trafikito will try to retrieve information about the primary disk then display its stats to the user.
 You can always go to the data source settings and change which value particular variables should represent.