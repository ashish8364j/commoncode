const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY ;
console.log(JWT_SECRET_KEY);
const jwt = require('jsonwebtoken');
const email = 'ashishsingh822003@gmail.com';
const userId = 'sfjknhjrkengjr' ;

const createToken = async() => {
    const token = await jwt.sign({userId:userId},
    process.env.JWT_SECRET_KEY,{expiresIn:'1d'});
    res.status(201).json({
        "status":"success", 'token' : token
    })
}
module.exports = createToken;