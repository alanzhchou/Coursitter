<template>
	<div id="app">
		<myNavbar></myNavbar>
		<ul class="breadcrumb">
			<li v-for="item in router_links" class="breadcrumb-item" >
				<router-link :to="item.link_to"> {{ item.infomation }} </router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
import MyNavbar from './components/myNavbar.vue'

export default {
    name: 'app',
	data(){
		return {
			router_links:[
				{link_to: "/signin",infomation: "Sign In",},
				{link_to: "/signup",infomation: "Sign Up",},
				{link_to: "/account/bsetting",infomation: "account basic_setting",},
				{link_to: "/account/psetting",infomation: "account password_setting",},	
				{link_to: "/account/courses",infomation: "account courses",},
				{link_to: "/faculties",infomation: "all_faculties",},
				{link_to: "/majors",infomation: "all_majors",},
				{link_to: "/faculty/0",infomation: "single_faculty_majors",},
				{link_to: "/faculty/0/courses",infomation: "single_faculty_all_courses",},
				{link_to: "/major/0",infomation: "single_major_all_courses",},
				{link_to: "/courserequest",infomation: "single course request",},
			]
		};
	},
    components: {
        "myNavbar":MyNavbar,
    }
}
</script>

<style lang="less" scoped>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
