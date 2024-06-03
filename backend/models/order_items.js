const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetails' },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    products_sku_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductSku' },
    quantity: Number,
    created_at: { type: Date, default: Date.now },
    updated_at: Date
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = OrderItem;
