const orderModel = require('../models/order.model')

const orderController = {
    getAll: (req, res) => {
        orderModel.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },
    create: (req, res) => {
        const neworder = new orderModel({
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            items: req.body.items,
            total: req.body.total,
            status: req.body.status
        })
        neworder.save()
            .then((data) => {
                // console.log(data)
                res.send("Add Success")
            })
            .catch(err => {
                console.log('Error')
            })
    },
    getById: (req, res) => {
        orderModel.findById(req.params.id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },

}
module.exports = orderController