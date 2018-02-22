// ==UserScript==
// @name        FreshDeskFixer
// @namespace   http://01t.co.uk
// @include     http://support.01t.co.uk/a/tickets/filters/new_and_my_open
// @version     0.2
// @grant       none
// @downloadURL https://github.com/saintwolf/FreshDeskFixer/raw/master/FresDeskFixer.user.js
// @updateURL   https://github.com/saintwolf/FreshDeskFixer/raw/master/FresDeskFixer.user.js
// ==/UserScript==

function main() {
  console.log('FreshDeskFixer (makeFixesHappen): Doing the fixes now bossman!');

  // First we have to make the entire table wider
  if (document.getElementsByClassName('responsive').length > 0) {
      var responsive = document.getElementsByClassName('responsive')[0];
      responsive.style = "width: 100%; max-width: 100%";
  }

  // This will re-run the function again 1 second after completion
  setTimeout(main, 1000);
}

main();
