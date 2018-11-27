const express = require("express");
const router = express.Router();

const Major = require("../../models/major");

// 查看所有专业信息
// public
router.get("/",(req,res)=>{
    Major.find({}).then((majors)=>{
        let json = {faculty: "ALL",majors:[]};
        
        for(let i=0; i<majors.length; i++){
            json.majors.push({
                major_id: majors[i].id,
                major_img_src: majors[i].img_src,
                major_name: majors[i].name,
                major_discribe: majors[i].discription,
            });
        }

        res.json(json);
        res.end();
    })
})

// 查看某院系下所有专业信息
// public
router.get(/^\/[\d]+\/?$/,(req,res)=>{
    let facultyId = Number(req.path.replace("/",""));

    Major.find({faculty_id: facultyId}).then((majors)=>{
        let json = {faculty: "",majors:[]};
        if(majors.length != 0){
            json.faculty = majors[0].faculty_name;
        }
        
        for(let i=0; i<majors.length; i++){
            json.majors.push({
                major_id: majors[i].id,
                major_img_src: majors[i].img_src,
                major_name: majors[i].name,
                major_discribe: majors[i].discription,
            });
        }

        res.json(json);
        res.end();
    })
})

module.exports = router;