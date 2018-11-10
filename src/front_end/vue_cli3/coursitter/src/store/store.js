import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { home } from './modules/home'
import { sign } from './modules/sign'
import { accountSetting } from './modules/accountSetting'
import { accountCourses } from './modules/accountCourses'
import { faculty } from './modules/faculty'
import { major } from './modules/major'
import { courses } from './modules/courses'
import { majorCourses } from './modules/majorCourses'
import { singleCourseRequest } from './modules/singleCourseRequest'

export const store = new Vuex.Store({
    strict: true,
    modules:{
        home,
        sign,
        accountSetting,
        accountCourses,
        faculty,
        major,
        courses,
        majorCourses,
        singleCourseRequest,
    },

    state:{
        signed: false,
    },

    mutations:{
        update_signed(state,payload){
            state.signed = payload;
        }
    },

    actions:{

    }
});