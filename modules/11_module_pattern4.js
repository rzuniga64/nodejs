/**
 *  Pattern 4: replace module.exports object with the function constructor itself.
 *
 *  Replace empty object with my own object.
 *  Require caches the result of module.exports so module.exports is only run once.
 *  So this is what is returned on any subsequent require calls.
 *  This includes across different JavaScript files.
 *  This allows creation of single object that can be used in different ways
 */

function Greetr() {
	this.greeting = 'Module pattern 4';
	this.greet = function() {
		console.log(this.greeting);
	}
}

// instead of creating the new object i'll get back from my module the ability to create a new object.
module.exports = Greetr;