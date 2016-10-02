/**
 *  6.50 Files and fs (file system) inside node source code and the JavaScript side of the core.
 *  Useful for reading config files.
 */
var fs = require('fs');

//synchronous approach to reading the file, useful for reading config file
var greeting = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log('\n'+ greeting);

// asynchronous approach. When file is being read run the callback function.
var greeting2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(data);
});

console.log('Done');