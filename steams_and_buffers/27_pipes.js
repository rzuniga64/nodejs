/**
 *  6.52 Pipes. Connecting two streams by writing to one stream what is being read from another. In Node you pipe from
 *  a Readable stream to a Writable stream.  If you start with a stream that is readable and connect to streams that are
 *  readable/writeable then you can pipe multiple streams.
 *
 *  A readable stream must be sent to a writeable stream.
 */
var fs3 = require('fs');
var zlib = require('zlib');

// highWaterMark helps to minimize the amount of memory being used on the server.
var readable2 = fs3.createReadStream(__dirname + '/loremipsum.txt');
//var writeable2 = fs.createWriteStream(__dirname + '/greetcopy.txt');
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip(); // creates a transform (rw) stream

//readable2.pipe(writeable2);  // pipe sets up event listener to listen for chuck of data
readable2.pipe(gzip).pipe(compressed);