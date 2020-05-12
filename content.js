// inject the script that implements the features into the page
var s = document.createElement('script');
s.src = chrome.runtime.getURL('features_script.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

// determine whether to show the admin nav initially or not
var showNav = chrome.storage.sync.get("adminnav_visible", function(items) { console.log("Retrieving from storage: " + items); });
visState = "none";
if (showNav != null && showNav[0]) {
  visState = "block";
}

// inject the menu that has the feature buttons on it
document.body.insertAdjacentHTML("afterbegin", `
<div class="adminnav" style="display:` + visState + `;"> 
  <a href="#" onclick="addAllSizes();">Add All Products</a>
  <a href="#">Something Else</a>
</div>`);

