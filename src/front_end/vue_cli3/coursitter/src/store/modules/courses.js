import Vue from 'vue'

export const courses = {
    namespaced: true,
    state:{
        info:{
            title_name: "CS faculty",
            img_src: "/imgs/203.jpg",
            discribe: "这里是 院系 测试！！！",
        },

        courses_types_selected_id: 0,
        courses_types:[],
        
        study_year: 2018,

        // 该一学年 该院系下的所有开课
        courses:[],

        // 根据选择的课程类型 展示的开课
        show_courses:[],
    },

    mutations:{
        // courses view 中部
        update_courses_types(state,payload){
            state.courses_types = payload;
        },
        update_courses_types_selected(state,payload){
            state.courses_types_selected_id = payload;
        },
        update_study_year(state,payload){
            state.study_year = payload;
        },
        
        // courses view 右部
        update_courses(state,payload){
            state.courses = payload;
        },
        update_show_courses(state){
            let show_courses = [];
            let selected_id = state.courses_types_selected_id;
            let pattern = state.courses_types[selected_id].type_pattern;

            for(let i=0; i<state.courses.length; i++){
                if(pattern.test(state.courses[i].course_code)){
                    show_courses.push(state.courses[i]);
                }
            }
            state.show_courses = show_courses;
        },
        update_course_checked(state,payload){
            let index = payload.index;
            let info = payload.info;
            state.courses[index].checked =  true;
            state.courses[index].checked_info = info;
        }
    },

    actions:{
        set_faculty_courses_types(context){
            let courses_type = [
                    {
                        id:0,
                        type:"all",
                        type_pattern: /^.*$/,
                    },
                    {   
                        id:1,
                        type:"1xx",
                        type_pattern: /^\w{2,5}1\d\d$/,
                    },               
                    {   
                        id:2,
                        type:"2xx",
                        type_pattern: /^\w{2,5}2\d\d$/,
                    },
                    {   
                        id:3,
                        type:"3xx",
                        type_pattern: /^\w{2,5}3\d\d$/,
                    },
                    {   
                        id:4,
                        type:"4xx",
                        type_pattern: /^\w{2,5}4\d\d$/,
                    }
                ];
            context.commit("update_courses_types",courses_type)
        },
        set_study_year_courses(context){
            let year_pattern = /^20[0-9][0-9]$/;
            if(year_pattern.test(String(context.state.study_year))){
                let courses = [];
                if(context.state.study_year == 2018){
                    courses = [     
                        {   
                            course_id: 0,
                            course_code: "CS103",
                            course_name: "Computer Network",
                            course_score: 2,
                            course_year: 2018,
                            course_opening: "春/秋",
                            course_study_time: "大二 下",
                            course_language: "English",
                            course_faculty: "计算机系/CS",
                            course_requirements: "无",
                            checked: false,
                            checked_info: "",
                            course_my_major: false, 
                            highlight: false,
                        },      
                        {   
                            course_id: 1,
                            course_code: "CS203",
                            course_name: "Computer Network",
                            course_score: 2,
                            course_year: 2018,                            
                            course_opening: "春/秋",
                            course_study_time: "大二 下",
                            course_language: "English",
                            course_faculty: "计算机系/CS",
                            course_requirements: "无",
                            checked: false,
                            checked_info: "",
                            course_my_major: false, 
                            highlight: false,
                        },
                    ];
                }else{
                    courses = [    
                        {   
                            course_id: 0,
                            course_code: "CS303",
                            course_name: "Computer Network 017 xxxxxx",
                            course_score: 2,
                            course_year: 2017,
                            course_opening: "春/秋",
                            course_study_time: "大二 下",
                            course_language: "English",
                            course_faculty: "计算机系/CS",
                            course_requirements: "无",
                            checked: false,
                            checked_info: "",
                            course_my_major: false, 
                            highlight: false,
                        },        
                        {   
                            course_id: 1,
                            course_code: "CS403",
                            course_name: "2017 xxxxxx",
                            course_score: 2,
                            course_year: 2017,
                            course_opening: "春/秋",
                            course_study_time: "大二 下",
                            course_language: "English",
                            course_faculty: "计算机系/CS",
                            course_requirements: "无",
                            checked: false,
                            checked_info: "",
                            course_my_major: false, 
                            highlight: false,
                        },
                    ];
                }
                context.commit("update_courses",courses);
                context.commit("update_show_courses");
            }else{
                alert("非合法学年格式");
            }
        },
        set_show_courses(context){
            context.commit("update_show_courses");
        },
        set_request_info(context,payload){
            let course = context.state.courses[payload]
            if(!course.checked){
                console.log(course.course_code);
                context.commit("update_course_checked",{index:payload, info:"已经查询过了"});
            }
        },
    }
};