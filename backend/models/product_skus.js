const mongoose = require('mongoose');

const productSkuSchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    size_attribute_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductAttribute' },
    color_attribute_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductAttribute' },
    sku: String,
    price: String,
    quantity: Number,
    created_at: { type: Date, default: Date.now },
    deleted_at: Date
});

const ProductSku = mongoose.model('ProductSku', productSkuSchema);

module.exports = ProductSku;
