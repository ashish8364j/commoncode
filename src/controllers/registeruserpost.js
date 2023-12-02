const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const sendVerifyEmail = require('../utils/sendVerifyEmail.js')
const asyncHandler = require('../utils/asyncHandler.js')

const registerUserPost = asyncHandler ( async(req,res,next) =>{
    console.log(req.body);
    const {name,email,password} = req.body ;
    sendVerifyEmail(email)
    res.send('emai sent')
})


module.exports = registerUserPost