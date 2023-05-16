var express = require('express');
var router = express.Router();

const byAgeB = require('../models/byAgeBModel')

router.get('/:id',(req ,res )=>{

    byAgeID = req.params.id
    byAgeB.findById(byAgeID ).then((doc,err)=>{
    if(doc){

        var product = []
        product.push(doc)
        console.log(product)

        res.render('singleByAgeB' ,{oneProduct:product});
    }else{
        console.log(err)
    }
})

})




module.exports = router;