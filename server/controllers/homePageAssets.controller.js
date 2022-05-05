const homePageAssetsModel = require('../models/homePageAssets.model')

const homePageAssetsController = {
    getAll: (req, res) => {
        homePageAssetsModel.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },
    create: (req, res) => {
        const newhomePageAssets = new homePageAssetsModel({
           ListSlider : req.body.ListSlider,
           ListProduct: req.body.ListProduct,
           ListBrand : req.body.ListBrand
        })
        newhomePageAssets.save()
            .then((data) => {
                // console.log(data)
                res.send("Add Success")
            })
            .catch(err => {
                console.log('Error')
            })
    },
    getById: (req, res) => {
        homePageAssetsModel.findById(req.params.id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },

}
module.exports = homePageAssetsController