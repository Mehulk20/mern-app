const mongoose = require('mongoose');

const fs = require('fs');

const dotenv = require('dotenv');

dotenv.config({ path: './../config/config.env' });

const DB = 'process.env.DATABASE';

const Movies = require('./../modles/moviesModles');

mongoose.connect(DB).then(() => {
  console.log('connected to local database sucessfully');
});

const movies = JSON.parse(
  fs.readFileSync(`${__dirname}/movie-data.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Movies.create(movies);
    console.log('Data added sucessfully');
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Movies.deleteMany();
    console.log('Data deleted sucessfully');
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
