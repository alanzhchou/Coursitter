const express = require("express");
const router = express.Router();
const gravatar = require('gravatar');

const User = require("../../models/user");

router.use("/course",(req,res,next)=>{
    let token = req.body.token;
    console.log(token);
    User.findOne({name: token}).then((user)=>{
        if(user){
            next();
        }else{
            res.location("http://localhost:8080/signin");
            res.end();
        }
    });
});

// 注册 name password
// public
router.post("/signup",(req,res)=>{
    let newName = req.body.name;
    User.findOne({name: newName}).then((user)=>{
        if(user){
            res.json({msg : "已经被注册"})
        }else{
            const avatar_url = gravatar.url("alanzchou@163.com", {s: '200', r: 'pg', d: 'mm'});
            let newUser = new User({
                name : newName,
                password : req.body.password,
                avatar_src: avatar_url,
                nickname: newName,
                email: "example@gmail.com",
                sex: "男",
                major: "通识教学",
                introduction: newName,
                cas_account: "",
                cas_password: "",
                courses: [],
            });

            newUser.save().then((user)=>{
                res.json(user);
            }).catch(err=>console.log(err))
        }
    })
})

// 登陆 name password
// public
router.post("/signin",(req,res)=>{
    let token = req.body.token;
    if(token){
        User.findOne({name : token}).then((user)=>{
            if(user){
                res.json(user);
            }else{
                res.json({msg : "用户不存在"});
            }
        })
    }else{
        let name = req.body.name;
        let password = req.body.password;

        User.findOne({name : name}).then((user)=>{
            if(user){
                if(password === user.password){
                    res.json(user);
                }else{
                    res.json({msg : "密码错误"});
                }
            }else{
                res.json({msg : "用户不存在"});
            }
        })
    }
})

// 获取账号课程 localStorage 中的token
// private
router.post("/course",(req,res)=>{
    let courses = [
        {   
            course_id: 1,
            course_name: "Computer Network",
            course_code: "CS203",
            course_score: "A",
            course_study_year: "大二 下",
            is_my_major: false,
            highlight: false,
        },
        { 
            course_id: 2,
            course_name: "Computer Network",
            course_code: "CS203",
            course_score: "B",
            course_study_year: "大二 下",
            is_my_major: true, 
            highlight: false,
        },
    ];
    res.json({courses: courses});
})

module.exports = router;