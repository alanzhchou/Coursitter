import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { store } from "./store/store";

import IndexBody from './components/index/indexBody.vue';
import Sign from './components/sign/sign.vue';
import Setting from './components/account/setting.vue';
import MyCoursesView from './components/account/myCoursesView.vue';
import FacultiesView from './components/faculty/facultiesView.vue';
import AllMajorsView from './components/major/allMajorsView.vue'
import SingleFacultyMajorsView from './components/major/singleFacultyMajorsView.vue'

import FacultyCoursesView from './components/coursesView/facultyCoursesView.vue';
import MajorCoursesView from './components/coursesView/majorCoursesView.vue';

import SingleCourseRequest from './components/singleCourseRequest/singleCourseRequest.vue';
import NotFound from './components/404/404.vue';
import Help from './components/help/help.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
			{
				// 主页
				path:"/",
				component: IndexBody,
			},
			{	
				// 登陆页面
				path:"/signin",
				component:Sign,
				props:{
					sign_type: "sign in",
				}
			},
			{
				// 注册页面
				path:"/signup",
				component:Sign,
				props:{
					sign_type: "sign up",
				}
			},
			{	
				// 账号基础设置页面
				path:"/account/bsetting",
				component:Setting,
				props:{
					setting_type: "basic",
				}
			},
			{
				// 账号安全设置页面
				path:"/account/psetting",
				component:Setting,
				props:{
					setting_type: "password",
				}
			},
			{
				// 我上过的所有课程
				path:"/account/courses",
				component:MyCoursesView,
			},
			{
				// 所有的院系
				path:"/faculties",
				component:FacultiesView,
			},
			{	
				// 所有的专业
				path:"/majors",
				component:AllMajorsView,
			},
			{
				// 看某个院系下的所有专业
				path:"/faculty/:id",
				component:SingleFacultyMajorsView,
			},
			{	
				// 看某个院系下的所有开课
				path:"/faculty/:id/courses",
				component:FacultyCoursesView,
			},
			{	
				// 看某个专业下的所有课程
				path:"/major/:id",
				component:MajorCoursesView,
			},
			{
				path:"/courserequest",
				component:SingleCourseRequest,
			},
			{
				path:"/help",
				component:Help,
			},
			{
				path:"/404",
				component:NotFound,
			},
			{
				path:"/*",redirect:"/404",
			},
		],
	mode: "history",
});


Vue.config.productionTip = false

new Vue({
	router,
	store: store,
	render: h => h(App)
}).$mount('#app')

