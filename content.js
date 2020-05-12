// inject the script that implements the features into the page
var s = document.createElement('script');
s.src = chrome.runtime.getURL('features_script.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

// inject the menu that has the feature buttons on it
document.body.insertAdjacentHTML("afterbegin", `
<div class="adminnav" style="display:block;"> 
  <a href="#" onclick="addAllSizes();">Add All Sizes</a>
  <a href="#">Something Else</a>
</div>`);

// determine whether to show the admin nav initially or not
chrome.storage.sync.get("adminnav_visible", function(items) {
  if (items == null || !items.adminnav_visible) {
    document.getElementsByClassName("adminnav")[0].style.display = "none";
  }
});

