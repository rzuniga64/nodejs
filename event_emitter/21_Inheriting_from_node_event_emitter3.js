/**
 *  5.41 Inheriting from the Event Emitter 3
 */

var Greeter = require('./greeter');

var greeter = new Greeter();

greeter.on('greet', function(data) {
    console.log('Someone greeted: ' + data);
});

greeter.greet('John Doe');