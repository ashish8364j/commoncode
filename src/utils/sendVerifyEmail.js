const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const sendVerifyEmail = async (email) =>{
    try{
        // Configure Nodemailer - replace with your email provider settings
        const transporter = nodemailer.createTransport({
            service: 'ashishsmtptest',
            auth: {
              user: 'emailforpdfshare@gmail.com',
              pass: 'Ashish@1234'
            }
          });
        //// In-memory storage for OTPs (replace this with a database in a production scenario)
        //generate a otp

        const sendingOtp = function generateOTP() {
            return Math.floor(100000 + Math.random() * 900000);
          }
          console.log(sendingOtp);

          const mailOptions = {
            from: 'emailforpdfshare@gmail.com',
            to: email,
            subject: 'Verification OTP',
            text: `Your OTP for email verification is: ${sendingOtp}`
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(error);
              res.status(500).send('Failed to send OTP');
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

    }catch(error){
        console.log('ERR',error);
    }
}


module.exports = sendVerifyEmail