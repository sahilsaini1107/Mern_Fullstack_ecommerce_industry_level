const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    avatar: String,
    first_name: String,
    last_name: String,
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: String,
    birth_of_date: Date,
    phone_number: String,
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    deleted_at: Date
  });

const User = mongoose.model('User', userSchema);

module.exports = User;
