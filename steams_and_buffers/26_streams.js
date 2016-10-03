/**
 *  6.51 Streams. A stream buffer is 64 Kb  by defualt so fairly large.  Streams inherit from EventEmitter.
 *
 *  The stream will read the file and fill up the buffer.
 *  If the file size is bigger than the buffer size you will get pieces of the text file at a time.
 *  It will fill the buffer, emit a data event, run all the listeners, and keep going reading the rest of the file.
 *  Every time it emits the event and runs the listeners it will pass the data in the buffer to the listener.
 *
 *  highWaterMark sets the size of the chunk.
 *  highWaterMark helps to minimize the amount of memory being used on the server.
 */

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/loremipsum.txt', {encoding: 'utf8', highWaterMark: 32 * 1024});
var writeable = fs.createWriteStream(__dirname + '/loremipsum_copy.txt');

readable.on('data', function(chunk) {
    //console.log(chunk);
    console.log(chunk.length + ' bytes');
    //writeable.write(chunk);
});


