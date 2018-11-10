import Vue from 'vue'

export const accountCourses = {
    namespaced: true,
    state:{
        courses:[],
        course_score_seen: false,
    },

    mutations:{
        update_course_score_seen(state){
            state.course_score_seen = !state.course_score_seen;
        },
        update_course_highlight(state){
            let courses = state.courses;
            for(let i=0; i<courses.length; i++){
                if(courses[i].highlight === courses[i].is_my_major){
                    courses[i].highlight = false;
                }else{
                    courses[i].highlight = courses[i].is_my_major;
                }
            }
        },
        update_courses(state,payload){
            state.courses = payload;
        }
    },

    actions:{
        set_courses(context){
            Vue.http.get("http://jsonplaceholder.typicode.com/users")
            .then((data) => {
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
                context.commit("update_courses",courses);
                // context.commit("update_courses");
            });
        },
    }
};