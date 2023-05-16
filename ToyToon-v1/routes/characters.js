var express = require('express');
var router = express.Router();
const Character = require('../models/characterModel');

/* GET shop page. */
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





module.exports = router;



