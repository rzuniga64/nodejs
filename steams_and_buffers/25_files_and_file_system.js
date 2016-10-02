/**
 *  6.50 Files and fs (file system) inside node source code and the JavaScript side of the core.
 *  Useful for reading files.
 *  Uses a buffer to store data from the file as it's read.
 */
var fs = require('fs');

//synchronous approach to reading the file, useful for reading config file. Waits until buffer is filled and it has
// the string back before V8 moves on to the next line of code. Good for reading configuration files.
var greeting = fs.readFileSync(__dirname + '/greet.txt', 'utf8');  //_dirname is passed to me when code is wrapped
console.log('\n'+ greeting);

// asynchronous approach. Many people may request information from your Node application.
// When file is being read run the callback function.
var greeting2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(data);
});

console.log('V8 is running!');