// app.js
var express = require('express');
var app = express();
var db = require('./db');

var AlbumController = require('./album/AlbumController');
app.use('/albums', AlbumController);

module.exports = app;
