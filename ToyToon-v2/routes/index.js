var express = require('express');
const { loginRequired } = require('../config/jwt')

const nodemailer = require("nodemailer");
const { hbsEmail} = require("handlebars-email");
const path = require("path");
// const template = path.join("views", "email", "template.hbs");
// const context = { message:`` };
// const eMailTemplate = hbsEmail("template", context);



// dotenv
const dotenv = require('dotenv');
const { compile } = require('morgan');
dotenv.config({path:'config.env'});
var router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.render('index',  { title: 'Toy Toon'});
});


  // Contact Us
router.post('/contact', (req, res, next)=>{
  const context = { message:`${req.body.contactMessage}`, guest:`${req.body.contactName}`  };
  const template = path.join("views", "email", "template.hbs");
  const eMailTemplate = hbsEmail("template", context);
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.ContactEmail,
        pass: process.env.ContactPassword
    }
})


  const mailOptions = {
    from: req.body.contactEmail,
    to: process.env.ContactEmail,
    subject:` Message From ${req.body.contactEmail}: Company: ${req.body.contactCompany}`,
    text: req.body.contactMessage,
    html: eMailTemplate,
    replyTo: process.env.ContactEmail
  }


  transporter.sendMail(mailOptions, (err, info)=> {
    if(err){
        console.log(err);
        res.send('error');
    }else{
        console.log('Email Sent' , info.response );
        res.send('success')
    }
})

})


//  End Contact Us





module.exports = router;
