'use strict';

var EventEmitter = require('events');

module.exports = class Greeter extends EventEmitter {

    constructor() {
        super();
        this.greeting = '\nInheritance using ES6!';
    }

    greet(data) {
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
};
