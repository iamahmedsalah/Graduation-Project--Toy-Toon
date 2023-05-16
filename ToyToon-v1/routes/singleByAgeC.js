var express = require('express');
var router = express.Router();

const byAgeC = require('../models/byAgeCModel')

router.get('/:id',(req ,res )=>{

    byAgeID = req.params.id
    byAgeC.findById(byAgeID ).then((doc,err)=>{
    if(doc){

        var product = []
        product.push(doc)
        console.log(product)

        res.render('singleByAgeC' ,{oneProduct:product});
    }else{
        console.log(err)
    }
})

})




module.exports = router;