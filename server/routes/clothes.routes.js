const express = require('express')
const { route } = require('express/lib/application')
var router = express.Router()
const controller = require('../controllers/clothes.controller')
const { authenToken } = require('../middlewares/authenToken')

router.get('/', authenToken, controller.getAll)
router.post('/', controller.create)
router.delete('/deleteAll', controller.deleteAll)
router.get('/:id', controller.getById)
router.get('/category/:category', controller.getByCategory)

module.exports = router