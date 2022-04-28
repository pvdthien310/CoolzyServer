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
    }
})
module.exports = mongoose.model("Account", AccountSchema);