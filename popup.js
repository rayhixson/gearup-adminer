let showAdmin = document.getElementById('showAdmin');

// set the correct default when the page loads
chrome.storage.sync.get("adminnav_visible", function(items) {
  showAdmin.innerHTML = items.adminnav_visible ? "Hide" : "Show";
});

showAdmin.onclick = function(element) {
  current = showAdmin.innerHTML;
  if (current.toLowerCase().localeCompare("show") == 0) {
    showAdmin.innerHTML = "Hide";

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
	tabs[0].id,
	{code: 'chrome.storage.sync.set({ "adminnav_visible": true }, function(){}); document.getElementsByClassName("adminnav")[0].style.display = "block";'}
      );
    });
  } else {
    showAdmin.innerHTML = "Show";

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
	tabs[0].id,
	{code: 'chrome.storage.sync.set({ "adminnav_visible": false }, function(){}); document.getElementsByClassName("adminnav")[0].style.display = "none";'});
    });
  }
};
