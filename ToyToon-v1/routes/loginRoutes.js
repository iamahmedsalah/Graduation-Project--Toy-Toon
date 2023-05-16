const express = require('express');
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const router = express.Router();
const {verfiyEmail } = require('../config/jwt')
const {check, validationResult} = require('express-validator')


/* GET login page. */
router.get('/', (req, res) => {
    var msgErr= req.flash('error');
    res.render('login', {msg: msgErr} );
});


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}


router.post('/', verfiyEmail ,async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors)
        return;
    }
    try {   
        const userEmail = req.body.userEmail;
        const password = req.body.userPassword;
        const findUser = await Users.findOne({ email: userEmail })
        if (findUser) {
            const match = await bcrypt.compare(password, findUser.password);
            if (match) {
                // create tokem
                const token = createToken(findUser.id)
                console.log(token)
                // store token 
                res.cookie('access-token' , token )
                res.render('index', {theUser:userEmail})
            }
            else {
                req.flash('error','Invailad Passwword')
                console.log('Invailad Passwword');
                res.redirect('login')
            }
        }
        else {
            req.flash('error','User not registered')
            console.log('User not registered')
            res.redirect('login')
        }
    }
    catch(err) {
        console.log(err)
    }
})


module.exports = router;
