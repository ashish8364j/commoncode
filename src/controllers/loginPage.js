const asyncHandler = require('../utils/asyncHandler.js')
const userSchema = require('../models/user.model.js');
const { use } = require('../app.js');

const loginPage = asyncHandler ( async(req,res,next) =>{
       const id = req.query.id
       console.log(id);
       await userSchema.updateOne({_id:id},{$set :{isVarified:1}})
       return res.render('login.ejs',{ data: id });
})


module.exports = loginPage