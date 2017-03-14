# Introduction #
This folder contains all files need to run the "Pokemon API" challenge.

## Caveats ##
1. Please note that due to how the [PokeAPI](http://pokeapi.co/) works, only a certain number of requests per hour are allowed and due to the amount of data being retrieved you may receive an error indicating you cannot see the requested content due to already having requested it too often.
  1. There is unfortunately nothing I can do about this as I do not maintain the PokeAPI servers

2. The amount of data being retrieved is quite large due to the number of moves that need to be individually retrieved and parsed. You may have to wait several minutes until everything loads; please be patient.

3. I have used ECMAScript 5/6 items to achieve desired functionality. Some features - specifically lambda functions and Promises - may not work on older browsers.
  1. I have been able to test successfully on the latest version of Google Chrome and Firefox and have not encountered any issues

## Folders ##

### bower_components ###
Contains all components from running `bower install`. These components are included for completion sake and include minified bootstrap and everything it needs to run it (such as jQuery)

### js ###
All JS files used to achieve the end-goal

### res ###
All normally offiste scripts have been downloaded an included here to be referenced in the `index.html` file

### stylesheets ###
Any additional stylesheets used were put into this folder. These stylesheets overwrite the base bootstrap styling due to the way they are included in `index.html`

## Other Files ##

### bower.json ##
Needed to conrrectly run `bower install`. As the files are already included, you shouldn't need to run an install

## index.html ##
The page that shows all information. It uses handlebars for automatic generation of panel content.

