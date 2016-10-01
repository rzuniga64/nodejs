/**
 *  5.34 THE NODE EVENT EMITTER
 *  The code below relies on 'magic strings'. A string that has some special meaning in our code. This is bad because
 *  it makes it easy for a typo to cause a bug, and hard for tools to help us find it.
 */

var Emitter = require('events');

var emtr = new Emitter();

emtr.on('greet', function() { console.log('\nA listener function for greet event'); });
emtr.on('greet', function() { console.log('A second listener function for greet event!'); });

emtr.emit('greet', function() {
    console.log('A greeting occurred!');
});

/** Not using magic strings! */
var Emitter2 = require('events');
var eventConfig = require('./config').events;  // config is an object and events is property on that object

var emtr2 = new Emitter2();

emtr2.on(eventConfig.GREET, function() { console.log('\nUsing emitter without magic strings'); });
emtr2.on(eventConfig.GREET, function() { console.log('A second listener function for emitter without magic strings!'); });

emtr2.emit(eventConfig.GREET);