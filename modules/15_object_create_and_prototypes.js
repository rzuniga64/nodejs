/**
 *  5.35 Object.create and prototypes
 *
 *   Use an object literal to create an object using object.create.
 *   I will have an empty object of type 'john' or 'kate' whose prototype is the person object.
 *   Both objects will have person as its prototype so share the 'greet' funciton.
 */
var person = {  // This is my object
    firstName: '',
    lastName: '',
    greet: function() {
        return ('\nHello, ' + this.firstName + ' ' + this.lastName);
    }
};

var john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';

var jane = Object.create(person);
jane.firstName = 'Jane';
jane.lastName = 'Doe';

console.log(john.greet());
console.log(jane.greet());