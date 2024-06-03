const mongoose = require('mongoose');

const relationshipsSchema = new mongoose.Schema({
    // Define relationships
    // Address - User
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // SubCategory - Category
    parent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    // Product - Category
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    // ProductSku - Product
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    // ProductSku - ProductAttribute
    size_attribute_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductAttribute' },
    color_attribute_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductAttribute' },
    // Wishlist - User, Product
    // Cart - User
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // CartItem - Cart, Product, ProductSku
    cart_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    products_sku_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductSku' },
    // OrderDetails - User, PaymentDetail
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    payment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'PaymentDetail' },
    // OrderItem - OrderDetails, Product, ProductSku
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetails' },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    products_sku_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductSku' }
});

const Relationships = mongoose.model('Relationships', relationshipsSchema);

module.exports = Relationships;
