const ageCategory = require('../models/ageCategory');
const dbproducts = require('../config/DB');
const { default: mongoose } = require('mongoose');


// Connectin To Date Base
dbproducts();

// initAges


const ages = [
    new ageCategory  ({
    categoryName: "0-4",
    }),

    new ageCategory  ({
        categoryName: "5-7",
        }),

    new ageCategory  ({
    categoryName: "8-10",
    }),


    new ageCategory  ({
        categoryName: "+12",
        }),

];



for (let i = 0; i < ages.length; i++) {

    ages[i].save().then((err, doc)=>{
        if(err){
            console.log(err);
        }else
        {
            console.log(doc)
            done ++
            if(done === ages.length){
                mongoose.disconnect()
            }
        }
    })





}


