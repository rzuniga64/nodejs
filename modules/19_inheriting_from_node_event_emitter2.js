/**
 *  5.39  Inheriting from Event Emitter 2
 */
var _util = require('util');

function Person() {
    this.firstname = 'Roy';
    this.lastname = 'Zuniga';
}

// I can call 'greet' because it is on the prototype of the object down the prototype chain
Person.prototype.greet = function() {
    console.log('\nHello ' + this.firstname + ' ' + this.lastname);
};

// When new is called this points to an empty object which I give to person and since I'm using .call the 'this'
// keyword passed is the same as the 'this' keyword in 'this.badgenumber'.
function Policeman() {
    Person.call(this);  // calls the Person constructor so now have access to Person's properties.
    this.badgenumber = '1234';
}

_util.inherits(Policeman, Person);  // just connects the prototypes
var officer = new Policeman();
officer.greet();
