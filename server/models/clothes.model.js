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
    },
    description: {
        type: String,
        default: ''
    },

    _categoryId: {
        type: String,
        require: true
    },
    size: {
        type: Array,

        size: {
            type: String,
            require: true
        },

        quantity: {
            type: Number,
            require: true,
            default: 0
        }
    },
    isAvailable: {
        type: Boolean,
        require: true,
        default: false
    }
})
module.exports = mongoose.model("Clothes", ClothesSchema);