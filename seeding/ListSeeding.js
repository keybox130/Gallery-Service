const mongoose = require('mongoose');
// uncomment for  docker dev
const model = require('../database/index');
// uncomment for local dev
// const { List } = require('../database/index');
// uncomment for local dev
// db.dropDatabase();

// Seed the DB
const dataToSeed = () => {
  const results = [];
  const obj = {};
  obj.title = "Emmanuel's dream vacation";
  obj.number = 1;
  obj.tmb_url = "https://imagesfec.s3.amazonaws.com/airbnb/4/620e64bc-fd62-41e0-b4c4-215adf30.jpg"
  results.push(obj);
  return results;
};

const seedTheDB = () => {
  const arr = dataToSeed();
  // model to List.create for Docker dev
  model.List.create(arr, (err, docs) => {
    if (err) {
      console.log(`Error in seeding JS line 86 : ${err}`);
      // callback(err);
    } else {
      console.log('Seeding success!');
      // callback(err, docs);
    }
  });
};

// Uncomment for local dev
// seedTheDB();

// Uncomment for ec2
module.exports.seedTheList = seedTheDB;
