const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0.01, "Price must be at least 0.01!"]
    },
    description: {
        type: String,
        // required: [true, "Description is required"]
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);

