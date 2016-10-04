/**
 *   7.62 Routing
 *
 *  Look at the URL passed in the request and choose to give different content based on those different URLs.
 *
 *  Mapping HTTP requests to content whether the content exist on the server, or not.
 *  All the browser is doing is sending an HTTP request.  The URL is one of those pieces of data in the reqeust.
 *  It is up to the server what to do with it.
 *
 *  Maybe the data doesn’t live on the server but in a database.
 *  When we build our routing we are specifying that when the server is sent a request for something specific it gives
 *  something back as a response.
 *  If a file sits on the server then I can connect to it using a stream and stream it back.
 *  How the application deals with the content internally is up to it.
 */

var fs = require('fs');

http.createServer(function(req, res) {

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});

        var html = fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});

        var obj = {
            firsname: 'Henry',
            lastname: 'Zuniga'
        };
        res.end(JSON.stringify(obj));  // data will be formatted as JSON
    }
    else {
        res.writeHead(404);
        res.end();
    }

}).listen(1339, '127.0.0.1');