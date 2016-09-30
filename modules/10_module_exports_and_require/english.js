var greetings = require('./greetings.json');

var greetme = function() {
    console.log('Hello');
    console.log(greetings.en);
};

// module is passed to this function and it has a exports parameter on it. This JavaScript file is run as a function.
module.exports = greetme;  // make this a function so I can use it.
