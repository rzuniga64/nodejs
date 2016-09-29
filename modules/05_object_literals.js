/**
 *  Object and Object Literals
 *
 *  Name-Value pair = a name which maps to a value.
 *  Example: Address = “Main Street”.
 *  From JavaScript’s perspective an object is a collection of name value pairs.
 *  Object literal – name/value pairs separated by commas and surrounded by curly braces.
 *  A quick way to create object in code.
 */

// create an object literal. The object is created in memory and I can call person.greet().
var person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function() {
        console.log('Hello, ' + this.firstName + ' ' + this.lastName);
    }
};
person.greet();

console.log(person['firstName']);