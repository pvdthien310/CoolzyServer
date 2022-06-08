const homePageAssetModel = require('../models/homePageAsset.model')

const homePageAssetController = {
    getAll: (req, res) => {
        homePageAssetModel.find({}).populate('')
            .then(data => {
                if (data.length == 0)
                    res.json(data)
                else res.json(data[0])
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },

    create: (req, res) => {
        let tmp;
        homePageAssetModel.find({})
            .then(data => {
                tmp = data;
                if (tmp.length == 0) {
                    const newAsset = new homePageAssetModel({
                        listSlider: req.body.listSlider,
                        listProduct: req.body.listProduct,
                        listBrand: req.body.listBrand
                    })
                    // console.log(newStatus)
                    newAsset.save()
                        .then((data) => {
                            // console.log(data)
                            res.send("Add Success")
                        })
                        .catch(err => {
                            console.log('Error')
                        })
                } else {
                    res.send("Document existed, please update the document")
                }
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })


    },

    update: (req, res) => {
        homePageAssetModel.findByIdAndUpdate({
            _id: req.body._id
        }, {
            listProduct: req.body.listProduct,
            listFeaturedProduct: req.body.listOutStanding
        })
            .then(data => {
                res.send('Update success')
            })
            .catch(err => console.log(err))
    },

    // updateListProduct: (req, res) => {
    //     let arr;
    //     homePageAssetModel.find({})
    //         .then(data => {
    //             arr = data
    //             if (arr.length == 0) {
    //                 const newAsset = new homePageAssetModel({
    //                     listProduct: req.body.listProduct
    //                 })
    //                 newAsset.save()
    //                     .then((data2) => {
    //                         res.send("Add Success")
    //                     })
    //                     .catch(err => {
    //                         console.log('Error')
    //                     })
    //             } else
    //                 homePageAssetModel.updateOne({
    //                     _id: arr[0]._id
    //                 }, {
    //                     listProduct: req.body.listProduct
    //                 })
    //                     .then(() => {
    //                         res.send("Update listProduct success")
    //                     })
    //                     .catch(err => {
    //                         console.log('Error')
    //                     })
    //         })
    //         .catch(err => {
    //             res.status(500).json({ Err: err })
    //         })
    // },

    // updateListFeaturedProduct: (req, res) => {
    //     let arr;
    //     homePageAssetModel.find({})
    //         .then(data => {
    //             arr = data
    //             if (arr.length == 0) {
    //                 const newAsset = new homePageAssetModel({
    //                     listFeaturedProduct: req.body.listOutStanding
    //                 })
    //                 newAsset.save()
    //                     .then((data2) => {
    //                         res.send("Add Success")
    //                     })
    //                     .catch(err => {
    //                         console.log('Error')
    //                     })
    //             } else
    //                 homePageAssetModel.updateOne({
    //                     _id: arr[0]._id
    //                 }, {
    //                     listFeaturedProduct: req.body.listOutStanding
    //                 })
    //                     .then(() => {
    //                         res.send("Update listFeatured success")
    //                     })
    //                     .catch(err => {
    //                         console.log('Error')
    //                     })
    //         })
    //         .catch(err => {
    //             res.status(500).json({ Err: err })
    //         })
    // },

    // updateListSlider: (req, res) => {
    //     let arr;
    //     homePageAssetModel.find({})
    //         .then(data => {
    //             arr = data
    //             if (arr.length == 0) {
    //                 const newAsset = new homePageAssetModel({
    //                     listSlider: req.body.listSlider
    //                 })
    //                 newAsset.save()
    //                     .then((data2) => {
    //                         res.send("Add Success")
    //                     })
    //                     .catch(err => {
    //                         console.log('Error')
    //                     })
    //             } else
    //                 homePageAssetModel.updateOne({
    //                     _id: arr[0]._id
    //                 }, {
    //                     listSlider: req.body.listSlider
    //                 })
    //                     .then(() => {
    //                         res.send("Update listSlider success")
    //                     })
    //                     .catch(err => {
    //                         console.log('Error')
    //                     })
    //         })
    //         .catch(err => {
    //             res.status(500).json({ Err: err })
    //         })
    // },

    // updateListBrand: (req, res) => { }
}
module.exports = homePageAssetController