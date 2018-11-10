import Vue from 'vue'

export const accountSetting = {
    namespaced: true,
    state:{
        left_changed: false,
        setting_left_avatar_src: "/imgs/101.jpg",
        setting_left_major: "计算机",
        setting_left_save_icon_src: "/imgs/102.jpg",

        right_basic_changed: false,
        setting_right_basic_username: "default_username",
        setting_right_basic_nickname: "default_nickname",
        setting_right_basic_email: "123@qq.com",
        setting_right_basic_sex: "男",
        setting_right_basic_introuction: "default_introuction",

        right_password_changed: false,
        setting_right_password_origin_password: "",
        setting_right_password_new_password: "",
        setting_right_password_repeat_password: "",
        setting_right_password_cas_account: "11510629",
        setting_right_password_cas_password: "",
    },

    mutations:{
        // left info
        update_setting_left_left_changed(state,payload){
            state.left_changed = payload;
        },
        update_setting_left_avatar_src(state,payload){
            state.setting_left_avatar_src = payload;
        },
        update_setting_left_major(state,payload){
            state.setting_left_major = payload;
        },
        
        // right basic
        update_setting_right_basic_changed(state,payload){
            state.right_basic_changed = payload;
        },
        update_setting_right_basic_nickname(state,payload){
            state.setting_right_basic_nickname = payload;
        },
        update_setting_right_basic_email(state,payload){
            state.setting_right_basic_email = payload;
        },
        update_setting_right_basic_sex(state,payload){
            state.setting_right_basic_sex = payload;
        },
        update_setting_right_basic_introuction(state,payload){
            state.setting_right_basic_introuction = payload;
        },

        // right password
        update_setting_right_password_changed(state,payload){
            state.right_password_changed = payload;
        },
        update_setting_right_password_origin_password(state,payload){
            state.setting_right_password_origin_password = payload;
        },
        update_setting_right_password_new_password(state,payload){
            state.setting_right_password_new_password = payload;
        },
        update_setting_right_password_repeat_password(state,payload){
            state.setting_right_password_repeat_password = payload;
        },
        update_setting_right_password_cas_account(state,payload){
            state.setting_right_password_cas_account = payload;
        },
        update_setting_right_password_cas_password(state,payload){
            state.setting_right_password_cas_password = payload;
        },
    },

    actions:{
        setting_left_submit(context){
            Vue.http.get("http://jsonplaceholder.typicode.com/users").then((data) => {
                let carousel_items = []
    
                for(let i=0; i<data.body.length; i++){
                    carousel_items.push({   
                                    index: i,
                                    img_src: "/imgs/" + String(i) + ".jpg", 
                                    title: data.body[i].name, 
                                    discribe: data.body[i].email
                                });
                }
            })
            console.log(context.state.setting_left_avatar_src 
                + "\n" + context.state.setting_left_major
            );
        },
        setting_right_basic_submit(context){
            Vue.http.get("http://jsonplaceholder.typicode.com/users").then((data) => {
                let carousel_items = []
    
                for(let i=0; i<data.body.length; i++){
                    carousel_items.push({   
                                    index: i,
                                    img_src: "/imgs/" + String(i) + ".jpg", 
                                    title: data.body[i].name, 
                                    discribe: data.body[i].email
                                });
                }
            })
            console.log(context.state.setting_right_basic_username + "\n" 
                        + context.state.setting_right_basic_nickname + "\n"
                        + context.state.setting_right_basic_email + "\n"
                        + context.state.setting_right_basic_sex + "\n"
                        + context.state.setting_right_basic_introuction
                    );
        },
        setting_right_password_submit(context){
            Vue.http.get("http://jsonplaceholder.typicode.com/users").then((data) => {
                let carousel_items = []
    
                for(let i=0; i<data.body.length; i++){
                    carousel_items.push({   
                                    index: i,
                                    img_src: "/imgs/" + String(i) + ".jpg", 
                                    title: data.body[i].name, 
                                    discribe: data.body[i].email
                                });
                }
            })
            console.log(context.state.setting_right_password_origin_password + "\n" 
                        + context.state.setting_right_password_new_password + "\n"
                        + context.state.setting_right_password_repeat_password + "\n"
                        + context.state.setting_right_password_cas_account + "\n"
                        + context.state.setting_right_password_cas_password
                    );
        },
    },
};