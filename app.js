var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//require('./modules/01_first_class_function');
//require('./modules/02_function_expression');
//require('./modules/03_anonymous_function');

// require function returns results of module.exports
// functions are first class so I can set them to a variable and then invoke the function using the variable nome
//var greet = require('./modules/04_build_a_module');
//greet();

//require('./modules/05_object_literals');
//require('./modules/06_function_constructor');
//require('./modules/07_pass_by_value');
//require('./modules/08_pass_by_reference');
//require('./modules/09_iife');

//var greetings = require('./modules/10_module_exports_and_require/');
//greetings.english();
//greetings.spanish();

/**
 * Module Patterns
 */
//var greet1 = require('./modules/11_module_pattern1');
//greet1();

// Pattern 2: I want a property on the module.exports object
//var greet2 = require('./modules/11_module_pattern2').greet;
//greet2();

// Pattern 3: replace exports with my own object using a regular function constructor
/*var greet3 = require('./modules/11_module_pattern3');
greet3.greet();
greet3.greeting = 'Changed Module Pattern 3';

var greet3b = require('./modules/11_module_pattern3');
greet3b.greet();*/

// Pattern 4: replace module.exports object with the function constructor itself.
/*var Greet4 = require('./modules/11_module_pattern4');
var grtr = new Greet4(); // Greet4() is a function constructor
grtr.greet();*/

var greet5 = require('./modules/11_module_pattern5').greet;
greet5();

var routes = require('./routes/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

var a = 1;
var b = 2;
var c = a + b;
console.log(c);

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
