const express = require('express')
const { route } = require('express/lib/application')
var router = express.Router()
const controller = require('../controllers/homePageAsset.controller')
const { authenToken } = require('../middlewares/authenToken')

router.get('/', controller.getAll)
router.post('/', controller.create)
router.post('/updateSlider', controller.updateListSlider)
router.post('/updateProduct', controller.updateListProduct)
router.post('/updateFeaturedProduct', controller.updateListFeaturedProduct)
router.post('/updateBrand', controller.updateListBrand)

module.exports = router