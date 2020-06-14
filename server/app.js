const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const customerRouter = require('./routers/prospect-api')

mongoose.Promise = global.Promise;

const url = "mongodb://localhost/customers";

const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const dbConnection = mongoose.connection;

dbConnection.on("open",()=>{
    console.log('connected');
});

//MiddelWare for front-end connectivity
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors('origin','localhost:4200'));

//for all api
app.use('/customers',customerRouter);


app.listen(7000,()=>{
    console.log('running...')
})
