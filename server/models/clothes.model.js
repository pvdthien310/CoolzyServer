const mongoose = require('mongoose')

const ClothesSchema = new mongoose.Schema({
    brand: {
        type: String,
        default: "No brand"
    },
    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    images: {
        type: Array
    }
})
module.exports = mongoose.model("Clothes", ClothesSchema);