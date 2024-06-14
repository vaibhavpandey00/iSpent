require("dotenv").config();
const express = require("express");
const connectDB = require("./src/Connection/dbconn");
const cors = require("cors");
const mongoose = require("mongoose");
const signupRoute = require("./src/Routes/SignupRouter")
// const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get("/", (req, res) => {
    res.send("Server is Running");
})

// app.use("/user", signupRoute);