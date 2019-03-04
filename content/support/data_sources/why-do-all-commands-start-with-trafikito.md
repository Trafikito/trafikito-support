---
id: 5035e2ca-13c6-4897-9d23-00197c6bb911
layout: post
title:  "Why do all commands start with trafikito_?"
uri: why-do-all-commands-start-with-trafikito
tags: [data sources]
date: 2018-09-10
---

For higher security standards. By using only alias commands on your server Trafikito ensures that no unexpected commands run. Imagine losing your login details or having an angry person on your team with an admin role.

<!--more-->

Without prefix restrictions, someone with bad intentions may add `rm -rf /` (remove everything from the server) or similar damaging commands and without protection, Trafikito would run it.

Utilizing **trafikito_** prefix guarantees that Trafikito agent only uses commands that are aliases for something. You explicitly have to login to your machine in order to edit `/opt/trafikito/available_commands.sh` file to have a new command available.

By default, during installation, Trafikito adds aliases for all of the most popular commands such as `uptime`, `free` or `df`. So, you can just select those from the drop-down when adding new data sources.
