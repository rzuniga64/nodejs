/**
 *  6.47 Buffers: buffers are global in NodeJS
 *
 *  Encoding is UTF-8 by default.
 *  Buffer is of limited size.
 */

// initialize the size of the buffer to 5 characters
var buf = new Buffer('Hello', 'utf8');

console.log(buf);               //<Buffer 48 65 6c 6c 6f>
console.log(buf.toString());
console.log(buf.toJSON());      // unicode char set, base 10
console.log(buf[2]);
buf.write('wo');
console.log(buf.toString());    // 'wollo'

