const express = require('express')
const { route } = require('express/lib/application')
var router = express.Router()
const controller = require('../controllers/clothes.controller')
const { authenToken } = require('../middlewares/authenToken')

router.get('/', controller.getAll)
router.get('/category/:id', controller.getByCategoryId)
router.get('/:id', controller.getById)

router.post('/', controller.create)

router.put('/', controller.update)

router.delete('/deleteAll', controller.deleteAll)
router.delete('/:id', controller.deleteById)

module.exports = router