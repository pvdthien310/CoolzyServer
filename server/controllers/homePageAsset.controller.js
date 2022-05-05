const homePageAssetModel = require('../models/homePageAsset.model')

const categoriesController = {
    // getAll: (req, res) => {
    //     homePageAsset.find({})
    //         .then(data => {
    //             res.json(data)
    //         })
    //         .catch(err => {
    //             res.status(500).json({ Err: err })
    //         })
    // },


    // create: (req, res) => {
    //     const newAsset = new categoryModel({
    //             listSlider: req.body.listSlider,
    //             listProduct: req.body.listProduct,
    //             listBrand: req.body.listBrand
    //         })
    //         // console.log(newStatus)
    //     newAsset.save()
    //         .then((data) => {
    //             // console.log(data)
    //             res.send("Add Success")
    //         })
    //         .catch(err => {
    //             console.log('Error')
    //         })
    // },

    // deleteAll: (req, res) => {
    //     homePageAsset.deleteMany({})
    //         .then((data) => {
    //             // console.log(data)
    //             res.send("Delete All Success")
    //         })
    //         .catch(err => {
    //             console.log('Error')
    //         })
    // },

    // getById: (req, res) => {
    //     homePageAsset.findOne({
    //             _id: req.params.id
    //         })
    //         .then(data => {
    //             res.json(data)
    //         })
    //         .catch(err => {
    //             res.status(500).json({ Err: err })
    //         })
    // },

    // deleteById: (req, res) => {
    //     homePageAsset.deleteOne({
    //             _id: req.params.id
    //         })
    //         .then((data) => {
    //             // console.log(data)
    //             res.send("Delete Success")
    //         })
    //         .catch(err => {
    //             console.log('Error')
    //         })
    // },


}
module.exports = categoriesController