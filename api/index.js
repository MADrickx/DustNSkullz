const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const cartRoute = require('./routes/cart');
const stripeRoute = require('./routes/stripe');
const https = require('https');
const fs = require('fs');
const path = require("path");
const referrerPolicy = require('referrer-policy')
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
    )
    .then(()=> console.log("Connexion succesfull"))
    .catch((err)=>console.log(err)
);

app.use(express.json({ limit: '200mb' }));

app.use(referrerPolicy())

app.use(cors({
    origin: "*",
}));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

const port = process.env.PORT || 5000;

const options = {
    key: fs.readFileSync("../cert/server.key"),
    cert: fs.readFileSync("../cert/server.crt"),
};

https.createServer(options, app).listen(port);