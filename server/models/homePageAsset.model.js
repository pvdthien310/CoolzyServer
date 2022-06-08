const mongoose = require('mongoose')

const HomePageAsset = new mongoose.Schema({
    listSlider: {
        type: Array,
        required: true
    },
    listProduct: {
        type: Array,
        required: true
    },

    listBrand: {
        type: Array,
        required: true
    },
    listFeaturedProduct: {
        type: Array,
        required: true
    },
})

module.exports = mongoose.model("HomePageAsset", HomePageAsset);