var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

require('./modules/modules');
require('./event_emitter/event_emitter');
require('./steams_and_buffers/streams_and_buffers');
require('./http/http');
require('./express/express');

var routes = require('./routes/index');
var app = express();

// run some custom middleware
app.use('/', function(req, res, next) {
    var a = 1;
    var b = 2;
    var sum = a + b;
    console.log(a + ' + ' + b + ' = ' + sum);
    next();
});

app.get('/html', function(req, res) {
    res.send("<html><head></head><body> <h1>Hello World!</h1></body> </html>");
});

app.get ('/json', function(req, res) {
    res.json({firstname:'John', lastname: 'Doe'});
});

app.get ('/person/:id', function(req, res) {
    res.send('<html><head></head><body> <h1>Person: ' + req.params.id + '</h1></body> </html>');
});

// static files and middleware
app.get('/static', function(req, res) {
    res.send("<html><head><link href='/stylesheets/style.css' type=text/css rel='stylesheet'/></head><body> <h1>Hello World!</h1></body> </html>");
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * 9.75 Static Files and Middleware
 *
 * This static file will be downloaded when it is requested by an HTTP request by using middleware.
 * Node JS will find '__dirname + /public/' and go look for that file and stream the response back.
 */
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
