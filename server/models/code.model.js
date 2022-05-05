const mongoose = require('mongoose')

const CodeSchema = new mongoose.Schema({
    List: {
        type: Array,
        require: true
    },
     
})
module.exports = mongoose.model("Code", CodeSchema);