import Vue from 'vue'

export const home = {
    namespaced: true,
    state:{
        news_img: "/imgs/sustc.jpg",
        carousel_items:[]
    },

    mutations:{
        update_carousel_items: (state,payload) => {
            state.carousel_items = payload;
        },
    },

    actions:{
        // 异步请求幻灯片数据
        set_carousel_items(context){
            Vue.http.get("http://jsonplaceholder.typicode.com/users")
            .then((data) => {
                let carousel_items = []
    
                for(let i=0; i<data.body.length; i++){
                    carousel_items.push({   
                                    index: i,
                                    img_src: "/imgs/" + String(i) + ".jpg", 
                                    title: data.body[i].name, 
                                    discribe: data.body[i].email
                                });
                }
                context.commit("update_carousel_items",carousel_items);
            });
        }
    }
};