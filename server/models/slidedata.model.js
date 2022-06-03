const mongoose = require('mongoose')

const SlideDataSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    background: {
        type: String,
        require: true,
    },
    poster: {
        type: String,
        require: true,
    },

})
module.exports = mongoose.model("SlideData", SlideDataSchema);