var express = require('express');
var router = express.Router();

const byAgeD = require('../models/byAgeDModel')

router.get('/:id',(req ,res )=>{

    byAgeID = req.params.id
    byAgeD.findById(byAgeID ).then((doc,err)=>{
    if(doc){

        var product = []
        product.push(doc)
        console.log(product)

        res.render('singleByAgeD' ,{oneProduct:product});
    }else{
        console.log(err)
    }
})

})




module.exports = router;