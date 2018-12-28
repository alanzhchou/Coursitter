import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { home } from './modules/home'
import { sign } from './modules/sign'
import { faculty } from './modules/faculty'
import { major } from './modules/major'
import { courses } from './modules/courses'
import { majorCourses } from './modules/majorCourses'
import { singleCourseRequest } from './modules/singleCourseRequest'

export const store = new Vuex.Store({
    modules:{
        home,
        sign,
        faculty,
        major,
        courses,
        majorCourses,
        singleCourseRequest,
    },
});