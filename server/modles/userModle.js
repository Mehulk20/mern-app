const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requred: [true, 'name is required'],
    unique: true,
  },
  email: {
    type: String,
    requred: [true, 'email is required'],
    unique: true,
    validate: [validator.isEmail, 'must contain a valid email address'],
  },
  phone: {
    type: Number,
    requred: [true, 'Phone number is required'],
    unique: true,
  },
  dateOfBirth: {
    type: Number,
    requred: [true, 'date of birth is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    maxlength: [12, 'Passowrd length must be between 6 to 12 characters'],
    minlength: [6, 'Passowrd length must be between 6 to 12 characters'],
  },

  confirmPassowrd: {
    type: String,
    required: [true, 'confirm password is reqyured'],
    validate: {
      validator: function (val) {
        return this.password === val;
      },
      message: 'confirm password must be same as passowrd',
    },
  },
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;
