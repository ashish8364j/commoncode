const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const sendVerifyEmail = async (email) =>{
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
        function generateOTP() {
            return Math.floor(100000 + Math.random() * 900000);
          }
          sendingOtp = generateOTP()
          console.log(sendingOtp);

          const mailOptions = {
            from: 'emailforpdfshare@gmail.com',
            to: email,
            subject: 'Verification OTP',
            text: `Your OTP for email verification is: ${sendingOtp}`
          };

          await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          return sendingOtp ;
    }catch(error){
        console.log('ERR',error);
    }
}


module.exports = sendVerifyEmail