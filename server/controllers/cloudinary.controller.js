const { cloudinary } = require('../config/cloudinary.config')

exports.uploadImages = (req, res, next) => {
    try {
        const listImages = req.body.data
        const result = []
        listImages.map(async (item) => {
            const uploadedResponse = await cloudinary.uploader.upload(item, {
                upload_preset: 'adminloader'
            }).catch(err => {
                console.log(err)
                res.status(500).send('Load images failed!')
            })
            if (uploadedResponse)
                result.push(uploadedResponse.url)
            else {
                console.log(err)
                res.status(400).send('Load images failed!')
            }
            if (result.length == listImages.length) res.status(200).send(result)
        })
    }
    catch (error) {
        res.status(500).send('Failed!')
    }
};