/**
 *  How do modules in node.js work?
 *  Require function looks for a greet file with a .js extension.
 *  If it can’t find it then it will look for a folder with the name greetme.
 *  Then it looks inside that folder for greetme.js.
 *  If it can't find greetme.js then it looks for index.js.
 *  When it runs index.js it give me back an object with two methods 'english'and spanish.
 *
 *  JavaScript engine will give me back this object:
 *  module.exports = {
 *      english: english,
 *      spanish: spanish
 *  };
 *
 *  The object has two methods: 'english' and 'spanish'.
 *  When app.js is run the require will run go to the folder, process index.js, run the require and find english.js.
 *  and set a var 'english' to the results of what it gets back. the same thing happens for the var 'spanish'.
 *  In the index.js file the exports property of the module object is the new object created with those two methods attached.
 *  We can now see how we are putting this module together.  We now have a single object that has access to
 *  all the features that I wanted but are actually split up among multiple files. But I only need to require it once.
 */

// make this available to use as a complete module.

var english = require('./english');
var spanish = require('./spanish');

// an object with two methods on it.
module.exports = {
    english: english,
    spanish: spanish
};