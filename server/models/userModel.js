const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    validate: {
      validator: function (val) {
        const isValid = /^[a-zA-Z]+$/.test(val);
        return isValid;
      },
      message: 'Name can contain only letters.',
    },
    trim: true,
  },
  surname: {
    type: String,
    required: [true, 'Please provide a surname'],
    validate: {
      validator: function (val) {
        const isValid = /^[a-zA-Z]+$/.test(val);
        return isValid;
      },
      message: 'Surname can contain only letters',
    },
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: [true, 'The email already used'],
    validate: [validator.isEmail, 'Not a valid email!'],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minLength: [8, 'Password can not be less than 8 characters'],
    validate: {
      validator: function (val) {
        if (val.split(' ')[1]) return false;

        return true;
      },
      message: 'Password can not contain empty character',
    },
    trim: true,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please enter the password again'],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: 'Passwords are not matched',
    },
    trim: true,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
