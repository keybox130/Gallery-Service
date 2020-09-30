const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gallery', { useNewUrlParser: true });

// Connection shortcut
const db = mongoose.connection;
// Test connection
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Mongoose has connected to Mongo DB');
// });

// Define Schema
let schema = mongoose.Schema({
  room_id: Number,
  title: String,
  rating: Number,
  rating_count: Number,
  super_host: Boolean,
  location: String,
  photos: [{
    id: Number,
    photo_url: String,
    description: String,
  }],
});

// Create model
let Stay = mongoose.model('Stay', schema);

module.exports = {
  Stay,
  db,
};
