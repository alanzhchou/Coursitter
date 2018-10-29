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
