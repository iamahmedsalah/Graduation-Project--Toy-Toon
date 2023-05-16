const mongoose = require('mongoose');

// 1- Create Schema

const charactersSchema = new mongoose.Schema({
    imgPath: {
        type: String,
        required:true,
    },
    brandName: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });


// 2- Create Model

module.exports = mongoose.model('Characters', charactersSchema);