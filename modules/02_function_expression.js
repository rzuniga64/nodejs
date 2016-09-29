/**
 *  FUNCTION EXPRESSIONS
 *
 *  The variable has the function as its value.
 *  Then you can call it using parenthesis.
 */

var greetMe = function() {
    console.log('Hello World!');
};

function logGreeting(func) {
    func()
}

// the greetMe function is first-class
greetMe(), logGreeting(greetMe);