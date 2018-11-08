import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { home } from './modules/home'
import { sign } from './modules/sign'
import { accountSetting } from './modules/accountSetting'
import { accountCourses } from './modules/accountCourses'

export const store = new Vuex.Store({
    strict: true,
    modules:{
        home,
        sign,
        accountSetting,
        accountCourses,
    }
});