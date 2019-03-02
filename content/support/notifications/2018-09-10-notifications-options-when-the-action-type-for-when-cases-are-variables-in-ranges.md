---
id: 9c6918b2-0f52-4908-859f-f74dd0d38997
layout: post
title:  "Options when the action type for when cases are variables in ranges?"
uri: options-when-the-action-type-for-when-cases-are-variables-in-ranges
tags: [notifications]
---

While creating notifications you have to add some _when_ cases. When cases defines _when_ to trigger the action of notifications. If the action type is set to a _Variable in a range_ you will get these options to make adjustments:

<!-- more -->

1.  **Variable to track** - select any variable defined in the data sources. This when case will track the range of the value for the selected variable.
2.  **Range change** - when a value changes it may move to different value ranges. This option determines what changes to action.
    1.  Normal → warn
    2.  Normal → error
    3.  Normal → any
    4.  Warn → normal
    5.  Warn → error
    6.  Warn → any
    7.  Error → normal
    8.  Error → warn
    9.  Error → any
    10.  Any → normal
    11.  Any → warn
    12.  Any → error
    13.  Any → any
3.  **Stay in range** - how long to wait for a value to stay in a new range. A value may fluctuate but to avoid short peak values you can use this option. You can select not to wait and fire [notifications](f7277d70-7b35-489b-b378-009a690e0a3f) immediately or wait a few minutes.
4.  **Wait before firing again** - you can select this if you want to fire this action several times when a value continuously stays in a new range or just fire once.
5.  **Allow case to fire at any time** - if it is turned on it will require other when cases to be fired on the same variable before this case can be fired again. It is useful in a scenario when a value jumps from a normal range to a warning or an error, stays there for a very short time and jumps back to a normal range. 

[Notifications](f7277d70-7b35-489b-b378-009a690e0a3f) about being in the warning/error ranges is not triggered because with stay in range it is set to wait for longer timeframes. So the value jumped back to a normal range and if it is allowed to be fired at any time, it would fire the notification that the value is in the normal range again. Though it would be valid information it’s not necessarily needed since it was just a small value change in a short time.