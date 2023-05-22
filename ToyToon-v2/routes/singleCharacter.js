var express = require('express');
var router = express.Router();

const singleCharacter = require('../models/characterModel')

router.get('/:id',(req ,res )=>{

    characterID = req.params.id
    singleCharacter.findById(characterID).then((doc,err)=>{
    if(doc){

        var char = []
        char.push(doc)
        console.log(char)

        res.render('singleCharacter' ,{onecharacter : char  });
    }else{
        console.log(err)
    }
})

})




module.exports = router;