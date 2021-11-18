const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const cartRoute = require('./routes/cart');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const path = require("path");
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
    )
    .then(()=> console.log("Connexion succesfull"))
    .catch((err)=>console.log(err)
);

app.use(express.json());
app.use(cors({
    origin:'*'
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