import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import IndexBody from './components/indexBody.vue';
import Sign from './components/sign.vue';
import Setting from './components/setting.vue';
import CoursesView from './components/coursesView.vue';

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
		],
	mode: "history",
});


Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

