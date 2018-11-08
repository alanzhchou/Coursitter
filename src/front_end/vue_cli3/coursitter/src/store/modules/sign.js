import Vue from 'vue'

export const sign = {
    namespaced: true,
    state:{
        sign_img: "/imgs/sustc.jpg",
        signin_username:"",
        signin_password:"",
        signin_remember:"",

        signup_username:"",
        signup_password:"",
        signup_repeat_password:"",
        signup_remember:"",
    },

    mutations:{
        updateSigninUsername (state, payload) {
            state.signin_username = payload;
        },
        updateSigninPassword (state, payload) {
            state.signin_password = payload;
        },
        updateSigninRemember(state, payload) {
            state.signin_remember = payload;
        },
        updateSignupUsername (state, payload) {
            state.signup_username = payload;
        },
        updateSignupPassword (state, payload) {
            state.signup_password = payload;
        },
        updateSignupRepeatPassword (state, payload) {
            state.signup_repeat_password = payload;
        },
        updateSignupRemember(state, payload) {
            state.signup_remember = payload;
        },
    },

    actions:{
        signInSubmit: (context) =>{
            Vue.http.get("https://jsonplaceholder.typicode.com/todos/1")
            .then((data) => {
                alert(context.state.signin_username + "\n" + context.state.signin_password + "\n" + context.state.signin_remember);
                let user = data.body;
                alert(JSON.stringify(user));
            });
        },

        signUpSubmit: (context) =>{
            Vue.http.get("https://jsonplaceholder.typicode.com/todos/1")
            .then((data) => {
                alert(context.state.signup_username + "\n" + context.state.signup_password + "\n" +
                        context.state.signup_repeat_password  + "\n" + context.state.signup_remember);
                let user = data.body;
                alert(JSON.stringify(user));
            });
        },
    }
};