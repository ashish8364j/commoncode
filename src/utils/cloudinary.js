const cloudinary = require('cloudinary') .v2
const fs = require('fs')  
//we will do two step process first we will upload file from multer to local server 
//then from local server to cloudanry and will get a link and save that link in database  
//if file successfully uploaded in the cloudanary then we will remove this from
//our local server
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_KEY_SECRET 
});

const uploadOnCloudinary = async(localFilePath) =>{
    try{
        if(!localFilePath) return null 
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        //from the response we only want the url 
        // return response
        return response.url
    //file uuploaded successfully
    console.log('file uploaded on cloudinary');
    }catch(error){
        //file to local server pe a chuka hai ab vo upload nhi hua hai to problem to hai
        //we have to clean that corrupt file from our server
        fs.unlinkSync(localFilePath)
        //this will remove the locally saved temporary file as the upload operation got failed
        return null
    }
}

module.exports = uploadOnCloudinary ;
