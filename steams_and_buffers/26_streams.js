/**
 *  6.51 Streams. A stream buffer is 64 Kb so fairly large.  Streams inherit from EventEmitter.
 */

var fs2 = require('fs');

// highWaterMark helps to minimize the amount of memory being used on the server.
var readable = fs2.createReadStream(__dirname + '/loremipsum.txt', {encoding: 'utf8', highWaterMark: 32 * 1024});
//var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
    console.log(chunk.length + ' bytes');
    //writeable.write(chunk);
});
