const express = require('express')
var router = express.Router()
const controller = require('../controllers/category.controller')
const { authenToken } = require('../middlewares/authenToken')

router.get('/', controller.getAll)
router.post('/', controller.create)
router.delete('/deleteAll', controller.deleteAll)
router.get('/:id', controller.getById)
router.delete('/delete/:id', controller.deleteById)
router.get('/getAll/id', controller.getAllId)

module.exports = router