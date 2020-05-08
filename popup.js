let showAdmin = document.getElementById('showAdmin');

showAdmin.onclick = function(element) {
  console.log("swapAdminState called")

  current = showAdmin.innerHTML;
  if (current.toLowerCase().localeCompare("show") == 0) {
    showAdmin.innerHTML = "Hide";

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
	tabs[0].id,
	{code: 'document.getElementsByClassName("adminnav")[0].style.display = "block"'});
    });
  } else {
    showAdmin.innerHTML = "Show";

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
	tabs[0].id,
	{code: 'document.getElementsByClassName("adminnav")[0].style.display = "none"'});
    });
  }
};
