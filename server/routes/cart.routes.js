const express = require('express')
var router = express.Router()
const controller = require('../controllers/cart.controller')
const { authenToken } = require('../middlewares/authenToken')

router.get('/:id', controller.getByUserId)

router.put('/insert/:id', controller.insert)
router.put('/delete/:id', controller.delete)
router.put('/update/:id', controller.update)
module.exports = router