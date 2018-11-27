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
            if(context.state.faculties.length === 0){
                Vue.http.get("http://localhost:5001/api/faculty")
                .then((data) => {
                    let faculties = data.body.faculties;
                    context.commit("update_faculties",faculties)
                });
            }
        }
    }
};