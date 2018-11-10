import Vue from 'vue'

export const major = {
    namespaced: true,
    state:{
        faculty_name:"",
        majors: [],
    },

    mutations:{
        update_faculty_name(state,payload){
            state.faculty_name = payload;
        },
        update_majors(state,payload){
            state.majors = payload;
        },
    },

    actions:{
        set_all_majors(context){
            let majors = [            
                    {   
                        major_id: 0,
                        major_img_src: "/imgs/201.jpg",
                        major_name: "数学",
                        major_discribe: "xxxxx",
                    },
                    {   
                        major_id: 1,
                        major_img_src: "/imgs/202.jpg",
                        major_name: "物理",
                        major_discribe: "xxxxx",
                    },
                ];
            context.commit("update_faculty_name","All");
            context.commit("update_majors",majors);
        },

        set_single_faculty_majors(context,payload){
            let majors = [            
                    {   
                        major_id: 0,
                        major_img_src: "/imgs/201.jpg",
                        major_name: "数学",
                        major_discribe: "xxxxx",
                    },
                ];
            context.commit("update_faculty_name",String(payload) + " Faculty");
            context.commit("update_majors",majors)
        }
    },
};