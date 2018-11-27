import Vue from 'vue'

export const majorCourses = {
    namespaced: true,
    state:{
        info:{},

        courses_types_selected_id: 0,
        courses_types:[
                {
                    id:0,
                    type:"all",
                },
                {   
                    id:1,
                    type:"基础",
                },               
                {   
                    id:2,
                    type:"必修",
                },
                {   
                    id:3,
                    type:"选修",
                },
            ],

        // 该一学年 该院系下的所有开课
        courses:[],
        // 根据选择的课程类型 展示的开课
        show_courses:[],
    },

    mutations:{
        updata_info(state,payload){
            state.info = payload;   
        },
        // courses view 中部
        update_courses_types_selected(state,payload){
            state.courses_types_selected_id = payload;
        },
        
        // courses view 右部
        update_courses(state,payload){
            state.courses = payload;
        },
        update_show_courses(state){
            let show_courses = [];
            let selected_id = state.courses_types_selected_id;

            for(let i=0; i<state.courses.length; i++){
                if(state.courses_types[selected_id].type === "all"){
                    show_courses.push(state.courses[i]);
                }else if(state.courses[i].course_type === state.courses_types[selected_id].type){
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
        set_courses(context,payload){
            let courses = [];
            let info = {};
            Vue.http.get("http://localhost:5001/api/course/major_" + String(payload)).then(
                (data)=>{
                    info.title_name = data.body.major + " major";
                    info.img_src = "/imgs/208.jpg",
                    info.discribe = "这里是" + data.body.major + "专业！！！",
                    context.commit("updata_info",info);

                    courses = data.body.courses;
                    context.commit("update_courses",courses);
                    context.commit("update_show_courses");
                    
                }
            )
        },
        set_show_courses(context){
            context.commit("update_show_courses");
        },
        set_request_info(context,payload){
            let course = context.state.courses[payload]
            if(!course.checked){
                context.commit("update_course_checked",{index:payload, info:"已经查询过了"});
            }
        },
    }
};