const slidedataModel = require('../models/slidedata.model')

const slidedataController = {
    getAll: (req, res) => {
        slidedataModel.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },
    create: (req, res) => {
        const newSlide = new slidedataModel({
            title: req.body.title,
            description: req.body.description,
            poster: req.body.poster,
            background: req.body.background,
        })
        newSlide.save()
            .then((data) => {
                // console.log(data)
                res.send(data)
            })
            .catch(err => {
                console.log('Error')
            })
    },
    deleteAll: (req, res) => {
        slidedataModel.deleteMany({})
            .then((data) => {
                res.send("Delete All Success")
            })
            .catch(err => {
                console.log('Error')
            })
    },
    deleteById: (req, res) => {
        slidedataModel.deleteOne({
            _id: req.params.id
        })
            .then(data => {
                res.send("Delete success")
            })
            .catch(err => { console.log(err) })
    },

}
module.exports = slidedataController