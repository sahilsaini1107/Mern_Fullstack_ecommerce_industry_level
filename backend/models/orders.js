const mongoose = require('mongoose');

const orderDetailsSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    payment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'PaymentDetail' },
    total: Number,
    created_at: { type: Date, default: Date.now },
    updated_at: Date
});

const OrderDetails = mongoose.model('OrderDetails', orderDetailsSchema);

module.exports = OrderDetails;
