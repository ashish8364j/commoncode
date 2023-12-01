const mongoose = require('mongoose');


const connectDb = async (a) => {
    try{
        DB_NAME = process.env.DB_NAME
        console.log(DB_NAME)
        const connectInfo = await mongoose.connect(`${a}/${DB_NAME}`)
        console.log(`\n MongoDb connected ${connectInfo.connection.host}`);
    }catch(error){
        console.log("ERR :" , error);
        process.exit(1)
    }
}

module.exports = connectDb