/**
 *  7.60 Outputting HTML
 */
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    /**
     *  Connect a readable file stream and pipe it to a response stream  so every chunk of data read from the file
     *  will be piped out to the response stream. Out buffer will be small, more responsive and therefore will provide
     *  better performance.
     */
    var html = fs.readFileSync(__dirname + '/index.html');
    res.end(html);

}).listen(1337, '127.0.0.1');