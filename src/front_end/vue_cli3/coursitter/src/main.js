import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import IndexBody from './components/indexBody.vue';
import Sign from './components/sign.vue';
import Setting from './components/setting.vue';
import CoursesView from './components/coursesView.vue';
import FacultiesView from './components/facultiesView.vue';
import MajorsView from './components/majorsView.vue';
import MajorCoursesView from './components/majorCoursesView.vue'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
			{
				path:"/",
				component:IndexBody
			},
			{
				path:"/signin",
				component:Sign,
				props:{
					sign_in_tab: true,
					sign_up_tab: false,
				}
			},
			{
				path:"/signup",
				component:Sign,
				props:{
					sign_in_tab: false,
					sign_up_tab: true,
				}
			},
			{
				path:"/account/bsetting",
				component:Setting,
				props:{
					basic_type: true,
					password_type: false,
					mid_type: "基础",
				}
			},
			{
				path:"/account/psetting",
				component:Setting,
				props:{
					basic_type: false,
					password_type: true,
					mid_type: "安全",
				}
			},
			{
				path:"/account/courses",
				component:CoursesView,
			},
			{
				path:"/faculties",
				component:FacultiesView,
			},
			{
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
							major_id: 0,
							major_img_src: "/imgs/202.jpg",
							major_name: "物理",
							major_discribe: "xxxxx",
						},
						{   
							major_id: 0,
							major_img_src: "/imgs/203.jpg",
							major_name: "化学",
							major_discribe: "xxxxx",
						},
						{   
							major_id: 0,
							major_img_src: "/imgs/204.jpg",
							major_name: "生物",
							major_discribe: "xxxxx",
						},
						{   
							major_id: 0,
							major_img_src: "/imgs/205.jpg",
							major_name: "电子电气",
							major_discribe: "xxxxx",
						},
						{   
							major_id: 0,
							major_img_src: "/imgs/205.jpg",
							major_name: "电子电气",
							major_discribe: "xxxxx",
						},
						{   
							major_id: 0,
							major_img_src: "/imgs/205.jpg",
							major_name: "电子电气",
							major_discribe: "xxxxx",
						},
					]
				}
			},
			{
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
						{   
							major_id: 0,
							major_img_src: "/imgs/202.jpg",
							major_name: "物理",
							major_discribe: "xxxxx",
						},
						{   
							major_id: 0,
							major_img_src: "/imgs/203.jpg",
							major_name: "化学",
							major_discribe: "xxxxx",
						},
					]
				}	
			},
			{
				path:"/major/:id",
				component:MajorCoursesView,
				props:{
					courses:[

					],
				}	
			},

		],
	mode: "history",
});


Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

