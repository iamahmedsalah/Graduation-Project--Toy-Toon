const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const Users = require('../models/userModel'); 


const loginRequired = async (req,res, next) =>{
    const token = req.cookies['access-token'];
    if(token){
        const validToken = await jwt.verify(token, process.env.JWT_SECRET )
        if(validToken){
            res.user = validToken.id
            next();
        }
        else{
            console.log('token expired')
        }
    }else{
        console.log(' token not found')
    }
}



const verfiyEmail =  async (req, res, next)=>{

    try{
        const user = await Users.findOne({email: req.body.userEmail})
        console.log(user)
        if(user.isVeified ){
            next()
        }
        else{
            console.log(' User still not exist pleaase verfiy your email first')
            req.flash('error','Pleaase verfiy your email first')
            res.redirect('/login')
        }
    }
    catch(err){ 
        console.log(err)
    }

}
module.exports = {loginRequired, verfiyEmail  }