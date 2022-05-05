const codeModel = require('../models/code.model')

const codeController = {
    getAll: (req, res) => {
        codeModel.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },
    create: (req, res) => {
        const newcode = new codeModel({
            List: req.body.items,
        })
        newcode.save()
            .then((data) => {
                // console.log(data)
                res.send("Add Success")
            })
            .catch(err => {
                console.log('Error')
            })
    },
    getById: (req, res) => {
        codeModel.findById(req.params.id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },

}
module.exports = codeController