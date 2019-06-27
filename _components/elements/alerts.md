---
title: Alerts
category: Elements
order: 8
scss: alerts.scss
usage: "Application Alerts"

---

### Timeout

<div class="sessionTimeoutWarning">
  <span>Your session will expire in 18 seconds. Would you like to continue working?</span>
  <button id="btnHideTimeoutWarning" class="text-button">Stay logged on</button> or <a href="/Account/LogOff">Log off now</a>
</div>

{% highlight html %}
<div class="sessionTimeoutWarning is-hidden">
  <span>Your session will expire in 18 seconds. Would you like to continue working?</span>
  <button id="btnHideTimeoutWarning" class="text-button">Stay logged on</button> or <a href="/Account/LogOff">Log off now</a>
</div>
{% endhighlight %}

### Alert with close button

<div class="general-alert close-timeout">
  <span>This is a message for an alert or notification with a close button</span>
  <button id="btnCloseTimeout" class="close-button unstyled-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="23.55" height="23.55" viewBox="0 0 23.55 23.55"><title>close</title><path d="M3.45,3.45a11.77,11.77,0,1,0,16.65,0A11.77,11.77,0,0,0,3.45,3.45ZM18.9,18.9a10.07,10.07,0,1,1,0-14.24A10.08,10.08,0,0,1,18.9,18.9ZM7.42,6.21,6.21,7.42l4.36,4.36L6.21,16.13l1.21,1.21L11.77,13l4.36,4.36,1.21-1.21L13,11.78l4.36-4.36L16.13,6.21l-4.36,4.36Z" fill="#00af87"/></svg>
  </button>
</div>

{% highlight html %}
<div class="general-alert close-timeout">
  <span>This is a message for an alert or notification with a close button</span>
  <button id="btnCloseTimeout" class="close-button unstyled-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="23.55" height="23.55" viewBox="0 0 23.55 23.55"><title>close</title><path d="M3.45,3.45a11.77,11.77,0,1,0,16.65,0A11.77,11.77,0,0,0,3.45,3.45ZM18.9,18.9a10.07,10.07,0,1,1,0-14.24A10.08,10.08,0,0,1,18.9,18.9ZM7.42,6.21,6.21,7.42l4.36,4.36L6.21,16.13l1.21,1.21L11.77,13l4.36,4.36,1.21-1.21L13,11.78l4.36-4.36L16.13,6.21l-4.36,4.36Z" fill="#00af87"/></svg>
  </button>
</div>
{% endhighlight %}
