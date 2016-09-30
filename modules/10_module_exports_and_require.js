/**
 *  How do modules in node.js work?
 *  Require function looks for a greet file with a .js extension. If it can’t find it then it will look for a folder
 *  with the name greetme.  Then it looks inside that folder for greetme.js. I can have multiple files inside the greet
 *  folder that we can call using greetme.js.  When it runs greetme.js it give me back an object with two methods 'english'
 *  and spanish.
 *
 *  JavaScript engine will look for greetme.js and give me back this object:
 *  module.exports = {
 *      english: english,
 *      spanish: spanish
 *  };
 *
 *  so greetme will now be that object. The object has two methods: 'english' and 'spanish'.  So when the app.js file
 *  is run the require will run go to the greet folder, process greetme.js, run the require and find the english.js file
 *  and get that back and set a var 'english' to the results of it. The 'spanish' variable will be equal to the results
 *  of the require for spanish.js which is attached to module.exports.  Then in the greetme.js file I will see that
 *  the exports property of the module object is the new object that has been created with those two methods attached
 *  to it.  We can now see how we are putting this module together.  We now have a single object that has access to
 *  all the features that I wanted it to that I exposed but are actually split up among multiple files. But I only need
 *  to require it once.
 */

// make this available to use as a complete module.

var english = require('./10_module_exports_and_require/english');
var spanish = require('./10_module_exports_and_require/spanish');

// an object with two methods on it.
module.exports = {
    english: english,
    spanish: spanish
};