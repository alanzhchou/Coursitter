import Vue from 'vue'

export const singleCourseRequest = {
    namespaced: true,
    state:{
        courses:[],

        added_course_code: "11",
        added_course_name: "22",
        added_course_year: "33",

        // 只简略地显示 名称 code 年份
        matched_courses: [],
        selected_course_id: "",
    },

    mutations:{
        update_added_course_code(state,payload){
            state.added_course_code = payload;
        },
        update_added_course_name(state,payload){
            state.added_course_name = payload;
        },
        update_added_course_year(state,payload){
            state.added_course_year = payload;
        },

        update_matched_courses(state,payload){
            state.matched_courses = payload;
        },
        update_selected_course_id(state,payload){
            state.selected_course_id = payload;
        },

        add_courses(state,payload){
            state.courses.push(payload);
        },
        update_course_checked(state,payload){
            let index = payload.index;
            let info = payload.info;
            state.courses[index].checked =  true;
            state.courses[index].checked_info = info;
        },
        delete_course(state,payload){
            for(let i=0; i<state.courses.length; i++){
                if(state.courses[i].course_id === payload){
                    state.courses.splice(i,1);
                }
            }
            for(let i=0; i<state.courses.length; i++){
                state.courses[i].course_id = i;
            }
        }
    },

    actions:{
        request_matched_courses(context){
            // 根据信息取得 匹配的课程
            // console.log(context.state.added_course_code);
            // console.log(context.state.added_course_name);
            // console.log(context.state.added_course_year);
            let matched_courses = [
                        {
                            course_id: 0,
                            course_code: "CS205",
                            course_name: "205 XXX",
                            course_year: 2017,
                        },
                        {
                            course_id: 1,
                            course_code: "CS305",
                            course_name: "305 XXX",
                            course_year: 2018,
                        },
                    ];
            context.commit("update_matched_courses",matched_courses);
        },
        add_course(context,payload){
            if(String(context.state.selected_course_id) != ""){
                let course = "";
                if(context.state.selected_course_id === 0){
                    course = {   
                        course_id: 0,
                        course_code: "CS205",
                        course_name: "205 Computer Network",
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
                    };
                }else{
                    course = {   
                        course_id: 0,
                        course_code: "CS305",
                        course_name: "305 Computer Network",
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
                    };
                }
                
                if(context.state.courses.length != 0){
                    let last_added_course = context.state.courses[context.state.courses.length-1];
                
                
                    if(last_added_course.course_code === course.course_code 
                        && last_added_course.course_name === course.course_name
                        && last_added_course.course_year === course.course_year){
                    }else{
                        course.course_id = context.state.courses.length;
                        context.commit("add_courses",course);
                    }
                }else{
                    course.course_id = context.state.courses.length;
                    context.commit("add_courses",course);
                }
            }
        },
        set_request_info(context,payload){
            let course = context.state.courses[payload]
            if(!course.checked){
                context.commit("update_course_checked",{index:payload, info:"已经查询过了"});
            }
        },
        delete_course(context,payload){
            context.commit("delete_course",payload);
        }
    }
};