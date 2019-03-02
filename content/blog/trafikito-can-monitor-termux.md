---
layout: post
title:  "Trafikito can monitor Android servers. Track output of any command & take automated action."
categories: trafikito
permalink: /trafikito-monitor-output-of-any-android-command-take-automated-action-termux/
featured_image: trafikito-android-monitoring.png
---

{% include image.html file="trafikito-android-monitoring.png" alt="Trafikito runs on Android" %}

<p>
    Trafikito agent can run on any Linux machine but in order to run it on an Android phone, then Termux application can
    be used. Termux is Linux environment app for Android. So, to install it on your Android device, you will need to
    download it from the App Store
</p>

<!--more-->

{% include image.html file="trafikito-installing-on-android.png" alt="Installing Trafikito agent on Android" %}


<h2>Dependencies</h2>

<p>
    In order to satisfy the dependencies, you’ll have to run Termux and enable crontab by executing the <span
        class="t-code">crond</span> command. Crontab will make sure Trafikito agent is running. However, If you don't
    want to use crontab, that's fine. Just make sure the agent file is always running. Also, you will need ‘curl’ to
    download Trafikito. So, to get curl, type
    <span class="t-code">pkg install curl</span> and execute. Now, it should be downloaded and installed.
</p>


<h2>Add server on Trafikito dashboard</h2>

<p>
    To add your server on the Trafikito Dashboard, Please follow the 10 steps listed below:
<ol>
    <li>Go to the Trafikito website, https://trafikito.com/</li>
    <li>Create an account if you don't already have one.</li>
    <li>Login and view the Dashboard, you will notice an option to enter a server name.</li>
    <li>
        Enter your server name (you can use ANY name) but for this example, I used ‘Termux’. Then, click the "Add
        Server" button.
    </li>
    <li>
        After entering a server name, your new server should be created. Then, click "Install agent", a modal window
        will appear with the commands to download and run the Trafikito installation script. Since you’re not using
        Ubuntu you will have to select the "Other Linux" tab.
    </li>
    <li>
        Copy code from the first box and paste it in Termux. Then, click enter to execute.
    </li>
    <li>
        Copy and execute the second part of the code. Please note that most Linux environments have a temporary
        directory on the root path but Termux does not.
    </li>
    <li>
        After, you will be presented with the Trafikito agent installation splash screen. Just choose the directory path
        where you want to install the agent and click enter to execute it. And, that's it.
    </li>
    <li>
        <em>
            You will notice that Trafikito is waiting for the first data to come. And here it is. It appears that my
            phone is overloaded and it is running out of RAM. Note that Trafikito can be used on a phone, tablet or
            desktop. You can always hover variables and check current value and value range.
        </em>
    </li>
    <li>
        Click "Open" to see the detailed dashboard. On the left, you can see current average load and RAM usage. The
        changes over time are displayed in graphs.
    </li>
</ol>
</p>

{% include image.html file="trafikito-on-android.png" alt="Runing Trafikito on Android" %}

<h2>Customize</h2>

<p>
    You can track any command running on your phone and display the results here. During an installation, Trafikito aims
    to get detailed CPU usage information but if it is not available on your phone; then an empty white box is seen..
    Don’t worry, the dashboard is fully customizable. First, you’ll need to turn on "Edit mode" (the bottom left corner
    of the screen), then click edit which is a pencil icon. Then select Delete. And tada, the white box has
    disappeared. Also, in the layout edit mode. you can drag boxes around to organize the layout to your liking.
</p>

<p>
    Information is continuously being transmitted from the phone, so, to learn how to use custom notifications and
    commands please check out the video tutorials and subscribe.
</p>

{% include youtube.html id="cwQGDNTSyqM" %}
