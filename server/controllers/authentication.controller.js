const accountModel = require('../models/account.model')
const JWTModel = require('../models/jwt.model')
const jwt = require('jsonwebtoken')
const { encode } = require('base-64');

const authenticationController = {
    login: (req, res) => {
        // accountModel.findOne({ email: req.body.email, password: req.body.password })
        //     .then(data => {
        //         const accessToken = jwt.sign({ email: req.body.email, password: req.body.password }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
        //         const refreshToken = jwt.sign({ email: req.body.email, password: req.body.password }, process.env.REFRESH_TOKEN_SECRET);
        //         res.json({ accessToken, refreshToken });

        //         //// Update refreshTokens into database
        //         // console.log(refreshToken)
        //         // JWTRefTokens.findByIdAndUpdate('6220d47b4f634bc99c65b32a',
        //         //     { "$push": { "refreshTokens": refreshToken } },
        //         //     { "new": true, "upsert": true }
        //         // ).then((data) => {
        //         //     res.status(200) 
        //         //     res.json({ accessToken, refreshToken });

        //         // })
        //         //     .catch(err => console.log(err))
        //     })
        //     .catch(err => {
        //         res.status(500).json({ Err: err })
        //     })


        const email = req.body.email
        const password = encode(req.body.password)

        accountModel.findOne({
                email: email
            })
            .then(data => {
                if (data) {
                    if (data.password == password) {
                        const payload = {
                            email: email
                        }

                        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' })
                        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET)

                        // res.cookie('access_token', accessToken, {
                        //     maxAge: 60 * 1000,
                        //     httpOnly: true,
                        //     //secure: true
                        // })
                        // res.cookie('refresh_token', refreshToken, {
                        //     maxAge: 365 * 24 * 60 * 60 * 1000,
                        //     httpOnly: true,
                        //     //secure: true
                        // })

                        const _JWTRefTokens = new JWTModel({
                            refreshToken: refreshToken
                        })

                        JWTModel.create(_JWTRefTokens)
                            .then(data => {
                                res.send({ accessToken, refreshToken });
                                return
                            })
                            .catch(err => {
                                res.status(500).json({ Err_token: err })
                            })

                    } else {
                        res.json("Password incorrect")
                        return
                    }
                } else {
                    res.json("Email not exist")
                    return
                }

            })
            .catch(err => {
                res.status(500).json({ Err_email: err })
            })
    },
    refreshToken: (req, res) => {
        const refreshToken = req.body.token;
        if (!refreshToken) {
            res.sendStatus(401);
            return;
        }
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
            if (err) {
                res.sendStatus(401);
                return;
            }
            console.log('refreshtoken')
            const accessToken = jwt.sign({ username: data.username },
                process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' }
            );
            res.json({ accessToken });
        })
    }

}

module.exports = authenticationController