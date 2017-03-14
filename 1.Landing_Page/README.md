# Introduction #
This folder contains all items related to the landing page challenge except the "Lato" font which could not be included due to how it loads offsite via Google Fonts
- A BIG caveat to running this is that `index.html` must be run from a __local server__ NOT via `file://` or the Google Spreadsheet submission will NOT work!

## Folders ##

### bower_components ###
Contains all components from running `bower install`. These components are included for completion sake and include minified bootstrap and everything it needs to run it (such as jQuery)

### images ###
All images utilised by the landing page such as the background and logos

### res ###
All normally offiste scripts have been downloaded an included here to be referenced in the `index.html` file
The only catch is the file `Google_Script.gs` which is a script setup on a Google Spreadsheet that handles the sending of emails and storing of data in the aforementioned spreadsheet. It WILL NOT run locally but has been included to demonstrate the code required to achieve this functionality

### stylesheets ###
Any additional stylesheets used were put into this folder. These stylesheets overwrite the base bootstrap styling due to the way they are included in `index.html`

## Other Files ##

### bower.json ##
Needed to conrrectly run `bower install`. As the files are already included, you shouldn't need to run an install

## index.html ##
The landing page itself. Uses bootstrap for responsiveness and MUST be run from a __local server__ or the Google Spreadsheet submission will not work and may cause the file to 'crash'
