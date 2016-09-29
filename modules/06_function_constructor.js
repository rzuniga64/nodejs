/**
 *  PROTOTYPAL INHERITANCE AND FUNCTION CONSTRUCTORS
 *
 *  Every object has a property that points to another object. It is the object’s prototype.
 *  It is a different object that will have access to that other object’s properties and methods.
 *  We could then say ‘obj.prop2’ on the prototype and we’ll get access to it as if it was directly attached to ‘obj’.
 *  These prototypes that are not directly connected to ‘obj’ are called the prototype chain. I can access any methods
 *  of any object down the line without having to specify which one it is. This is prototypal inheritance.
 *
 * Any time you see the prototype property we adding some methods and properties to be available to all objects created
 * from this particular function constructor.
 */

function Person(firstname, lastname) {  // function constructor
    this.firstname = firstname;
    this.lastname = lastname;
}

// The prototype is not the prototype of person but of any object created from person.
// I can add properties and methods to the prototype object
Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
console.log(john);
console.log(john.firstname);

// What happens when you use function constructors is that any object created from a function constructor, its
// prototype will point to the prototype property of the function you used to construct the object.
var john = new Person('John', 'Doe');
john.greet();

// The Jane object's prototype is the same prototype object
var jane = new Person('Jane', 'Doe');
jane.greet();

// prototype object that has the greet function on it
console.log(john.__proto__);
console.log(jane.__proto__);
