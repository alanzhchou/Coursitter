<template>
	<div id="app">
		<myNavbar></myNavbar>
		<ul class="breadcrumb">
			<li class="breadcrumb-item">
				<router-link to="/">Home</router-link>
			</li>
			<li class="breadcrumb-item">
				<router-link to="/signin">Sign In</router-link>
			</li>
			<li class="breadcrumb-item">
				<router-link to="/signup">Sign Up</router-link>
			</li>
			<li class="breadcrumb-item">
				<router-link to="/account/bsetting"> account basic_setting </router-link>
			</li>
			<li class="breadcrumb-item">
				<router-link to="/account/psetting"> account password_setting </router-link>
			</li>
			<li class="breadcrumb-item">
				<router-link to="/account/courses"> account courses </router-link>
			</li>
			<li class="breadcrumb-item">
				<router-link to="/faculties"> all_faculties </router-link>
			</li>
			<li class="breadcrumb-item">
				<router-link to="/majors"> all_majors </router-link>
			</li>
			<li class="breadcrumb-item">
				<router-link to="/faculty/0"> single_faculty_majors </router-link>
			</li>
			<li class="breadcrumb-item">
				<router-link to="/major/0"> single_major_all_courses </router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
import MyNavbar from './components/myNavbar.vue'
import IndexBody from './components/indexBody.vue'

export default {
    name: 'app',
    components: {
        "myNavbar":MyNavbar,
        "indexBody":IndexBody,
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
