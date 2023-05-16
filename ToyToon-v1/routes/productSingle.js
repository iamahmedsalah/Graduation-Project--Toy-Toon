var express = require('express');
var router = express.Router();
const Products = require('../models/productsModel');
const brands = require('../models/brandsModel')


router.get('/:id',(req ,res )=>{

    productID = req.params.id
Products.findById(productID).then((doc,err)=>{
    if(doc){

        var product = []
        product.push(doc)
        console.log(product)

        res.render('productSingle' ,{oneProduct:product});
    }else{
        console.log(err)
    }
})

})


module.exports = router;