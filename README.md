Chrome Deltek Support
=====================

Simple Chrome Extension hack to 'fix' Deltek issue with WebKit

Inspired by http://code.google.com/p/chromium/issues/detail?id=2628#c19

>In deltek when you click on the binoculars, it goes through a function on the page and eventually submits a form. 
>
>Under chrome, it seems that in the post data the 'event' parameter for this form is not being set from 'test' to 'showChargeForm'. Therefor when the server replies, it is getting insufficient data to process your request.
>
>Under preliminary inspection this seems to be sloppy coding on Delteks side. In their javascript they reference the variable 'event', and try to set it's value. By default it would reference the hidden form input named 'event'. The problem occurs because event callbacks in Chrome already have a variable named 'event' set which contains the callback event info (in this circumstance it contains MouseEvent data). Because this variable is already set, blindly telling event.value to be set to something won't automatically set the form input to the value that is needed.
>
>No such variable is set in Firefox and IE and therefor the proper form input gets set correctly before the form submission.
