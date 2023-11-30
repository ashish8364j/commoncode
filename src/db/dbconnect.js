const mongoose = require('mongoose');


const connectDb = async (a) => {
    try{
        const connectInfo = await mongoose.connect(a)
        console.log(`\n MongoDb connected ${connectInfo.connection.host}`);
    }catch(error){
        console.log("ERR :" , error);
        process.exit(1)
    }
}

module.exports = connectDb