const mongoose = require('mongoose');

const paymentDetailSchema = new mongoose.Schema({
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetails' },
    amount: Number,
    provider: String,
    status: String,
    created_at: { type: Date, default: Date.now },
    updated_at: Date
});

const PaymentDetail = mongoose.model('PaymentDetail', paymentDetailSchema);

module.exports = PaymentDetail;
