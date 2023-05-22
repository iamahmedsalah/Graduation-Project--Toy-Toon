var express = require('express');
var router = express.Router();
const Products = require('../models/allProducts');
const { cookie } = require('express-validator');


/* GET shop page. */
router.get('/'  ,  async (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5



    Products.find().skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('shop',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })

});

router.get('/ages-0-4', (req ,res) =>{

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5

    Products.find({ages:'0-4'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('byAgeA',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })

})


router.get('/ages-5-7', (req ,res) =>{

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5

    Products.find({ages:'5-7'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('byAgeB',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })

})


router.get('/ages-8-10', (req ,res) =>{

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5

    Products.find({ages:'8-10'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('byAgeC',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })
})

router.get('/ages-12', (req ,res) =>{

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5

    Products.find({ages:'+12'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('byAgeD',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports = router;



