/**
 *  5.40  ES6 Classes: In JavaScript classes are just functions (not like in other languages).
 *  New way from a syntax from the code you write it doesn't change anything under the hood.
 */

'use strict'; // JavaScript engine is picker about things it lets you do or do not do

class Person {

    // anything you added to the object inside the constructor works like a function constructor and adds it to each
    // object created.
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // any method you put inside  of the class are put on the prototype so its available down the prototype chain
    greet() {
        console.log('\nHello ' + this.firstname + ' ' + this.lastname);
    }
}

var doe = new Person('John', 'Doe');
doe.greet();

console.log(doe.__proto__);