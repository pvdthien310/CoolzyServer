const express = require('express')
const { route } = require('express/lib/application')
var router = express.Router()
const controller = require('../controllers/account.controller')
const { authenToken } = require('../middlewares/authenToken')

router.post('/', controller.create)
router.post('/checkEmail/:email', controller.checkEmail)

router.get('/:email', controller.getByEmail)
router.get('/', authenToken, controller.getAll)

router.delete('/deleteAll', controller.deleteAll)

module.exports = router