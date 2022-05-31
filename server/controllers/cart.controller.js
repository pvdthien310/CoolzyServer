const accountModel = require('../models/account.model')
const jwt = require('jsonwebtoken')
const { encode } = require('base-64');
const mFunction = require('../function')

const cartController = {
    getByUserId: (req, res) => {
        accountModel.findById(req.params.id)
            .then(data => {
                res.json(data.listCarts)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },

    insert: (req, res) => {
        let userId = req.params.id

        let newCart = {
            clothId: req.body.clothId,
            quantity: req.body.quantity,
            size: req.body.size
        }
        accountModel.findOne({ _id: userId })
            .then((data) => {
                let listCart = data.listCarts.filter(e => e.clothId == newCart.clothId && e.size == newCart.size)
                if (listCart.length == 0) {
                    insertCart(res, userId, newCart)
                } else {
                    newCart.quantity = +newCart.quantity + +listCart[0].quantity

                    accountModel.findOneAndUpdate({ _id: userId }, { $pull: { listCarts: { clothId: newCart.clothId, size: newCart.size } } }, { "new": true, "upsert": true })
                        .then((data) => {
                            insertCart(res, userId, newCart)

                        }).catch(err => {
                            console.log(err)
                        })
                }
            }).catch(err => {
                console.log(err)
            })


    },

    delete: (req, res) => {
        let userId = req.params.id
        let deleteCart = {
            clothId: req.body.clothId,
            size: req.body.size
        }

        accountModel.findOneAndUpdate({ _id: userId }, { $pull: { listCarts: { clothId: deleteCart.clothId, size: deleteCart.size } } }, { "new": true, "upsert": true })
            .then((data) => {
                res.send(data)
            }).catch(err => {
                console.log(err)
            })
    },

    update: (req, res) => {
        let userId = req.params.id

        let newCart = {
            clothId: req.body.clothId,
            quantity: req.body.quantity,
            size: req.body.size,
        }

        // accountModel.findOneAndUpdate({ _id: userId, 'listCarts.clothId': clothIdUpdate, 'listCarts.size': sizeUpdate }, { $set: { 'listCarts.$.quantity': quantityUpdate } }, { "new": true, "upsert": true })
        //     .then((data) => {
        //         res.send(data)
        //     }).catch(err => {
        //         console.log(err)
        //     })

        accountModel.findOneAndUpdate({ _id: userId }, { $pull: { listCarts: { clothId: newCart.clothId, size: newCart.size } } }, { "new": true, "upsert": true })
            .then((data) => {
                accountModel.findOneAndUpdate({ _id: userId }, { $push: { listCarts: newCart } }, { "new": true, "upsert": true })
                    .then((data) => {
                        res.send(data)
                    }).catch(err => {
                        console.log(err)
                    })

            }).catch(err => {
                console.log(err)
            })
    },
}

const insertCart = (res, userId, newCart) => {
    accountModel.findOneAndUpdate({ _id: userId }, { $push: { listCarts: newCart } }, { "new": true, "upsert": true })
        .then((data) => {
            res.send(data)
        }).catch(err => {
            console.log(err)
        })
}

module.exports = cartController