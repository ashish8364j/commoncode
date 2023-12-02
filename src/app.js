const express = require('express');
const cors = require('cors');
const path = require('path');
//cookieParser used for acces cookie from user browser and set cookie(perform crud operation)
const cookieParser = require('cookie-parser');

const app = express();
// * = kahin se bhi request aye dedo data
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
//when data come in the form of json
//json form data ki limit kya hai = 16 kb
app.use(express.json({limit:`${process.env.DATA_LIMIT}`}))

//setting a view path
app.set('view engine', 'ejs');
console.log(process.cwd());
const viewPath = path.join(process.cwd(), 'src' , 'viewfolder');
console.log(viewPath);
app.set('views', viewPath);

//when data come from the url
//extended use for nexted object
app.use(express.urlencoded({extended:true,limit:`${process.env.DATA_LIMIT}`}))

//when we want to store file folder
app.use(express.static("public"))

app.use(cookieParser())

//routes import
const userRouter = require('../src/routes/user.routes.js')

//routes declaration
app.use('',userRouter)

module.exports = app ;