# Overview
This is a Chrome browser extension that adds a nav bar to *.gearupsports.net.
It currently has one functional button which will add one of each size of a product in the page - if you are on a product page.

This is a quite hacky exercise in learning a few things about a browser extension.

## Layout
* manifest.json: describes the extension for the browser
* background.js: runs the extension all the time adding a rule that says activate this extension if a site is *.gearupsports.net
* popup.html, popup.js: these implement what you see when you click the extension icon in the browser top bar
* content.js, content.css: these run in a dom/process separate from the web page and inject the navbar and 'features_script.js' into the page
* features_script.js: implements the features listed in the navbar like "Add all sizes"
  
This extension uses chrome.storage.sync api because it allows the state to be shared across all instances of the browser. Maybe localStorage is better?
  
##. Next
  * Probably which code is in which file could be reviewed and improved. The goal is to make it easier for the next developer to add new features to the navbar / site without having to reverse engineer how an extension works.
  * Create a new icon for the extension
  * Make the navbar pretty
  * Make the "Add All Sizes" option only appear on a product page
  * Add a feature that makes a "Add All" button appear next to each product on the overview page (but only if the navbar is visible)
  * ...

#. Instructions

After cloning this repo locally:
* Go to chrome://extensions/
* click "Load unpacked"
* select this directory - there should now be a new icon in the browser bar
* navigate to https://baseball-samples.gearupsports.net/
* click the icon in the browser to bar and select "Show"
* There should now be a new navbar at the top of the page
* Navigate to a product page like https://baseball-samples.gearupsports.net/index.php?route=product/product&product_id=26379
* Select "Add All Sizes"
* One of each size of that shirt should have been added to your shopping cart
