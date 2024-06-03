const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    total: Number,
    created_at: { type: Date, default: Date.now },
    updated_at: Date
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
