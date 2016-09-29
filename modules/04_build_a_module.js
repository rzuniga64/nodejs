/**
 *  Let's build a module
 *
 *  This code is independent from other code.
 *  Code in this module is protected. app.js does not have direct access to it.
 *  Keeps code structured.
 *  Code is easier to understand and find where it is.
 *  The function 'require' is needed to import a module passing it the path to the module.
 */

var greet = function() {
    console.log("Hello from greet.js");
};
//greet();

// module.exports now exposes the greet function
module.exports = greet;