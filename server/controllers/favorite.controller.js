const favoriteModel = require('../models/favorite.model')

const favoriteController = {
    getAll: (req, res) => {
        favoriteModel.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },
    create: (req, res) => {
        const newFav = new favoriteModel({
            email: req.body.email,
            clotheid: req.body.clotheID
        })
        newFav.save()
            .then((data) => {
                // console.log(data)
                res.send("Add Success")
            })
            .catch(err => {
                console.log('Error')
            })
    },
    deleteAll: (req, res) => {
        favoriteModel.deleteMany({})
            .then((data) => {
                res.send("Delete All Success")
            })
            .catch(err => {
                console.log('Error')
            })
    },
    deleteById: (req, res) => {
        favoriteModel.deleteOne({
            _id: req.params.id
        })
            .then(data => {
                res.send("Delete success")
            })
            .catch(err => { console.log(err) })
    },

    favoriteExisted: (req, res) => {
        let flag = false
        favoriteModel.find({})
            .then(data => {
                data.forEach(element => {
                    let result = element.items.find(e => e._itemid == req.body.clotheid)
                    if (result) flag = true
                })
                res.send(flag)
            }).catch(err => console.log(err))
    }

}
module.exports = favoriteController