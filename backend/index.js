const express = require("express");
require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');


const app = express();

connectDB();

app.get('/',(req,res) => {
    res.send("welcome")
});

const PORT = process.env.PORT || 4040
app.listen(PORT,() => {
    console.log("server is running")
})