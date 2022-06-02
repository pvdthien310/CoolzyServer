const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        trim: true
    },
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    items: {
        type: Array,
        require: true
    },
    total: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    method: {
        type: String,
        require: true
    },
    date: { type: Date, default: Date.now },
})
module.exports = mongoose.model("Order", OrderSchema);