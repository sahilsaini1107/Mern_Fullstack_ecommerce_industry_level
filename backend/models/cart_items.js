const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    cart_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    products_sku_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductSku' },
    quantity: Number,
    created_at: { type: Date, default: Date.now },
    updated_at: Date
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
