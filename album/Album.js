//Album.js
var mongoose = require('mongoose');
var AlbumSchema = new mongoose.Schema({
  album: String,
  artist: String,
  genre: String,
  year: String
});
mongoose.model('Album', AlbumSchema);

module.exports = mongoose.model('Album');
