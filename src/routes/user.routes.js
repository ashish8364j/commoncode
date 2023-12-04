const express = require('express')
const registerUser = require('../controllers/user.controller.js')
const registerUserPost = require('../controllers/registeruserpost.js')
const registerUserPostPost = require('../controllers/registeruserpostpost.js')
const createToken = require('../utils/createJwtToken.js')
const router = express.Router()

router.get('/register',registerUser)

router.get('/verifyotp',registerUserPost)

router.get('/varify',createToken,registerUserPostPost)

module.exports = router