const express = require('express')
const { route } = require('express/lib/application')
var router = express.Router()
const controller = require('../controllers/favorite.controller')
const { authenToken } = require('../middlewares/authenToken')

router.post('/', controller.create)
router.get('/', controller.getAll)
router.delete('/deleteAll', controller.deleteAll)
router.delete('/:id', controller.deleteById)
router.post('/favoriteExisted', controller.favoriteExisted)

module.exports = router