const express = require('express')
const { route } = require('express/lib/application')
var router = express.Router()
const controller = require('../controllers/order.controller')
const { authenToken } = require('../middlewares/authenToken')

router.post('/', controller.create)
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.delete('/deleteAll', controller.deleteAll)
router.delete('/:id', controller.deleteOrderById)
router.post('/:id', controller.updateOrderById)

module.exports = router