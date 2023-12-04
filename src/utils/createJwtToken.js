const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY ;
console.log(JWT_SECRET_KEY);
const jwt = require('jsonwebtoken');
const userSchema = require('../models/user.model.js');
const userId = 'sfjknhjrkengjr' ;

const createToken = async(req,res,next) => {
    console.log(req.query.id);
    const data = userSchema.findOne({_id:req.query.id});
    console.log(data);
    // check data and name of the user 
    const token = await jwt.sign({userId:req.query.id},
    process.env.JWT_SECRET_KEY,{expiresIn:'1d'});
    res.status(201).json({
        "status":"success", 'token' : token 
    })
    next();
}
module.exports = createToken;