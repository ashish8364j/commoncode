const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const sendVerifyEmail = require('../utils/sendVerifyEmail.js') ;
const asyncHandler = require('../utils/asyncHandler.js') ;
const userSchema = require('../models/user.model.js') ;

const registerUserPost = asyncHandler ( async(req,res,next) =>{
    const user_Data = await userSchema.create(req.query) ;
    console.log(user_Data);
    console.log(user_Data._id) ;
    let a = await sendVerifyEmail(req.query.email,user_Data._id)
    res.render('plese click on the link we sent to you')
});
module.exports = registerUserPost ;