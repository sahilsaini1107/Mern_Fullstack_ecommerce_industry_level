const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    parent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    name: String,
    description: String,
    created_at: { type: Date, default: Date.now },
    deleted_at: Date
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
