const asyncHandler = require('../utils/asyncHandler.js')

const registerUser = asyncHandler ( async(req,res,next) =>{
       res.render('index.ejs')
})


module.exports = registerUser