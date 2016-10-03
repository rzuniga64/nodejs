/**
 *  6.52 Pipes. Connecting two streams by writing to one stream what is being read from another. In Node you pipe from
 *  a Readable stream to a Writable stream.  If you start with a stream that is readable and connect to streams that are
 *  readable/writeable then you can pipe multiple streams.
 *
 *  A readable stream must be sent to a writeable stream.
 */
var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/loremipsum.txt');

var writeable = fs.createWriteStream(__dirname + '/loremipsum_copy.txt');


// pipe sets up event listener to listen for chuck of data. pipe(writeable) returns writeable.
readable.pipe(writeable);

var compressed = fs.createWriteStream(__dirname + '/loremipsum.txt.gz');  //pipe compressed data to a file

var gzip = zlib.createGzip(); // creates a transform (rw) stream that is compressed

//read from the text file, compress it and write the compressed data to a file
readable.pipe(gzip).pipe(compressed);