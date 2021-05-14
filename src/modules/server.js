var express = require('express')
var app = express();
var path = require('path');
app.set('view engine','ejs');
app.set('views', path.resolve('./src/views/'));

module.exports = app;