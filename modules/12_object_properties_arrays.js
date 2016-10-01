/**
 *  Object properties, first class functions and arrays.
 *
 *  Concepts
 *  1. I can use a variable that contains a string to dynamically grab a value off a property or moethod of an object.
 *  2. I can push functions into arrays and loop across that array and invoke all the functions sitting in the array.
 */

//object properties and methods
var obj = {
    greet: 'object properties'
};

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

// functions and arrays
var arr = [];

arr.push(function() {
    console.log('functions and arrays')
});

arr.push(function() {
    console.log('functions and arrays2')
});

arr.forEach(function(item) {
    item();
});