const express = require("express");
const router = express.Router();
const Reader = require("../../fake_json/reader");
const reader = new Reader();

const Course = require("../../models/course");
const User = require("../../models/user");

router.use("*",(req,res,next)=>{
    console.log(req.baseUrl);
    next();
})

router.post("/single_course_match",(req,res)=>{
    let token= req.body.token;
    let code = req.body.code;
    let name= req.body.name;
    let semester = ["2017-2018-3","2018-2019-1","2018-2019-2"];

    console.log(token);

    User.findOne({name: token}).then((user)=>{
        if(user){
            Course.find({code: {$in: code}, semester:{$in: semester}}).then((courses)=>{
                if(courses){
                    res.json(courses[0]);
                    res.end();
                }else{
                    res.json({msg: "没有这门课"});
                }
            });
        }else{
            res.json({msg: "用户未登陆"});
        }
    });

})

router.post("/single_course_request",(req,res)=>{
    let token= req.body.token;
    let id = req.body._id;
    User.findOne({name: token}).then((user)=>{
        if(user){
            Course.findById(id).then((course)=>{
                res.json({info:course.requirements});
            })
        }
    });
})


module.exports = router;