// AlbumController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true}));
var Album = require('./Album');

// GET GENRES RANKED BY NUMBER OF ALBUMS
router.get('/genres', function (req, res) {
  Album.collection.aggregate([
   { $group: { _id: "$genre", count: { $sum: 1 } } },
   { $sort: { count: -1 } }  ], function (err, genres) {
    if (err) return res.status(500).send("There was a problem finding the genres.");
    res.status(200).send(genres);
  });
});

// GET YEARS RANKED BY NUMBER OF ALBUMS
router.get('/years', function (req, res) {
  Album.collection.aggregate([
   { $group: { _id: "$year", count: { $sum: 1 } } },
   { $sort: { count: -1 } }  ], function (err, years) {
    if (err) return res.status(500).send("There was a problem finding the years.");
    res.status(200).send(years);
  });
});

// GET INDEX OF ARTISTS
router.get('/artists', function (req, res) {
  Album.collection.distinct('artist', function (err, artists) {
    if (err) return res.status(500).send("There was a problem finding the artists.");
    res.status(200).send(artists);
  });
});

// GET ARTIST'S ALBUMS
router.get('/albums/:artist', function (req, res) {
  Album.find({artist : req.params.artist}, function (err, albums) {
    if (err) return res.status(500).send("There was a problem finding the artist's albums.");
    res.status(200).send(albums);
  });
});

// CREATES A NEW ALBUM
router.post('/', function(req, res) {

  Album.create({
    album : req.body.album,
    artist : req.body.artist,
    genre : req.body.genre,
    year : req.body.year
  },
  function (err, album) {
    if (err) return res.status(500).send("There was a problem adding the informaton to the database.");
    res.status(200).send(album);
  });
});

// RETURN ALL THE ALBUMS IN THE DATABASE
router.get('/', function (req, res) {

  Album.find({}, function (err, albums) {
    if (err) return res.status(500).send("There was a problem finding the albums.");
    res.status(200).send(albums);
  });
});

// GETS A SINGLE ALBUM FROM THE DATABASE
router.get('/:id', function (req, res) {
  Album.findById(req.params.id, function (err, album) {
    if (err) return res.status(500).send("There was a problem finding the albums.");
    if (!album) return res.status(404).send("No album found.");
    res.status(200).send(album);
  });
});

// DELETES AN ALBUM FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Album.findByIdAndRemove(req.params.id, function (err, album) {
        if (err) return res.status(500).send("There was a problem deleting the album.");
        res.status(200).send("Album "+ album.album +" was deleted.");
    });
});

// UPDATES A SINGLE ALBUM IN THE DATABASE
router.put('/:id', function (req, res) {

    Album.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, album) {
        if (err) return res.status(500).send("There was a problem updating the album.");
        res.status(200).send(album);
    });
});

module.exports = router;
