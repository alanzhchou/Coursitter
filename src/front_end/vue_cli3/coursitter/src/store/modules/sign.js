import Vue from 'vue'

export const sign = {
    namespaced: true,
    state:{
        sign_img_src: "/imgs/sustc.jpg",

        sign_in : {
            username:"alan7",
            password:"abcde",
        },

        sign_up : {
            username:"",
            password:"",
            repeat_password:"",
        },

        sign_info : {
            left : {
                avatar_src: "",
                major: "",
            },

            basic : {
                username: "",
                nickname: "",
                email: "",
                sex: "",
                introuction: "",
            },

            password : {
                origin_password: "",
                new_password: "",
                repeat_password: "",
                cas_account: "",
                cas_password: "",
            }
        },

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
        checkLocal: (context)=>{
            if(window.localStorage.getItem("token")){

            }
        },

        signin_submit: (context,router) =>{
            if(context.state.signin_username != "" && context.state.signin_password != ""){
                Vue.http.post("http://localhost:5001/api/account/signin",
                {
                    name : context.state.sign_in.username,
                    password : context.state.sign_in.password,
                },{emulateJSON: true}).then((data) => {
                    context.state.sign_info.left = {
                        avatar_src: data.body.avatar_src,    major: data.body.major,},
                    context.state.sign_info.basic = {
                        username: data.body.name,   nickname: data.body.nickname,   email: data.body.email,
                        sex: data.body.sex,  introuction: data.body.introduction,
                    },
                    context.state.sign_info.password = {
                        origin_password: "",    new_password: "",   repeat_password: "",
                        cas_account: data.body.cas_account,    cas_password: data.body.cas_password,
                    }
                    window.localStorage.setItem("token",data.body.name);
                    router.push("/")
                });
            }else{
                alert("请输入");
            }
        },

        signup_submit: (context,router) =>{
            if(context.state.signup_username != "" && context.state.signup_password != ""){
                if(context.state.signup_password === context.state.signup_repeat_password){
                    Vue.http.post("http://localhost:5001/api/account/signup",
                    {
                        name : context.state.signup_username,
                        password : context.state.signup_password,
                    },{emulateJSON: true}).then((data) => {
                        context.state.signin_username = data.body.name;
                        context.state.signin_password = data.body.password;
                        router.push("/signin")
                    });
                }else{
                    alert("重复密码错误");
                }
            }else{
                alert("请输入");
            }
        },

        logout:(context,router)=>{
            window.localStorage.removeItem("token");
            context.state.sign_info.left.avatar_src = "";
        },

        set_courses(context){
            Vue.http.post("http://localhost:5001/api/account/course",{
                user: window.localStorage.getItem("token")
            },{emulateJSON: true})
            .then((data) => {
                context.commit("update_courses",data.body.courses);
            });
        },
    }
};