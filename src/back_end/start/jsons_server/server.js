const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./config/db").localMongoURI;
const cookie_parser = require("cookie-parser");

const app = express();
const index = require("./routers/api/index");
const faculty = require("./routers/api/faculty");
const major = require("./routers/api/major");
const course = require("./routers/api/course");
const account = require("./routers/api/account");
const request = require("./routers/api/resquest");

mongoose.connect(db,{ useNewUrlParser: true }).then(()=>{
    console.log("Mongo connect successfully");
}).catch((err)=>{
    console.error(err);
})

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type'); 
    res.header('Access-Control-Allow-Methods', '*'); 
    // res.header('Access-Control-Allow-Credentials',  true); 
    res.header('Content-Type', 'application/json;charset=utf-8'); 
    next();
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookie_parser());

app.use("/api/index",index);
app.use("/api/faculty",faculty);
app.use("/api/major",major);
app.use("/api/course",course);
app.use("/api/account",account);
app.use("/api/request",request);

const port = process.env.PORT || 5001;
app.listen(port,()=>{
    console.log("server is running on " + String(port));
})