const accountModel = require('../models/account.model')
const jwt = require('jsonwebtoken')

const accountController = {
    getAll: (req, res) => {
        accountModel.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },
   
    create: (req, res) => {
        const newAccount = new accountModel({
            email: req.body.email,
            password: req.body.password
        })
        newAccount.save()
            .then((data) => {
                res.send("Add Success")
            })
            .catch(err => {
                res.status(500).send("Error Create Account. Maybe Account Is Existed! ")
            })
    },
    deleteAll: (req, res) => {
        accountModel.deleteMany({})
            .then((data) => {
                res.send("Delete All Success")
            })
            .catch(err => {
                console.log('Error')
            })
    }
}
module.exports = accountController
