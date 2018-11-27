const mongoose = require('mongoose');
const db = require("../config/db").mongoURI;
const Course = require('./course');

// 连接MongoDB数据库
mongoose.connect(db,{ useNewUrlParser: true }).then(()=>{
    console.log("Mongo connect successfully");
}).catch((err)=>{
    console.error(err);
})

// 连接成功之后，查询
Course.findOne({name:"复变函数"}).then((course)=>{ 
    if(course) {
        console.log(course);
    }else{
        console.log("error");
    }
    mongoose.disconnect();
})