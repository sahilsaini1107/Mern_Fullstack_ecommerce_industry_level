const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    created_at: { type: Date, default: Date.now },
    deleted_at: Date
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
