const mongoose = require('mongoose');


const ThingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long."],
        // unique: true,
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be at least 3 characters long."]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters long."]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });


module.exports.Thing = mongoose.model("Thing", ThingSchema)

