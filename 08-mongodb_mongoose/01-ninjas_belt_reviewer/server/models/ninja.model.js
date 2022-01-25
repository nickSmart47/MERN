const mongoose = require('mongoose'); // import mongoose so we can use it to make a table


// the new mongoose.Schmea({}) just allows us to write the instructions for what each ninja should have. ID field auto generated
const NinjaSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "first name is required"],
        minlength: [2, "First name must be at least 2 characters!"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
    },
    numBelts: {
        type: Number,
        required: [true, "Number of belts is required!"],
        min: [0, "Number of belts must be at least 0!"]
    },
    isVeteran: { // not a required field so it wont have validators
        type: Boolean,
    },
});

const Ninja = mongoose.model('Ninja', NinjaSchema);

module.exports = Ninja;

