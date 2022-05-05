const mongoose = require('mongoose')

const HomePageAssetsSchema = new mongoose.Schema({
    ListSlider: {
        type: Array,
        require: true
    },
    ListProduct: {
        type: Array,
        require: true
    },
    ListBrand: {
        type: Array,
        require: true
    },
})
module.exports = mongoose.model("HomePageAssets", HomePageAssetsSchema);