/**
 *  6.48 ES6 Typed arrays
 *
 *  Feature comes from V8 JavaScript Engine.
 */

var buffer = new ArrayBuffer(8);  // store 8 bytes of data

// Typed Array gives me a way to deal with data in the buffer
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
view[2] = 30; // no room for this data
console.log(view);