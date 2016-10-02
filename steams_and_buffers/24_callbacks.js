/**
 *  6.49 Callback Pattern: The function I invoke will invoke later the function I give it.
 *
 *  A function passed to some other function, which we assume will be invoked at some point.
 *  The function ‘calls back’ invoking the function you give it when it is done doing its work.
 *
 *  Callback pattern: When you see a function calling a function.
 *  You can call function in different ways at different times and want to do different things with that data.  Just give
 *  it a callback and have it give you the data and do what you want with it.
 */
function greet(callback) {
    console.log('\nCallback!');
    var data = {
        name: 'John Doe'
    };
    callback(data);
}

greet(function(data) {
    console.log('The callback was invoked!');
    console.log(data);
});

greet(function(data) {
    console.log('A different callback was invoked!');
    console.log(data.name);
});