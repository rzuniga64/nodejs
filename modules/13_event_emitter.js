/**
 *  5.3 Emitter:  The event emitter in NodeJS follows this same idea.
 *
 *  Allow us to say an event has happened and respond to an event that has happened.
 *  Create the object using a function constructor so multiple emitters can be created that are needed in the application.
 *  In the object will be one property, an object called events.
 */
function Emitter() {

    this.events = {};   // an empty object. this will become an array
}

/**
 *  1. Create a new property called 'events' on the Emitter object
 *  2. Make the 'events' property an array.
 *  3. For each 'event' push the listener functions into the array.
 *
 *  We are taking an array of listener functions and calling it events but it really isn't.
 *  But calling it events helps us to think in terms of events and listeners.
 */
Emitter.prototype.on = function(type, listener) {   // add a listener

    this.events[type] = this.events[type] || [];    // add a new property named 'type' that is an array
    this.events[type].push(listener);               // push listener function into the array
};

/**
 *  add method 'emit' which says something happened,
 *  if I have that events property on the object (type is an event) then take that array then loop over the array
 *  and invoke each listener function.
 */

 Emitter.prototype.emit = function(type) {

    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
};

// The function constructor will come back from require function so I can create as many Emitters as I want.
module.exports = Emitter;