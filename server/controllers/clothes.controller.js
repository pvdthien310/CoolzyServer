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
                category: req.body.category,
                size: req.body.size
            })
            // console.log(newStatus)
        newClothes.save()
            .then((data) => {
                // console.log(data)
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
                email: req.params._id
            })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },

    getByCategory: (req, res) => {
        clothesModel.find({
                category: req.params.category
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    }
}
module.exports = clothesController