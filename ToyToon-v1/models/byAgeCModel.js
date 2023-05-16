const mongoose = require('mongoose');

// 1- Create Schema

const byAgeCSchema = new mongoose.Schema({
    imgPath: {
        type: String,
        required:true,
    },
    productName: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 32,
    },
    info: {
        type: {
            License:String,
            productType:String,
            more:String
        },
        required: true,
    },
    price: {
        type: Number,
        required:true,
    },
    slug: {
        type: String,
        lowercase: true,
    },
}, { timestamps: true });


// 2- Create Model

module.exports = mongoose.model('shopByAgeC', byAgeCSchema);