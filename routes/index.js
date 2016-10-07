var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Parsing a querystring
router.get('/querystring/:id', function(req, res) {
  res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

// Parsing the body of a POST request using urlencodedParser
router.post('/name', urlencodedParser, function(req, res) {
    res.send('Name: ' + req.body.firstname + ' ' + req.body.lastname );
});

// Parsing the body of a POST request using jsonparser
router.post('/namejson', jsonParser, function(req, res) {
    console.log('Name: ' + req.body.firstname + ' ' + req.body.lastname );
});


module.exports = router;
