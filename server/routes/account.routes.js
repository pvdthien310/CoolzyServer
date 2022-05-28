const express = require('express')
const { route } = require('express/lib/application')
var router = express.Router()
const controller = require('../controllers/account.controller')
const { authenToken } = require('../middlewares/authenToken')

router.post('/', controller.create)
router.post('/checkEmail/:email', controller.checkEmail)

router.get('/:email', controller.getByEmail)
router.get('/getById/:id', controller.getById)
router.get('/', controller.getAll)
router.get('/staff/all', controller.getAllStaff)

router.delete('/deleteAll', controller.deleteAll)
router.post('/:id', controller.update)
router.delete('/:id', controller.deleteAccount)

module.exports = router