var express = require('express');
var router = express.Router();

const byAges = require('../models/byAgeModel')

router.get('/:id',(req ,res )=>{

    byAgeID = req.params.id
    byAges.findById(byAgeID ).then((doc,err)=>{
    if(doc){

        var product = []
        product.push(doc)
        console.log(product)

        res.render('singleByAge' ,{oneProduct:product});
    }else{
        console.log(err)
    }
})

})




module.exports = router;