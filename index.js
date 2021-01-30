const express = require("express");
const { readSync } = require("fs");
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const app = express();
var port = process.env.PORT || 3030;

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Dabase
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, () => {});

//Homepage for apies
app.get('/', (req, res) => {
    res.send('Welcome to the Employees Api');
});

//Route
const employeeRoute = require("./routes/Employees")
app.use('/employee', employeeRoute);



//listening server
app.listen(port, () => {
    console.log("Listening to port", port)
});