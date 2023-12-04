const mongoose = require('mongoose');


const connectDb = async (a) => {
    try{
        DB_NAME = process.env.DB_NAME;
        console.log(a);
        console.log(DB_NAME);
        const connectInfo = await mongoose.connect(`${a}/${DB_NAME}`)
        console.log(`\n MongoDb connected ${connectInfo.connection.host}`);
    }catch(error){
        console.log("ERR dbConnection folder:" , error);
        process.exit(1)
    }
}

module.exports = connectDb