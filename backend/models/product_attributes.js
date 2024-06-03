const mongoose = require('mongoose');

const productAttributeSchema = new mongoose.Schema({
    type: String,
    value: String,
    created_at: { type: Date, default: Date.now },
    deleted_at: Date
});

const ProductAttribute = mongoose.model('ProductAttribute', productAttributeSchema);

module.exports = ProductAttribute;
