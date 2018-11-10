import Vue from 'vue'

export const faculty = {
    namespaced: true,
    state:{
        faculties:[],
    },

    mutations:{
        update_faculties(state,payload){
            state.faculties = payload;
        }
    },

    actions:{
        set_faculties(context){
            let faculties = [            
                {   
                    faculty_id: 0,
                    faculty_img_src: "/imgs/201.jpg",
                    faculty_name: "数学",
                    faculty_discribe: "xxxxx",
                    faculty_majors_link: "/faculty/0",
                    faculty_courses_link: "/faculty/0/courses"
                },
                {   
                    faculty_id: 1,
                    faculty_img_src: "/imgs/202.jpg",
                    faculty_name: "物理",
                    faculty_discribe: "xxxxx",
                    faculty_majors_link: "/faculty/1",
                    faculty_courses_link: "/faculty/1/courses"
                },
            ];
            context.commit("update_faculties",faculties)
        }
    }
};