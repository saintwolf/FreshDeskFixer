// ==UserScript==
// @name        FreshDeskFixer
// @namespace   http://01t.co.uk
// @include     http://support.01t.co.uk/a/tickets/filters/new_and_my_open
// @version     0.1
// @grant       none
// ==/UserScript==
document.addEventListener('DOMContentLoaded', function () {
  // Do stuffs here
  var responsive = document.getElementsByClassName('responsive')[0];
  responsive.style = "width: 100%; max-width: 100%";
}
