/**
 *  Pattern 3: replace exports with my own object using a regular function constructor
 *
 *  Replace empty object with my own object.
 *  Require caches the result of module.exports so module.exports is only run once.
 *  So this is what is returned on any subsequent require calls.
 *  This includes across different JavaScript files.
 *  This allows creation of single object that can be used in different ways
 */

function Greetr() {
	this.greeting = 'Module Pattern 3'; 	// add a property
	this.greet = function() {				// add a greet method
		console.log(this.greeting);
	}
}

module.exports = new Greetr();