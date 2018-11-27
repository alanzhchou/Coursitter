const express = require("express");
const router = express.Router();
const Faculty = require("../../models/faculty");

// 查看所有院系信息
// public
router.get("/",(req,res)=>{
    Faculty.find({}).then((faculties)=>{
        let json = {faculties:[]};
        for(let i=0; i<faculties.length; i++){
            if(faculties[i].majors.length != 0){
                json.faculties.push({
                    faculty_id: i,
                    faculty_img_src: faculties[i].avater_url,
                    faculty_name: faculties[i].name,
                    faculty_discribe: faculties[i].discription,
                    faculty_majors_link: "/faculty/" + String(faculties[i].id),
                    faculty_courses_link: "/faculty/" + String(faculties[i].id) + "/courses"
                });
            }
        }
        res.json(json);
        res.end();
    })
})

module.exports = router;