    var mongoose = require('mongoose');
    var productSchema = new mongoose.Schema({
        name: String,
        description: String,
        quantity: Number,
        image: String,
        price: Number,
        outdate: Date,

    });
    var Product = mongoose.model('Product', productSchema, 'products');
    module.exports = Product;