const mongoose = require('mongoose');

// 1- Create Schema

const AgeCategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        lowercase: true,
    },
}, { timestamps: true });


// 2- Create Model

module.exports = mongoose.model('AgesCategory', AgeCategorySchema);