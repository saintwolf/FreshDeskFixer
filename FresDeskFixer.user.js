// ==UserScript==
// @name        FreshDeskFixer
// @namespace   http://01t.co.uk
// @include     http://support.01t.co.uk/a/tickets/filters/new_and_my_open
// @version     0.2
// @grant       none
// ==/UserScript==

function makeFixesHappen() {
  console.log('FreshDeskFixer (makeFixesHappen): Doing the fixes now bossman!');
  var responsive = document.getElementsByClassName('responsive')[0];
  responsive.style = "width: 100%; max-width: 100%";
}

function main() {
  // We need to implement an infinite loop and wait 1 second before running it again.
  // This forces the size to change when dynamic elements change on the page.
  while(true) {
    setTimeout(makeFixesHappen, 1000);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // The main entry point into the application
  main();
}
