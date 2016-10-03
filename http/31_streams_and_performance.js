/**
 *  7.62 Streams and Performance
 */
var http = require('http');
var fs = require('fs');

/**
 *  Use a steam to improve performance. We can use a readable stream and pipe the data to the response, a writeable
 *  stream.  Rather than pulling the entire file into a buffer and then sending it we'll send it a chunk at a time.
 *  Our buffer stays small so the application be faster and more responsive. The TCP/IP connection is already a stream
 *  so the browser is used to dealing with chunks and processing them as it's downloaded or downloading.
 *
 */

http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);

}).listen(1337, '127.0.0.1');