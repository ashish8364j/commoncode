const products = require('../src/constant/data.js');
const productSchema = require('../src/models/product.model.js')


const defaultDataSave = async()=>{
    try{
        await productSchema.insertMany(products)
        console.log('data imported successfully');
    }catch(error){
        console.log(error);
    }
};

module.exports = defaultDataSave ;
