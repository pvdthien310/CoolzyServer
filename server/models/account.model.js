const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    name: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    address: {
        type: String,
    },
    gender: {
        type: String,
    },
    birthday: {
        type: String,
    },
    enable: {
        type: Boolean,
        default: true
    },
    listCarts: {
        type: Array
    }
})
module.exports = mongoose.model("Account", AccountSchema);