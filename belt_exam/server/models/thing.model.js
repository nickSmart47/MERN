const mongoose = require('mongoose');

const ThingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long."]
    }
}, { timestamps: true });

module.exports.Thing = mongoose.model("Thing", ThingSchema)

