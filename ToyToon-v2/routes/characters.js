var express = require('express');
var router = express.Router();
const Character = require('../models/characterModel');
const Products = require('../models/allProducts');

/* GET characters page. */
router.get('/', (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5


    Character.find().skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('Characters',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })

});

router.get('/batman', (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5


    Products.find({chara:'Bat Man'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })

});

router.get('/spiderman', (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5


    Products.find({chara:'Spider Man'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })

});


router.get('/hxh', (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5


    Products.find({chara:'HxH'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })

});

router.get('/flash', (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5


    Products.find({chara:'Flash'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })

});


router.get('/barbie', (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5


    Products.find({chara:'Barbie'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })

});


router.get('/barbie', (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5


    Products.find({chara:'Barbie'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })

});


router.get('/transformers', (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5


    Products.find({chara:'Transformers'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })

});


router.get('/darthvider', (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5


    Products.find({chara:'Darth Vader'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })

});


router.get('/supergirl', (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit *1 || 8;
    const skip = (page -1) * limit; // skip => (2-1) *5 =5


    Products.find({chara:'Super Girl'}).skip(skip).limit(limit).then((doc) => {
        // console.log(doc)
        var prodcutGrid = [];
        var colGrid = 4;
        for (let i = 0; i < doc.length; i+=colGrid) {
            prodcutGrid.push(doc.slice(i, i + colGrid))
        }
        console.log(prodcutGrid)
        res.render('singleCharacter',{ items: prodcutGrid , page })
    }).catch((err)=>{
        console.log(err)
    })

});


module.exports = router;



