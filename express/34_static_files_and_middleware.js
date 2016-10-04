
/**
 * 9.75 Static Files and Middleware
 *
 * This static file will be downloaded when it is requested by an HTTP request by using middleware.
 * Every time we see '/assets/file' then what I will actually do is go find '__dirname + /public/' and go look for that
 * file and stream the response back.
 */
app.use('/assets', express.static(__dirname +'/public'));
//app.use(express.static(path.join(__dirname, 'public')));

// run some custom middleware
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next(); // run the next middleware
});

// don't have to specify a content type since the express methods and response object that wraps up the standard
// response object takes care of that for me the best it can.
//
// The browser is going to download this html file, see the link tag and generate an http request for
// mysite/assets/style.css. That HTTP request will be handled by node.js and when it sees '/assets/' parts it knows that
// anything after that will be looked for in '__dirname/public'. This is middleware - between the request and the
// response. And it will respond by streaming back style.css.

//app.get('/', function(req, res) {
//    res.send('<html><head><link href=/assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello Express!</h1></body></html>');
//});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

// Use the URL and pull data out of it
app.get('/person/:id', function(req, res) {
    res.send('<html><head><body><h1>Person:' + req.params.id + '</h1></body></head></html>');
});

app.listen(port);

/**
 *  9.76 Templates and Template Engines
 *
 *  1. Install the template engine using NPM
 *  2. Set the template engine using app.set('view engine', 'swig');
 *  3. res.render(filename);
 */

var swig = require('swig');
app.set('view engine', 'swig');
app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render(__dirname + '/views/index.html', {title: 'Template Example', Qstr: req.query.qstr });
});

app.get('/persons/:id', function(req, res) {
    res.render(__dirname + '/views/persons.html', {title: 'Template Example' });
});

/**
 *  9.77 Query Strings, Form post, JSON data.
 *
 *  1. Install body-parser using NPM
 *  2. var bodyParser = require('body-parser);
 */
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.post('/', urlencodedParser, function(req, res) {
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

/**
 * Run an AJAX request from index.html. Takes the data from the browser, convert it to a string by the JavaScript engine
 * running in the browser, the browser sent the http request, the JavaScript engine running on the server was able to
 * take that data and convert it back into JavaScript object.
 */
var jsonParser = bodyParser.json();

app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thank you for the JSON data!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});