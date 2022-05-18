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
    deleteAll: (req, res) => {
        orderModel.deleteMany({})
            .then((data) => {
                res.send("Delete All Success")
            })
            .catch(err => {
                console.log('Error')
            })
    },
    deleteOrderById: (req, res) => {
        orderModel.findOneAndDelete({ _id: req.params.id })
            .then((data) => {
                res.send(data)
            }).catch(err => {
                console.log(err)
            })
    },
    updateOrderById: (req, res) => {
        orderModel.findOneAndUpdate({ _id: req.params.id }, req.body, { "new": true, "upsert": true })
            .then((data) => {
                res.send(data)
            }).catch(err => {
                console.log(err)
            })
    },
    productExisted: (req, res) => {
        let flag = false
        orderModel.find({})
            .then(data => {
                data.forEach(element => {
                    let result = element.items.find(e => e._itemid == req.body.productId)
                    if (result) flag = true
                })
                res.send(flag)
            }).catch(err => console.log(err))
    }

}
module.exports = orderController