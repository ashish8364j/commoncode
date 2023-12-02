const express = require('express')
const registerUser = require('../controllers/user.controller.js')
const registerUserPost = require('../controllers/registeruserpost.js')
const router = express.Router()

router.route('/register').get(registerUser)
router.route('/register').post(registerUserPost)



module.exports = router