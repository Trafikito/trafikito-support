---
layout: post
title:  "How to add a new command?"
uri: how-to-add-a-new-command
tags: [data sources]
---

1.  Login to your machine. You can use SSH, FTP or anything else depending on your machine.
2.  Edit this file: `/opt/trafikito/available_commands.sh`
    1.  If this file is not available, Trafikito agent is not installed yet or it is installed at a custom location
3.  Add a new alias of command at the end of the file.
4.  Save the file and wait a couple minutes.

<!--more-->

E.g. you want to execute `top -bcn1` command. To add it, you can use:

`trafikito_custom="top -bcn1"`

  

After **a minute or two** you will find `trafikito_custom` available in the data source edit views on the dashboard.

#### Note:

Make sure all commands have a `trafikito_` prefix or it won’t work.