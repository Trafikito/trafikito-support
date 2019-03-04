---
id: 6c89d7c6-9b94-468a-b100-9d1d9991dd9a
layout: post
title:  "Options when the action type for the when case is getting or not getting data?"
uri: options-when-the-action-type-for-the-when-case-is-getting-or-not-getting-data
tags: [notifications]
date: 2018-11-15
---

While creating notifications you have to add when cases. When cases define when to trigger the action of notifications. If the action type is set to _Getting data_ or _Not getting data_ you will get these options to make adjustments:

<!-- more -->

1.  **Getting / not getting for** - select the amount of minutes to wait before it’s considered a real situation. There may be random issues like the network between your server and Trafikito endpoint lags a bit and drops a package. Trafikito agent will try to submit logs several times before giving up, so it may just be a temporary issue and no need to react immediately.
2.  **Wait before firing again** - you can select if you want to fire this action several times or just fire once. Trafikito recommends setting this to **no repeat,** when **type is getting data** and **set to some interval** in minutes **when action type is _not getting data_.** With such settings only one <wiki>notification</wiki> will be fired after recovery and several if Trafikito stops receiving data continuously.