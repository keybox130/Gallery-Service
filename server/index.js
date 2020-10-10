const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Stay, List } = require('../database/index');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));
// Get all stays
app.get('/gallery/stays', (req, res) => {
  Stay.find({}, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(data);
  });
});
// Specific Stay
app.get('/gallery/stays/:roomId', (req, res) => {
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
app.get('/gallery/list', (req, res) => {
  List.find({}, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(data);
  });
});
// Post to list collection
app.post('/gallery/list', (req, res) => {
  List.create(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send();
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
