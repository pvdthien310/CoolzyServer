const accountModel = require('../models/account.model')
const jwt = require('jsonwebtoken')
const { encode } = require('base-64');
const mFunction = require('../function')

const CartSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },

    productId: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Cart", CartSchema);