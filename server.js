'use strict';

var express = require('express');
var app = express();
require('dotenv').config();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var mongoose = require('mongoose');

var port = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO_URI, { useMongoClient: true });
app.use(cors({ origin: '*' }));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false, limit: '1mb' }));
app.use(bodyParser.json({ limit: '1mb' }));

require("./app/routes/index")(app);
app.use('/api', require("./app/routes/api"));

server.listen(port, function() {
    console.log('Cyberclub is up on port ' + port);

});
