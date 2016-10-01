/**
 *  5.36 Inheriting from event emitter using util.inherits
 *
 *  An object wants access to methods and properties on the prototype of EventEmitter.
 *  The object wants to add its own methods and properties after the fact.
 *  This will create an object with a combination of functionality of one object and another object.
 */
var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    /**
     *  EventEmitter when invoked with 'new' keyword the 'this' variable points to an empty object and adds on properties/methods.
     * I am overriding the this object so call the function constructor and pass the new object that has already been created.
     *
     *  Then inside the EventEmitter constructor I will have a bunch of properties and methods added, if there are any,
     *  to it. Because the this object is passed by reference I can add my own properties and methods to that new object.
     *  This is what is called in other languages the 'super constructor' or the constructor I am inheriting from.
     */
    EventEmitter.call(this);

    this.greeting = '\nInheritance!';
}

util.inherits(Greetr, EventEmitter);        // Greetr inherits from EventEmitter so now is an event emitter.

Greetr.prototype.greet = function(data) {   // add your own method after the fact that logs & emits
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);               // I want to pass 'data' to all my listeners
};

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('Someone greeted: ' + data);
});

greeter1.greet('Raul');