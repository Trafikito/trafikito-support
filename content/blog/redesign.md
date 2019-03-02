---
id: b4b1981e-93f9-4efa-ac17-4ed9d00f259c
layout: post
title:  "Dashboard Redesign"
categories: trafikito design
uri: blog/trafikito-redesign
featured_image: trafikito-redesign.png
tags: [blog]
---

<p>
    Weeks has flown by and a lot has been done. The most visible updates were changes for the color palette, many text
    alignments and layout issues fixed. The User Interface (UI) is now faster than ever. Plus the build is smaller,
    loads faster, fewer re-paints etc.etc.
</p>

<!--more-->

{% include image.html file="trafikito-single-server-view.png" alt="Single server default dashboard view" %}

<h3>The Color Palette</h3>

<p>
    The color palette was defaulted colors that were provided by ‘Material-UI’ library which is used to build all UI.
    So, you can clearly understand why this was the first adjustment that was made. Now, the color palette is more
    unique, which is a major plus for Branding.
</p>

<h3>Text Alignment</h3>

<p>
    Visual aesthetics are very important. Have you ever visited a site and the text was way too difficult to read? Well,
    that’s simply annoying. So, I ensured that the copy was clearer and shorter. Now, the text alignment looks better.
</p>

<h3>Less Visual Noise</h3>
<p>
    Numerous layout issues were fixed. Now, the overall user experience is better and it’s easier to find required
    options. Basically, there's less visual noise.
</p>

<h2>User Interface (UI)</h2>
<h3>All about the user experience.</h3>
<p>
    UI is all about the user experience. It’s everything that users use to interact with software. Basically, it's all
    the visual elements, including text. The UI can be GUI (graphical user interface) or CLI (command line interface).
    Trafikito is using GUI on the web and is now faster than ever.
</p>

<h3>The Build is Smaller & Loads are Faster</h3>
<p>
    The size was 1.2MB but it was reduced by 500 KB and now it's 730 KB. Also, the initial load is faster for first-time
    visitors and there’s faster response on user interaction. Significantly there are fewer resources used to load the
    website (less CPU used from user's machine = better battery life for users).
</p>

<h3>Re-Paints & Re-Flows</h3>
<p>
    Re-Paints are part of the process to display elements on the UI. The re-paints and re-flows were both optimized on
    Trafikito, so all UI requires fewer resources from the user's machine. This means less battery drain on mobile
    devices. Check this answer explaining what is reflow and repaint:
    [https://stackoverflow.com/a/2549317/1737158](https://stackoverflow.com/a/2549317/1737158)
</p>

<h3>The Installation View</h3>
<p>
    The installation view was totally redesigned. At first, it was 3 steps but now it's only 1 step installation. Now,
    it's clearer, the loads are faster and there’s an option for other Linux machines. Lastly, the Installation process
    was updated, shebang in a shell script is more portable + fixed several minor issues. Also, I added extra caching to
    deliver agent faster and overall it’s simplified.
</p>

{% include image.html file="trafikito-monitoring-install-agent.png" alt="Installing Trafikito agent" %}

<h2>Back-End Optimizations</h2>

<p>
    These past few weeks, I started using Redis database more heavily to cache many things. After this was updated, the
    main database is receiving 40-60% fewer queries per minute, everything overall works faster and it requires less RAM
    & CPU.
</p>

<h2>Social Channels</h2>

<p class="t-quote">
    Don’t use social media to impress people; use it to impact people. - Dave Willis
</p>

<p>
    The final move was to introduce Trafikito to everybody and what better way to make an introduction than social
    media. So I created an <a target="_blank" href="https://www.instagram.com/trafikito/">Instagram Profile</a>, <a
        target="_blank" href="https://www.youtube.com/channel/UCofioaADtesyD75204ngeoQ">YouTube channel</a>, <a
        target="_blank"
        href="https://twitter.com/trafikito">Twitter account</a>, <a target="_blank"
                                                                     href="https://www.facebook.com/Trafikito/">Facebook
    page</a>, <a target="_blank" href="https://www.linkedin.com/company/trafikito/">Linked In company</a>. Now,
    Trafikito is all over the place. You can follow updates on your favorite platform.
</p>

<p>
    Trafikito is all over the place now. You can follow updates on your favourite platform.
</p>

<h2>Conclusion</h2>
<p>
    In short, all these changes have made it more appealing to users. After all, people love beautiful finishes that are
    easy to use.
</p>