
require('dotenv').config()
const connectDb = require('./db/dbconnect.js');
connectDb(process.env.MONGODB_URI);

