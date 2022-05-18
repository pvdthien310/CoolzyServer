const express = require('express')
const { route } = require('express/lib/application')
var router = express.Router()
const controller = require('../controllers/category.controller')
const { authenToken } = require('../middlewares/authenToken')

router.get('/getByUser/:email', controller.getAllByUser)
router.post('/', controller.create)
router.post('/descrease', controller.descrease)
router.delete('/deleteAll', controller.deleteAll)
router.get('/:id', controller.getById)
router.delete('/delete/:id', controller.deleteById)
router.get('/getAll/id', controller.getAllId)

module.exports = router