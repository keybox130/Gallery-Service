const express = require('express');
const path = require('path');
const { Stay, List } = require('../database/index');
// const { List } = require('../database/list');

const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, '../client/dist')));
// Get all stays
app.get('/stays', (req, res) => {
  Stay.find({}, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(data);
  });
});
// Specific Stay
app.get('/stays/:roomId', (req, res) => {
  const { roomId } = req.params;
  Stay.find({ room_id: roomId }).exec((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// Get All Lists
app.get('/list', (req, res) => {
  List.find({}, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
