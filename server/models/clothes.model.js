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
    category: {
        type: String,
        require: true
    },
    size: {
        type: Array,

        name: {
            type: String,
            require: true
        },

        quantity: {
            type: Number,
            require: true,
            default: 0
        }
    }
})
module.exports = mongoose.model("Clothes", ClothesSchema);