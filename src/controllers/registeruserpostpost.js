const asyncHandler = require('../utils/asyncHandler.js')
const userSchema = require('../models/user.model.js');
const { use } = require('../app.js');

const registeruserPostPost = asyncHandler ( async(req,res,next) =>{
       console.log(req.query.id);
       await userSchema.updateOne({_id:req.query.id},{$set :{isVarified:1}})
       res.send('varified')
})


module.exports = registeruserPostPost