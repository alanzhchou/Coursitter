const express = require("express");
const router = express.Router();

const Course = require("../../models/course");
const Faculty = require("../../models/faculty");
const Major = require("../../models/major")

// 查看某院系下所有课程信息 当前年份
// public
router.get(/^\/faculty_[\d]+$/,(req,res)=>{
    let facultyId = Number(req.path.replace("/faculty_",""));

    let courses_code = [];
    Faculty.findOne({id : facultyId}).then((faculty)=>{
        for(let i=0; i< faculty.courses.length; i++){
            courses_code.push(faculty.courses[i].code);
        }

        let semester = ["2017-2018-3","2018-2019-1","2018-2019-2"];

        let faculty_name = faculty.name;
        let res_courses = [];
        Course.find({code: {$in: courses_code}, semester:{$in: semester}}).then((courses)=>{
            for(let i=0; i< courses.length; i++){
                let year = String(courses[i].semester).split("-")[1];
                res_courses.push({
                    course_id: i,
                    course_code: courses[i].code,
                    course_name: courses[i].name,
                    course_score: courses[i].credit,
                    course_year: year,
                    course_opening: "春/秋",
                    course_study_time: "大二 下",
                    course_language: "English",
                    course_faculty: courses[i].faculty,
                    course_requirements: courses[i].requirements,
                    course_type: courses[i].shu_xing, 
                    checked: false,
                    checked_info: "",
                    course_my_major: false, 
                    highlight: false
                });
            }
            res.json({faculty: faculty_name,courses: res_courses});
            res.end();
        })
    });
})


// 查看某专业下所有课程信息 当前年份
// public
router.get(/^\/major_[\d]+$/,(req,res)=>{
    let majorId = Number(req.path.replace("/major_",""));
    Major.findOne({id: majorId}).then((major)=>{
        let major_name = major.name;
        let facultyId = major.faculty_id;

        let courses_code = [];
        Faculty.findOne({id : facultyId}).then((faculty)=>{
            for(let i=0; i< faculty.courses.length; i++){
                courses_code.push(faculty.courses[i].code);
            }

            let semester = ["2017-2018-3","2018-2019-1","2018-2019-2"]

            let faculty_name = faculty.name;
            let res_courses = [];
            Course.find({code: {$in: courses_code}, semester:{$in: semester}}).then((courses)=>{
                for(let i=0; i< courses.length; i++){
                    let year = String(courses[i].semester).split("-")[1];
                    res_courses.push({
                        course_id: i,
                        course_code: courses[i].code,
                        course_name: courses[i].name,
                        course_score: courses[i].credit,
                        course_year: year,
                        course_opening: "春/秋",
                        course_study_time: "大二 下",
                        course_language: "English",
                        course_faculty: courses[i].faculty,
                        course_requirements: courses[i].requirements,
                        course_type: courses[i].shu_xing, 
                        checked: false,
                        checked_info: "",
                        course_my_major: false, 
                        highlight: false
                    });
                }
                res.json({major: major_name,courses: res_courses});
                res.end();
            })
        });
    })
})

module.exports = router;