const express = require('express')
const { route } = require('express/lib/application')
var router = express.Router()
const controller = require('../controllers/authentication.controller')

router.post('/login', controller.login)
router.post('/refreshToken', controller.refreshToken)
module.exports = router 