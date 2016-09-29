/**
 *  FIRST CLASS FUNCTION
 */
function greet() {
    console.log('hi');
}
greet();

//functions are first-class so we can pass them as a parameter to another function.
function logGreeting(func) {
    func()
}

logGreeting(greet);