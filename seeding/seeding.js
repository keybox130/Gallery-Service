const mongoose = require('mongoose');
const { Stay, db } = require('../database/index');

db.dropDatabase();

// Image description
const imageDesc = ['Living Room', 'Dining Room', 'Kitchen', 'Bedroom', 'Breakfast Nook', 'Bathroom', 'Welcome Home', 'Comfortable Queen Bed', 'Flat screen cable TV and Comcast High Speed Internet.', 'Small Kitchen', 'Coffee Maker and Coffee', 'Bathroom with Shower', 'Off grid cob house on forty acres. Close to shower, outhouse and picnic table', 'The Cob House is in a very private setting all your own. Bring a camp stove and an ice chest and make your meals on the picnic table there.', 'The down comforter and extra blankets, 100% cotton sheets on this double bed. Warmed by the cob houses insulation and a propane heater if needed .', 'Our greenhouse covered outdoor shower in old redwood stumps. Surrounded on three sides by a bathhouse.', 'The outdoor shower', 'Our cute dog Scout will greet you. Dogs are okay with an extra $20 a night fee.', 'Cozy and tucked in.', 'The front porch', 'Propane fireplace and small kitchenette', 'Cozy queen-sized bed', 'Convertible sofa', 'Real bed! Built in', '"Smart" TV and WiFI', 'Living Area', 'Sleeper couch, fireplace, & TV', 'Sleeper couch and futon single bed', 'Kitchen and dining area', 'Front door (left) and pantry (right)', 'Work desk - if you have to work during your stay', ''];
console.log('Image Descripton Length: ', imageDesc.length);

// Stay Name
const stayName = ['Charming Craftsman East Sac/Midtown Apartment', 'Cozy Napa Wine Country Studio', 'The Cob house', 'Marina District Private Rooftop Studio with Deck', 'Serenity Seaside Garden Cottage (no cleaning fee)', 'Detached Wine Country "tiny house"', 'Sunset Yurt – stunning infinity pool', 'Downtown Cottage - Walk to Plaza!', 'Redwoods Treehouse', 'Bird Glamping', 'El Avistador. Montes de Toledo', 'Shepherd,s Hut with hot tub use near Stonehenge'];
console.log('Stay Name Length: ', stayName.length);

// Super Host
const stayLocation = ['Sacramento', 'Angwin', 'Gualala', 'San Francisco', 'Santa Rosa', 'Garden Valley', 'Healdsburg', 'Sea Ranch', 'Sesquilé', 'Sonseca', 'DeLand Southwest', 'McKean', 'Fisher Island', 'Friendswood', 'Pewee Valley', 'Falling Waters', 'Anchor Bay', 'Poplar', 'Corona de Tucson', 'Longtown', 'Fidelity', 'Tropic', 'Pueblito del Carmen', 'Halstead', 'Tully', 'Miami Lakes', 'Maynard', 'Ocean City', 'Dillwyn', 'Lorenz Park', 'Fairacres', 'Hato Candal', 'King William', 'Springs', 'Bull Shoals', 'Upper Bear Creek', 'Watervliet', 'Grey Eagle', 'Kingston', 'Royal Lakes', 'Makakilo', 'Coffeen', 'Spangle', 'Alpine', 'Mango', 'Watsontown', 'Salmon', 'Ravalli', 'Lakewood Shores', 'Barahona', 'Locustdale', 'Dunnell', 'Chester Gap', 'North Fair Oaks', 'La Salle', 'Park Layne', 'Beechmont', 'Cornelia', 'Graceville', 'Trout Valley'];
console.log('Stay Location Length: ', stayLocation.length);

// Seed the DB with dummy data for react components to render out.

// Random Int generator
const randomInt = (min, max, floor) => {
  if (floor) {
    return Math.floor(min + Math.random() * (max - min));
  }
  return min + (Math.random() * (max - min));
};

// Super Host Boolean
const superHostBool = () => {
  const decision = randomInt(1, 100, true);
  if (decision < 50) {
    return true;
  }
  return false;
};
// console.log('Super Host Bool: ', superHostBool());

// Rating Generator - This has to be a float
const rating = () => randomInt(1, 5, true);
// console.log('Random Rating: ', rating());

// Review Count
const reviewCount = () => randomInt(1, 300, true);
// console.log('Review Count: ', reviewCount());

// This will output an Array photo OBJs 10 of them for now.
const imageSeeder = () => {
  const url = 'www.aws.com/imageurl.jpg';
  let result = [];
  for (let count = 1; count < 10; count++) {
    let obj = {
      id: count,
      photo_url: url,
      description: imageDesc[randomInt(0, imageDesc.length, true)],
    };
    result.push(obj);
  }
  return result;
};

// Seed the DB
const dataToSeed = () => {
  let results = [];
  let count = 1;

  for (let i = 0; i < 100; i++) {
    let obj = {};
    let roomID = count;
    count++;
    obj.room_id = roomID;
    obj.title = stayName[randomInt(0, stayName.length, true)];
    obj.rating = randomInt(0, 5, true);
    obj.rating_count = randomInt(1, 300, true);
    obj.super_host = superHostBool();
    obj.location = stayLocation[randomInt(0, stayLocation.length, true)];
    obj.photos = imageSeeder();
    results.push(obj);
  }
  return results;
};
console.log('Data to Seed: ', dataToSeed());

const seedTheDB = () => {
  let arr = dataToSeed();
  Stay.insertMany(arr, (err, docs) => {
    if (err) {
      console.log(`Error in seeding JS line 86 : ${err}`);
      // callback(err);
    } else {
      console.log(`Seeding success!`);
      // callback(err, docs);
    }
  });
};

seedTheDB();
