const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const carsRouter = require("./routers/carsRouter");
const userRouter = require("./routers/userRouter");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://madina160897:madina@cluster0.tshfre4.mongodb.net/?retryWrites=true&w=majority', (err) => {
    if (err) {
        console.log("ERROR", err);
    } else {
        console.log("server started");
        app.use("/cars", carsRouter);
        app.use("/users", userRouter);
        app.listen(8080);
    }
});