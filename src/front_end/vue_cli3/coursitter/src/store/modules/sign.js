import Vue from 'vue'

export const sign = {
    namespaced: true,
    state:{
        sign_img_src: "/imgs/sustc.jpg",
        signin_username:"",
        signin_password:"",
        signin_remember:"",

        signup_username:"",
        signup_password:"",
        signup_repeat_password:"",
        signup_remember:"",
    },

    mutations:{
        update_sign_img_src(state, payload){
            state.sign_img_src = payload;
        },
        update_signin_username (state, payload) {
            state.signin_username = payload;
        },
        update_signin_password (state, payload) {
            state.signin_password = payload;
        },
        update_signin_remember(state, payload) {
            state.signin_remember = payload;
        },
        update_signup_username (state, payload) {
            state.signup_username = payload;
        },
        update_signup_password (state, payload) {
            state.signup_password = payload;
        },
        update_signup_repeat_password (state, payload) {
            state.signup_repeat_password = payload;
        },
        update_signup_remember(state, payload) {
            state.signup_remember = payload;
        },
    },

    actions:{
        signin_submit: (context) =>{
            Vue.http.get("https://jsonplaceholder.typicode.com/todos/1")
            .then((data) => {
                alert(context.state.signin_username + "\n" + context.state.signin_password + "\n" + context.state.signin_remember);
                let user = data.body;
                alert(JSON.stringify(user));
            });
        },

        signup_submit: (context) =>{
            Vue.http.get("https://jsonplaceholder.typicode.com/todos/1")
            .then((data) => {
                alert(context.state.signup_username + "\n" + context.state.signup_password + "\n" +
                        context.state.signup_repeat_password  + "\n" + context.state.signup_remember);
                let user = data.body;
                alert(JSON.stringify(user));
            });
        },

        set_sign_img_src(context){
            Vue.http.get("https://jsonplaceholder.typicode.com/todos/1")
            .then((data) => {
                let user = data.body;
                if(context.state.sign_img_src === "/imgs/sustc.jpg"){
                    context.commit("update_sign_img_src","/imgs/201.jpg");
                }else{
                    context.commit("update_sign_img_src","/imgs/sustc.jpg");
                }
            });
        }
    }
};