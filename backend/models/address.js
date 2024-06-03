const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    title: String,
    address_line_1: String,
    address_line_2: String,
    country: String,
    city: String,
    postal_code: String,
    landmark: String,
    phone_number: String,
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    deleted_at: Date
  });

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
