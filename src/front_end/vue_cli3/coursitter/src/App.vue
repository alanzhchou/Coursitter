<template>
	<div id="app">
		<myNavbar></myNavbar>
		<ul class="breadcrumb">
			<li class="breadcrumb-item" >
				<router-link to="/courserequest"> single course request </router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
import MyNavbar from './components/myNavbar.vue'

export default {
    name: 'app',
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
