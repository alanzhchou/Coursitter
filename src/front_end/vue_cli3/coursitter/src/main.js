import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import IndexBody from './components/indexBody.vue';
import SignIn from './components/signIn.vue';
import SignUp from './components/signUp.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
			{path:"/",component:IndexBody},
			{path:"/signin",component:SignIn},
			{path:"/signup",component:SignUp},
		],
	mode: "history",
});


Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

