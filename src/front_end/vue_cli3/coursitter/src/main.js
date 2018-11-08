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
import MajorsView from './components/major/majorsView.vue';
import CoursesView from './components/coursesView/coursesView.vue';
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
				props:{
					courses:[
						{   
							course_id: 1,
							course_name: "Computer Network",
							course_code: "CS203",
							course_score: "A",
							course_study_year: "大二 下",
							course_my_major: false, 
							highlight: false,
						},
						{
							course_id: 2,
							course_name: "Computer Network",
							course_code: "CS203",
							course_score: "A",
							course_study_year: "大二 下",
							course_my_major: true, 
							highlight: false,
						},
					],
				}
			},
			{
				// 所有的院系
				path:"/faculties",
				component:FacultiesView,
				props:{
					faculties:[
						{   
							faculty_id: 0,
							faculty_img_src: "/imgs/201.jpg",
							faculty_name: "数学",
							faculty_discribe: "xxxxx",
						},
						{   
							faculty_id: 1,
							faculty_img_src: "/imgs/202.jpg",
							faculty_name: "物理",
							faculty_discribe: "xxxxx",
						},
					],
				}
			},
			{	
				// 所有的专业
				path:"/majors",
				component:MajorsView,
				props:{
					majors:[
						{   
							major_id: 0,
							major_img_src: "/imgs/201.jpg",
							major_name: "数学",
							major_discribe: "xxxxx",
						},
						{   
							major_id: 1,
							major_img_src: "/imgs/202.jpg",
							major_name: "物理",
							major_discribe: "xxxxx",
						},
					]
				}
			},
			{
				// 看某个院系下的所有专业
				path:"/faculty/:id",
				component:MajorsView,
				props:{
					majors:[
						{   
							major_id: 0,
							major_img_src: "/imgs/201.jpg",
							major_name: "数学",
							major_discribe: "xxxxx",
						},
					]
				}	
			},
			{	
				// 看某个专业下的所有课程
				path:"/major/:id",
				component:CoursesView,
				props:{
					type: "major",
					info:{
						title_name: "CS major",
						img_src: "/imgs/203.jpg",
						discribe: "这里是 专业 测试！！！",
					},
					courses:[
						{   
							course_id: 1,
							course_code: "CS203",
							course_name: "Computer Network",
							course_score: 2,
							course_opening: "春/秋",
							course_study_time: "大二 下",
							course_language: "English",
							course_faculty: "计算机系/CS",
							course_requirements: "无",
							checked: false,
							checked_info: "",
							course_my_major: false, 
							highlight: false,
						},
					],
				}	
			},
			{	
				// 看某个院系下的所有开课
				path:"/faculty/:id/courses",
				component:CoursesView,
				props:{
					type: "faculty",
					info:{
						title_name: "CS faculty!!!",
						img_src: "/imgs/208.jpg",
						discribe: "这里是 院系测试 ！！！！",
					},
					courses:[
						{   
							course_id: 1,
							course_code: "CS203",
							course_name: "Computer Network",
							course_score: 2,
							course_opening: "春/秋",
							course_study_time: "大二 下",
							course_language: "English",
							course_faculty: "计算机系/CS",
							course_requirements: "无",
							checked: false,
							checked_info: "",
							course_my_major: false, 
							highlight: false,
						},
						{   
							course_id: 2,
							course_code: "CS203",
							course_name: "Computer Network",
							course_score: 2,
							course_opening: "春/秋",
							course_study_time: "大二 下",
							course_language: "English",
							course_faculty: "计算机系/CS",
							course_requirements: "无",
							checked: false,
							checked_info: "",
							course_my_major: false, 
							highlight: false,
						},
					],
				}	
			},
			{
				path:"/courserequest",
				component:SingleCourseRequest,
				props:{
					courses:[
						{   
							course_id: 1,
							course_code: "CS203",
							course_name: "Computer Network",
							course_score: 2,
							course_opening: "春/秋",
							course_study_time: "大二 下",
							course_language: "English",
							course_faculty: "计算机系/CS",
							course_requirements: "无",
							checked: false,
							checked_info: "",
							course_my_major: false, 
							highlight: false,
						},
					],
				}	
			},
			{
				path:"/help",
				component:Help,
			},
			{
				path:"/*",
				component:NotFound,
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

