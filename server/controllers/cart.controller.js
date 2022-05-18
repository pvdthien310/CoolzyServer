const cartModel = require('../models/cart.model')

const cartController = {
    getAllByUser: (req, res) => {
        cartModel.find({ email: req.params.email })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },

    create: (req, res) => {
        if (!req.body.userID || !req.body.productID) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        cartModel.findOne({
                productId: req.body.productId,
                email: req.body.email
            })
            .then(data => {
                if (data == null) {
                    const cart = {
                        email: req.body.email,
                        productId: req.body.productId,
                        quantity: req.body.quantity
                    };
                    cartModel.create(cart)
                        .then(data => {
                            res.send(data);
                        })
                        .catch(err => {
                            res.status(500).send({
                                message: err.message || "Some error occurred while creating the Cart."
                            });
                        });
                } else {
                    let quantity = data.amount
                    cartModel.update({ amount: quantity + 1 }, {
                            where: { productid: req.body.productID, userid: req.body.userID }
                        })
                        .then(num => {
                            if (num == 1) {
                                res.send({
                                    message: "Cart was updated successfully."
                                });
                            } else {
                                res.send({
                                    message: `Cannot update Cart with id=${id}. Maybe Cart was not found or req.body is empty!`
                                });
                            }
                        })
                        .catch(err => {
                            res.status(500).send({
                                message: "Error updating Cart with id=" + id
                            });
                        });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Cart."
                });
            });
    },

    decrease: (req, res) => {
        // Validate request
        if (!req.body.email || !req.body.productId) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        cartModel.findOne({
                productId: req.body.productId,
                email: req.body.email
            })
            .then(data => {
                if (data == null) {
                    res.send("There is no this product in your cart")
                } else {
                    let quantity = data.quantity;
                    if (quantity == 1) {
                        cartModel.destroy({
                                productId: req.body.productId,
                                email: req.body.email
                            })
                            .then(num => {
                                if (num == 1) {
                                    res.send({
                                        message: "Cart was deleted successfully!"
                                    });
                                } else {
                                    res.send({
                                        message: `Cannot delete Cart with id=${id}. Maybe Cart was not found!`
                                    });
                                }
                            })
                            .catch(err => {
                                res.status(500).send({
                                    message: "Could not delete Cart with id=" + id
                                });
                            });
                    } else {
                        cartModel.update({ amount: quantity - 1 }, {
                                productId: req.body.productId,
                                email: req.body.email
                            })
                            .then(num => {
                                if (num == 1) {
                                    res.send({
                                        message: "Cart was updated successfully."
                                    });
                                } else {
                                    res.send({
                                        message: `Cannot update Cart with id=${id}. Maybe Cart was not found or req.body is empty!`
                                    });
                                }
                            })
                            .catch(err => {
                                res.status(500).send({
                                    message: "Error updating Cart with id=" + id
                                });
                            });
                    }
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Cart."
                });
            });
    },

    deleteAll: (req, res) => {
        cartModel.deleteMany({})
            .then((data) => {
                // console.log(data)
                res.send("Delete All Success")
            })
            .catch(err => {
                console.log('Error')
            })
    },

    getById: (req, res) => {
        cartModel.findOne({
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
        cartModel.deleteOne({
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
module.exports = cartController