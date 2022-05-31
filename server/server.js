const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var cors = require('cors')
const bodyParser = require('body-parser')

const ClothesRoute = require('./routes/clothes.routes');
const AccountRoute = require('./routes/account.routes')
const OrderRoute = require('./routes/order.routes')
const CodeRoute = require('./routes/code.routes')
const HomePageAssetRoute = require('./routes/homePageAsset.routes')
const AuthenticationRoute = require('./routes/authentication.routes')
const EmailRoute = require('./routes/email.routes')
const CategoryRoute = require('./routes/category.routes');
const cloudinaryRoute = require('./routes/cloudinary.routes');
const FavoriteRoute = require('./routes/favorite.routes')


/// Process file json and env
app.use(cors())
app.use(bodyParser.json())
dotenv.config();

app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

/// Connect MongoDB
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected !")
})
mongoose.connection.on("error", () => {
    console.log("Connect MongoDB Failed !")
})

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

app.use("/api/clothes", ClothesRoute)
app.use("/api/account", AccountRoute)
app.use("/api/authentication", AuthenticationRoute)
app.use("/api/order", OrderRoute)
app.use("/api/code", CodeRoute)
app.use("/api/homePageAsset", HomePageAssetRoute)
app.use('/api/sendMail', EmailRoute)
app.use("/api/category", CategoryRoute)
app.use("/api/cloudinary", cloudinaryRoute)
app.use("/api/favorite", FavoriteRoute)


const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log('Backends server is running!')
});