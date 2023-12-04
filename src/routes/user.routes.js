const express = require('express')
const registerUser = require('../controllers/user.controller.js')
const registerUserPost = require('../controllers/registeruserpost.js')
const loginPage = require('../controllers/loginPage.js')
const loginpostPage = require('../controllers/loginpostPage.js')
const createToken = require('../utils/createJwtToken.js')
const router = express.Router()

router.get('/register',registerUser)

router.post('/register',registerUserPost)

router.get('/login',loginPage)

router.post('/login',createToken,loginpostPage)

module.exports = router