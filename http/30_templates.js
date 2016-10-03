/**
 *  7.60 Dynamic Templates
 */
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    /**
     *  Convert the variable html to a string by using utf8 encoding. Create variable you will use to replace in the
     *  HTML.  Use the replace method on the stream. We manipulate the data before it is sent to the stream. I want to
     *  manipulate it as a string.
     */
    var html = fs.readFileSync(__dirname + '/index_template.html', 'utf8');
    var message = 'Hello World...';
    html = html.replace('{Message}', message);
    res.end(html);

}).listen(1337, '127.0.0.1');