const mongoose = require('mongoose');
const { List } = require('../database/index');

//db.dropDatabase();

// Seed the DB
const dataToSeed = () => {
  const results = [];
  const obj = {};
  obj.list_id = 1;
  obj.title = "Emmanuel's dream vacation";
  obj.number = 1;
  obj.tmb_url = "https://imagesfec.s3.amazonaws.com/airbnb/2/092adb4e-4038-4629-a94c-869a7187.jpg";
  results.push(obj);
  return results;
};
// console.log('Data to Seed: ', dataToSeed());

const seedTheDB = () => {
  const arr = dataToSeed();
  List.create(arr, (err, docs) => {
    if (err) {
      console.log(`Error in seeding JS line 86 : ${err}`);
      // callback(err);
    } else {
      console.log('Seeding success!');
      // callback(err, docs);
    }
  });
};

seedTheDB();
