import Vue from 'vue'

export const sign = {
    namespaced: true,
    state:{
        sign_img_src: "/imgs/sustc.jpg",

        sign_in : {
            username:"",
            password:"",
        },

        sign_up : {
            username:"",
            password:"",
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
        pre_sign_in_submit: (context,router)=>{
            if(localStorage.getItem("token")){
                if(context.state.sign_info.left.avatar_src){

                }else{
                    Vue.http.post("http://localhost:5001/api/account/signin",
                    {
                        token : localStorage.getItem("token"),
                    },{emulateJSON: true}).then((data) => {
                        if(data.body.msg === "用户不存在"){
                            console.log("用户不存在");
                        }else{
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
                        }
                    });
                }
            }
        },

        signin_submit: (context,router) =>{
             if(context.state.sign_in.username != "" && context.state.sign_in.password != ""){
                Vue.http.post("http://localhost:5001/api/account/signin",
                {
                    name : context.state.sign_in.username,
                    password : context.state.sign_in.password,
                },{emulateJSON: true}).then((data) => {
                    if(data.body.msg === "密码错误"){
                        alert("密码错误");
                    }else if(data.body.msg === "用户不存在"){
                        alert("用户不存在");
                    }else{
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
                        router.push("/");
                    }
                });
            }else{
                alert("请输入");
            }
        },

        signup_submit: (context,router) =>{
            if(context.state.sign_up.username != "" && context.state.sign_up.password != ""){
                Vue.http.post("http://localhost:5001/api/account/signup",
                {
                    name : context.state.sign_up.username,
                    password : context.state.sign_up.password,
                },{emulateJSON: true}).then((data) => {
                    if(data.body.msg !== "已经被注册"){
                        context.state.signin_username = data.body.name;
                        context.state.signin_password = data.body.password;
                        window.localStorage.setItem("token",data.body.name);
                        router.push("/signin")
                    }else{
                        alert("格式不正确 或 已经被注册");
                    }
                });
            }
        },

        logout:(context,router)=>{
            window.localStorage.removeItem("token");
            context.state.sign_info.left.avatar_src = "";
        },

        set_courses(context){
            Vue.http.post("http://localhost:5001/api/account/course",{
                user: window.localStorage.getItem("token"),
                token: window.localStorage.getItem("token"),
            },{emulateJSON: true})
            .then((data) => {
                context.state.courses = data.body.courses;
                // context.commit("update_courses",data.body.courses);
            });
        },
    }
};