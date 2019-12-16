var express = require('express')
var path = require('path')
var app = express()

var indexRouter = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

// routes setup
app.use('/', indexRouter);

module.exports = app