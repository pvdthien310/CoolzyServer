const accountModel = require('../models/account.model')
const jwt = require('jsonwebtoken')

const authenticationController = {
    login: (req, res) => {
        accountModel.findOne({ email: req.body.email, password: req.body.password })
            .then(data => {
                const accessToken = jwt.sign({ email: req.body.email, password: req.body.password }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
                const refreshToken = jwt.sign({ email: req.body.email, password: req.body.password }, process.env.REFRESH_TOKEN_SECRET);
                res.json({ accessToken, refreshToken });

                //// Update refreshTokens into database
                // console.log(refreshToken)
                // JWTRefTokens.findByIdAndUpdate('6220d47b4f634bc99c65b32a',
                //     { "$push": { "refreshTokens": refreshToken } },
                //     { "new": true, "upsert": true }
                // ).then((data) => {
                //     res.status(200) 
                //     res.json({ accessToken, refreshToken });

                // })
                //     .catch(err => console.log(err))
            })
            .catch(err => {
                res.status(500).json({ Err: err })
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
                        process.env.ACCESS_TOKEN_SECRET,
                        { expiresIn: '30s' }
                    );
                    res.json({ accessToken });
                })
    }

}

module.exports = authenticationController