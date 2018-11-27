import Vue from 'vue'

export const home = {
    namespaced: true,
    state:{
        news_img: "",
        carousel_items:[]
    },

    mutations:{
        updata_news_img: (state,payload) =>{
            state.news_img = payload;
        },
        update_carousel_items: (state,payload) => {
            state.carousel_items = payload;
        },
    },

    actions:{
        // 异步请求首页数据
        set_carousel_items(context){
            if(context.state.news_img === "" && context.state.carousel_items.length === 0){
                Vue.http.get("http://localhost:5001/api/index/")
                .then((data) => {
                    let body = data.body; 
                    context.commit("update_carousel_items",body.carousel_items);
                    context.commit("updata_news_img",body.news_img);
                });
            }
        }
    }
};