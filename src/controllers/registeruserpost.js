
const asyncHandler = require('../utils/asyncHandler.js')

const registerUserPost = asyncHandler ( async(req,res,next) =>{
    res.send('ok success')
})


module.exports = registerUserPost