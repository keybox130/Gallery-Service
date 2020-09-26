const express = require('express');
const { Stay, db } = require('../database/index');

const app = express();
const port = 3000;

app.get('/stays', (req, res) => {
  Stay.find({}, (err, data) => {
    if (err) {
      res.status(400).send('Error Find All Failed.');
    }
    res.status(200).send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
