/**
 *  7.59 Web server
 *  7.60 Outputting HTML
 *
 *  createServer emits an event so the anonymous function is an event listener.
 *  1.  Require function gets http module and what is attached to module.exports from node.js core
 *  2.  createServer creates a server object.
 *  3   The call to this function takes a callback which is an event listener using the event emitter code.
 *  4.  There is an http emit method that passes a request and response which represents a stream where I can stream
 *      the response back.
 *  5.  The server emits and event and iss a request and get back a response.
 *  6.  Node.js will take all this data and properly formatted http response the browser can then understand.
 *  7.  Listen for the port and address will make sure the request from the browser is routed properly to this code.
 *  8 .  Send a request and my code will be run because the request will be emitted.  I have the server listening
 *      on port 1337 on IP 127.0.0.1.  This will allow the server to read the request and write the response.
 *      A HTTP response will be built and given back to the browser and the browser will go off and do what it wants
 *      with it.
 */

var http = require('http');

http.createServer(function(req, res) { // function is a callback which is an event listener which passes a request/response

    res.writeHead(200, {'Content-Type': 'text/plain'}); // build the response: status and headers
    res.end("Hello World!\n");

    // createServer returns an object that has a listen event which maps host and port. When the request happens NodeJS
    // emits an event so this function is run. The http parser will give a request and the function can send back a response.
}).listen(1337, '127.0.0.1');