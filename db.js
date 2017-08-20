//db.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://user:pass@ds151993.mlab.com:51993/cognizant_albums', {
  useMongoClient: true,
});
