const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './config/config.env' });

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
  console.log('connected to local database sucessfully');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server up and listing at ... ${port}`);
});
