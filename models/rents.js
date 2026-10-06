const mongoose = require("mongoose");

const rentSchema = new mongoose.Schema({
    tenant: {
        type: String,
        required: true,
        trim: true
    },

    rent: {
        type: Number,
        required: true,
        min: 500,
        max: 200000
    },

    type: {
        type: String,
        required: true,
        enum: ["house", "pg", "shop"]
    },

    paid: {
        type: Boolean,
        default: false
    },

    dueDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("Rent", rentSchema);