const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    created_at: { type: Date, default: Date.now },
    deleted_at: Date
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
