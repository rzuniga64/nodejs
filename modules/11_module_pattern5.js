/**
 *  Pattern 5: Revealing Module Pattern is extremely popular in JavaScript.
 *
 *  Exposing only the properties and methods you want via a returned object.
 *  A very common and clean way to structure and protect code within modules.
 *
 *  Only the function is exposed not the variable greeting
 *  When the function greet is executed it will still have access to the variable.
 *  I won't have direct access to the greeting variable outside the module.
 *  So you can have a number of other functions and variables and logic that is not exposed outside the module.
 *  I reveal only the methods, properties, values that I want someone to actually be able to use.
 *  Everything else is private.
 */
 var greeting = 'Module Pattern 5';  // this is not available outside the module

function greet() {
	console.log(greeting);
}

// replace module.exports empty object with a new object with a name and value.  Only the function is exposed.
module.exports = {
	greet: greet
};