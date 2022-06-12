const categoryModel = require('../models/category.model')

const categoriesController = {
    getAll: (req, res) => {
        categoryModel.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },

    getAllId: (req, res) => {
        categoryModel.find({})
            .then(data => {
                let result = data.map((item) => item._id)
                res.json(result);
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },

    create: (req, res) => {
        const newCategory = new categoryModel({
                name: req.body.name,
            })
            // console.log(newStatus)
        newCategory.save()
            .then((data) => {
                // console.log(data)
                res.send(data)
            })
            .catch(err => {
                console.log('Error')
            })
    },

    deleteAll: (req, res) => {
        categoryModel.deleteMany({})
            .then((data) => {
                // console.log(data)
                res.send("Delete All Success")
            })
            .catch(err => {
                console.log('Error')
            })
    },

    getById: (req, res) => {
        categoryModel.findOne({
                _id: req.params.id
            })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },

    deleteById: (req, res) => {
        categoryModel.deleteOne({
                _id: req.params.id
            })
            .then((data) => {
                // console.log(data)
                res.send("Delete Success")
            })
            .catch(err => {
                console.log('Error')
            })
    },


}
module.exports = categoriesController