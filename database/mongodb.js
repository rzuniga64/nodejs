/**
 *  10.83 MongoDB
 *
 *  1.	Navigate to https://www.mongolabs.com and create an account.
 *  2.	Create a single node database.  Save the url,  username and password for the database.
 *  3.	Mongoose: npm install mongoose –save
 *  4.	Mongoose documentation: https://www.npmjs.com/package/mongoose.
 *  5. Create a user and assign a userid and password.
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://rzuniga64:aggies92@ds139665.mlab.com:39665/addrbook');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main St.'
});

// save the user
john.save(function(err) {
    if (err) throw err;

    console.log('person saved!');
});

var jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: '555 Main St.'
});

// save the user
jane.save(function(err) {
    if (err) throw err;

    console.log('person saved!');
});


app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);

    // get all the users
    Person.find({}, function(err, users) {
        if (err) throw err;

        // object of all the users
        console.log(users);
    });

    next();
});
