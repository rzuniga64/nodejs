/**
 *  PROTOTYPAL INHERITANCE
 *
 *  Every object has a property that points to another object. It is the object’s prototype.
 *  It is a different object that will have access to that other object’s properties and methods.
 *  We could then say ‘obj.prop2’ on the prototype and we’ll get access to it as if it was directly attached to ‘obj’.
 *  These prototypes that are not directly connected to ‘obj’ are called the prototype chain. I can access any methods
 *  of any object down the line without having to specify which one it is. This is prototypal inheritance.
 *
 *  Any time you see the prototype property we are adding some methods and properties to be available to all objects
 *  created from this particular function constructor.
 *
 *  FUNCTION CONSTRUCTORS
 *  I can say new and call a function and that will execute the function and take the this keyword and make it a new
 *  empty object.  We can use the this keyword to construct our object adding properties and methods to it.  The function
 *  constructor will automatically return that new object from the function call.
 */

function Person(firstname, lastname) {  // function constructor
    this.firstname = firstname;
    this.lastname = lastname;
}

// Functions are special kinds of objects that can have properties and methods on functions as well.
// There is a built-in function called prototype. I can add properties and methods to the prototype object.
Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

// What happens when you use function constructors is that any object (john) created from a function constructor(Person),
// its prototype (john.prototype) will point to the prototype property of the function you used to construct the object.
// It's a little confusing because it's name is prototype but it's not the prototype of Person, it is the prototype of any
// object created from Person.
var john = new Person('John', 'Doe');
john.greet();

// The Jane object's prototype is the same prototype object
var jane = new Person('Jane', 'Doe');
jane.greet();

// prototype object that has the greet function on it
console.log(john.__proto__);
console.log(jane.__proto__);
