var express = require('express');
var consign = require('consign')();
var path = require('path');
var parser = require('body-parser');
var app = express();

app.use(parser.urlencoded({extended:true}));

consign
    .include('src/modules/database.js')
    .then('src/models')
    .then('src/routes')
    .into(app);

app.set('view engine','ejs');
app.set('views', path.resolve('./src/views/'));

module.exports = app;