// 

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  console.log("The adminer is hidden.");

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {urlMatches: '.*\.gearupsports\.net'},
      })
		  ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
