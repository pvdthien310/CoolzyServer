const clothesModel = require('../models/clothes.model')

const clothesController = {
    getAll: (req, res) => {
        clothesModel.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },
    create: (req, res) => {
        const newClothes = new clothesModel({
            name: req.body.name,
            price: req.body.price,
            brand: req.body.brand,
            images: req.body.images,
            description: req.body.description,
            _categoryId: req.body._categoryId,
            size: req.body.sizes
        })
        newClothes.save()
            .then((data) => {
                res.send("Add Success")
            })
            .catch(err => {
                console.log('Error')
            })
    },

    deleteAll: (req, res) => {
        clothesModel.deleteMany({})
            .then((data) => {
                // console.log(data)
                res.send("Delete All Success")
            })
            .catch(err => {
                console.log('Error')
            })
    },

    getById: (req, res) => {
        clothesModel.findOne({
                _id: req.params.id
            })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },

    getByCategoryId: (req, res) => {
        clothesModel.find({
                _categoryId: req.params.id
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },

    deleteById: (req, res) => {
        clothesModel.deleteOne({
                _id: req.params.id
            })
            .then(data => {
                res.send("Delete success")
            })
            .catch(err => { res.status.json({ Err: err }) })
    },

    update: (req, res) => {
        clothesModel.findByIdAndUpdate({
                _id: req.body._id
            }, {
                name: req.body.name,
                brand: req.body.brand,
                size: req.body.size,
                _categoryId: req.body._categoryId,
                images: req.body.images,
                price: req.body.price,
                description: req.body.description,
                published: req.body.published,
                isAvailable: req.body.isAvailable
            })
            .then(data => {
                res.send('Update success')
            })
            .catch(err => console.log(err))
    },


}
module.exports = clothesController