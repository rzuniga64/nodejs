/**
 *  7.61 Outputting JSON
 *
 *  Take an object in memory and serialize it (convert it to format that can be stored or transferred such as JSON).
 *  We aren't looking at the URL at this point, the server is just sending a response.
 *  JSON is just text whose format is based off of object literal syntax.
 *  An object literal needs to be converted from an object to a string.
 *  JSON.stringify(obj) will convert the object as a string and format it as JSON.
 *
 *   7.62 Routing
 *
 *  Look at the URL passed in the request and choose to give different content based on those different URLs.
 *
 */
http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'application/json'});

    // this object is what gets put into memory this is just what we are writing.
    var obj = {
        firsname: 'Henry',
        lastname: 'Zuniga'
    };
    res.end(JSON.stringify(obj));  // serialized data will be formatted as JSON

}).listen(1338, '127.0.0.1');