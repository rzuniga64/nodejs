//require('./01_first_class_function');
//require('./02_function_expression');
//require('./03_anonymous_function');

// functions are first class so I can set them to a variable and then invoke the function using the variable nome
// require function returns results of module.exports
//var greet = require('./04_build_a_module');
//greet();

//require('./05_object_literals');
//require('./06_function_constructor');
//require('./07_pass_by_value');
//require('./08_pass_by_reference');
//require('./09_iife');

/**var greetings = require('./10_module_exports_and_require/');
greetings.english();
greetings.spanish();*/

/**
 * Module Patterns
 */
//var greet1 = require('./11_module_pattern1');
//greet1();

// Pattern 2: I want a property on the module.exports object
//var greet2 = require('./11_module_pattern2').greet;
//greet2();

// Pattern 3: replace exports with my own object using a regular function constructor
/**var greet3 = require('./11_module_pattern3');
 greet3.greet();
 greet3.greeting = 'Changed Module Pattern 3';

 var greet3b = require('./11_module_pattern3');
 greet3b.greet();*/

// Pattern 4: replace module.exports object with the function constructor itself.
/**var Greet4 = require('./11_module_pattern4');
var grtr = new Greet4(); // Greet4() is a function constructor
grtr.greet();

var greet5 = require('./11_module_pattern5').greet;
greet5();*/

//require('./12_object_properties_arrays');