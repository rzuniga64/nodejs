/**
 *  Anonymous function
 *
 *  Use a function expression on the fly.
 *  Write the function as part of the invokation of function logGreeting.
 */

function logGreeting(func) {
    func()
}

logGreeting(function() {
    console.log('Hello Roy!');
});
