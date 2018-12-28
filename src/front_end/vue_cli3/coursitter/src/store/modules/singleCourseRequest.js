import Vue from 'vue'

export const singleCourseRequest = {
    namespaced: true,
    state:{
        courses:[],

        added_course:{
            code: "CS305",
            name: "", 
        },


        temp_course:{},
    },

    mutations:{
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
            Vue.http.post("http://localhost:5001/api/request/single_course_match",
                {   
                    token: localStorage.getItem("token"),
                    code : context.state.added_course.code,
                    name: context.state.added_course.name,
                },{emulateJSON: true}).then((data)=>{
                    let course = data.body;
                    if(course.name){
                        course.checked = false;
                        course.checked_info = "";
                        context.state.temp_course = course;
                        context.state.courses.push(course);
                    }else{
                        context.state.temp_course = {};
                    }
                }
            )
        },
        set_request_info(context,payload){
            Vue.http.post("http://localhost:5001/api/request/single_course_request",
                {   
                    token: localStorage.getItem("token"),
                    _id: payload,
                },{emulateJSON: true}).then((data)=>{
                    let info = data.body.info;
                    let course = "";
                    if(info){
                        for(let i=0; i<context.state.courses.length; i++){
                            if(context.state.courses[i]._id === payload){
                                course = context.state.courses[i];
                                if(!course.checked){
                                    course.checked = true;
                                    course.checked_info = info;
                                }
                            }
                        }
                    }
                }
            )
        },
        delete_course(context,payload){
            context.commit("delete_course",payload);
        }
    }
};