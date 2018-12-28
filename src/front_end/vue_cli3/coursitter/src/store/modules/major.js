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
            Vue.http.get("http://localhost:5001/api/major").then((data)=>{
                let majors = data.body.majors;
                context.commit("update_faculty_name","ALL");
                context.commit("update_majors",majors);
            })
        },

        set_single_faculty_majors(context,payload){
            Vue.http.get("http://localhost:5001/api/major/" + String(payload))
            .then((data)=>{
                let faculty_name = data.body.faculty;
                let majors = data.body.majors;
                context.commit("update_faculty_name", faculty_name + " Faculty");
                context.commit("update_majors",majors)
            })
        }
    },
};