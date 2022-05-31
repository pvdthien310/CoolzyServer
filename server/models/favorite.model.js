const mongoose = require('mongoose')

const FavoriteSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        trim: true
    },
    clotheid: {
        type: String,
        require: true
    },
})
module.exports = mongoose.model("Favorite", FavoriteSchema);