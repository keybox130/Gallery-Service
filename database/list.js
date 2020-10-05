const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/list', { useNewUrlParser: true });

// Connection shortcut
const db = mongoose.connection;
// Test connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongoose has connected to List DB');
});

// Define Schema
const ListSchema = mongoose.Schema({
  list_id: Number,
  title: String,
  number: Number,
  tmb_url: '',
});

// Create model
const List = mongoose.model('List', ListSchema);

module.exports = {
  List,
  db,
};
