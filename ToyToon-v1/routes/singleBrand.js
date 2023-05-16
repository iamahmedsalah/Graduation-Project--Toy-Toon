var express = require('express');
var router = express.Router();

const singleBrand = require('../models/brandsModel')

router.get('/:id',(req ,res )=>{

    brandID = req.params.id
    singleBrand.findById(brandID).then((doc,err)=>{
    if(doc){

        var brand = []
        brand.push(doc)
        console.log(brand)

        res.render('singleBrand' ,{oneBrand:brand});
    }else{
        console.log(err)
    }
})

})




module.exports = router;