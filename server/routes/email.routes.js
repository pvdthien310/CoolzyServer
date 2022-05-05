const express = require('express')
var router = express.Router()
var nodemailer = require('nodemailer');

router.post('/verify', (req, res) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'coolzyproject@gmail.com',
            pass: 'coolzyproject@1'
        }
    });

    var mailOptions = {
        from: 'coolzyproject@gmail.com',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send(error);
        } else {
            res.send(info.response);
        }
    });
});

module.exports = router