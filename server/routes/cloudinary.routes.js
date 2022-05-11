module.exports = app => {
    const cloundinary = require("../controllers/cloudinary.controller");
    var router = require("express").Router();
    // Upload images
    router.post("/", cloundinary.uploadImages);
    app.use('/api/cloudinary', router);
};

