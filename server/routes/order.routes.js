const express = require('express')
const { route } = require('express/lib/application')
var router = express.Router()
const controller = require('../controllers/order.controller')
const { authenToken } = require('../middlewares/authenToken')

router.post('/', controller.create)
router.get('/', controller.getAll)
router.get('/:id', controller.getById)

module.exports = router