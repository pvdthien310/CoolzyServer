const accountModel = require('../models/account.model')
const jwt = require('jsonwebtoken')
const { encode } = require('base-64');
const mFunction = require('../function')

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
        accountModel.findOne({
                email: req.body.email
            })
            .then(data => {
                if (data) {

                    res.status(500).send('Email already exists')
                    return
                    // } else if (!mFunction.validatePhoneNumber(req.body.phoneNumber)) {
                    //     res.send('Contact consist of numeric and 10 characters')
                    //     return
                } else if (!mFunction.validatePassword(req.body.password)) {

                    res.send('Password has more than 6 charactor')
                    return
                } else {
                    const newAccount = {
                        email: req.body.email,
                        password: encode(req.body.password),
                        name: req.body.name,
                        phoneNumber: req.body.phoneNumber,
                        address: req.body.address,
                        gender: req.body.gender,
                        birthday: req.body.birthday,
                        role: req.body.role,
                        enable: true,
                        listCarts: req.body.listCarts
                    }

                    return accountModel.create(newAccount)
                }
            })
            .then(data => {
                res.send("Successful")
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },
    getByEmail: (req, res) => {
        accountModel.findOne({
                email: req.params.email
            })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },
    getById: (req, res) => {
        accountModel.findById(req.params.id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
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
    },
    checkEmail: (req, res) => {
        accountModel.findOne({ email: req.params.email })
            .then(data => {
                if (data) {
                    res.send('Email already exists')
                } else {
                    res.status(200).send('EmailOK')
                }
            })
            .catch(err => console.log(err))
    },
    update: (req, res) => {
        accountModel.findOneAndUpdate({ _id: req.params.id }, req.body, { "new": true, "upsert": true })
            .then((data) => {
                res.send(data)
            }).catch(err => {
                console.log(err)
            })
    },
    deleteAccount: (req, res) => {
        accountModel.findOneAndDelete({ _id: req.params.id })
            .then((data) => {
                if (data)
                    res.send(data)
                else res.status(404).send("Delete failed")
            }).catch(err => {
                console.log(err)
            })
    },

    getAllStaff: (req, res) => {
        accountModel.find({ role: "Staff" })
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                console.log(err)
            })

    },

    getById: (req, res) => {
        accountModel.findOne({
                _id: req.params.id
            })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },

    updatePassword: (req, res) => {
        accountModel.updateOne({ email: req.body.email }, {
                password: encode(req.body.password),
            }, { new: 'true' })
            .then(data => {
                res.json("Update successful")
            })
            .catch(err => {
                res.status(500).json({ Err: err })
            })
    },
}
module.exports = accountController