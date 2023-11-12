// Create web server
// Run command: node comments.js
// Open browser: http://localhost:3000
// Open browser: http://localhost:3000/comments

// Load modules
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Create express app
var app = express();

// Setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Setup static folder
app.use(express.static(path.join(__dirname, 'public')));

// Setup body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Setup routes
app.use(require('./routes/index'));
app.use(require('./routes/comments'));

// Create web server
http.createServer(app).listen(3000, function() {
	console.log('Server started at port 3000');
});