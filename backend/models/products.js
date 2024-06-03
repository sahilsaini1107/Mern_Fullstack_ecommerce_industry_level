const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    summary: String,
    cover: String,
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    created_at: { type: Date, default: Date.now },
    deleted_at: Date
  });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
