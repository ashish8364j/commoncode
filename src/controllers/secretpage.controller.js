

const secretPage = asyncHandler ( async(req,res,next) =>{
    return res.send('this is my secret page')
})

module.exports = secretPage;