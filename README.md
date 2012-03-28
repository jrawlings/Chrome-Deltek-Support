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

Installation
------------

You can clone this repository and load the extension yourself following these instructions:

http://code.google.com/chrome/extensions/getstarted.html#load

Or you can download the pre-built extension by going to the following link and downloading the Chrome-Deltek-Support.crx extension.

https://github.com/jrawlings/Chrome-Deltek-Support/downloads

License
-------

(The MIT License)

Copyright (c) 2012 Joe Rawlings

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.