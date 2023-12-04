
require('dotenv').config()
const app = require('./app.js')
const connectDb = require('./db/dbconnect.js');

port = process.env.PORT || 2000
url = process.env.MONGODB_URI
//asynchronous method on complete return a promise
connectDb(url)
.then(()=>{
    app.listen(port , ()=>{
        console.log(`server running at : ${port}`);
          //then me error ane pe catch pe jyega(yadi port khali nhi hai tab)
    })
})
.catch((error)=>{
    console.log('mongodb connection error ',error);
})