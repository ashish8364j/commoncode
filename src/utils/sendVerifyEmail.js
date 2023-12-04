const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const sendVerifyEmail = async (email,userId) =>{
    try{
        // Configure Nodemailer - replace with your email provider settings
        const transporter = await nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth: {
              user: 'emailforpdfshare@gmail.com',
              pass: 'bjtmrmxlkgakkeut'
            }
          });
        //// In-memory storage for OTPs (replace this with a database in a production scenario)
        //generate a otp
          const mailOptions = {
            from: 'emailforpdfshare@gmail.com',
            to: email,
            subject: 'Verification URL',
            html: '<h3>hi please click here <a href="http://localhost:8000/login?id='+userId+'">click</a> to varify</h3>'
          };

          await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }catch(error){
        console.log('ERR',error);
    }
}


module.exports = sendVerifyEmail