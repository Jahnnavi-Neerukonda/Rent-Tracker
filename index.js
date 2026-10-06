const express = require("express");
const mongoose = require("mongoose");
const connectDB=require("./config/db");
const rentsRoutes=require("./routers/rents");
const errorHandler=require("./middlewares/errorhandler");
const dotenv =require("dotenv");
require("dotenv").config();
const PORT=process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use("/rents", rentsRoutes)

app.use((req, res) => {
    res.status(404).json({
        message: "Page not found"
    })
})

app.use(errorHandler);

app.listen(PORT, () => {
    connectDB();
    console.log("server listening on " + PORT);
})