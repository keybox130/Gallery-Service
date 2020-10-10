const mongoose = require('mongoose');
const listSeed = require('../seeding/ListSeeding.js');
const seed = require('../seeding/seeding.js');

// Docker Remote service
// "IPv4Address": "172.17.0.2/16",

// 'mongodb://172.17.0.2:27017/gallery'
// For Deployment on EC2
mongoose.connect('mongodb://172.17.0.2:27017/gallery', { useNewUrlParser: true });
// For DEV on my Local machine
// mongoose.connect('mongodb://localhost/gallery', { useNewUrlParser: true });

// Connection shortcut
const db = mongoose.connection;
// Test connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the DataBase');
  listSeed.seedTheList();
  seed.seed();
});

// Define Schema
const schema = mongoose.Schema({
  room_id: Number,
  list: String,
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
const Stay = mongoose.model('Stay', schema);

// Define Schema
const ListSchema = mongoose.Schema({
  list_id: Number,
  tmb_url: String,
  title: String,
  number: Number,
  tmb_url: '',
});

// Create model
const List = mongoose.model('List', ListSchema);
// line below added for docker dev
module.exports.List = List;
module.exports.Stay = Stay;
module.exports.db = db;

// for local dev
// module.exports = {
//   Stay,
//   List,
//   db,
// };
