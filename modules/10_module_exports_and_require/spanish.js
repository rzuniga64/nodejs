var greetings = require('./greetings.json');

var greetme = function() {
    console.log('Hola');
    console.log(greetings.es);
};

module.exports = greetme;
