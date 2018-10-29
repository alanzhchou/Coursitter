<template>
	<div class="container-fluid">
		<nav class="navbar navbar-expand-lg bg-light navbar-light">
			<a class="navbar-brand" href="#">
				<img :src="nav_brand_src" alt="Logo"> 
				<span class="navbar-text">{{ main_name }}</span> 
			</a>
		
			<!-- 小设备上的折叠下拉按钮 -->
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain">
				<span class="navbar-toggler-icon"></span>
			</button>
		
		<!-- 选项导航 -->
			<div class="collapse navbar-collapse" id="navbarMain">
				<ul class="navbar-nav mr-auto ">
					<li class="nav-item" v-for="item in service_types">
						<a class="nav-link" href="#">{{ item }}</a>
					</li>
				</ul>
        
				<!-- 搜索组件 -->
				<form action="#" class="form-inline" id="search">
					<div class="input-group">
						<div class="input-group-prepend"> 
							<button  type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown">
							{{ default_search_type }}
							</button>
							<div class="dropdown-menu">
								<li class="dropdown-item" v-for="item in search_types" @click="change_search_type"> {{ item.type }} </li>
							</div>
						</div>
						<input type="text" class="form-control" placeholder="搜索内容">
					</div>
				</form>
        
				<div class="dropdown" id="sign">
					<button type="button" class="btn btn-info" data-toggle="dropdown">
						Sign In / Sign Up
					</button>
					<div class="dropdown-menu">
						<a class="dropdown-item" v-for="item in sign_info" :href="item.link">{{ item.info }}</a>
					</div>
				</div>
      		</div>
    	</nav>
  	</div>
</template>

<script>
export default {
	name: 'MyNavbar',
	data(){
		return {
			nav_brand_src: "imgs/CSI-png2.png",
			main_name: "Coursitter",
			service_types: ["院系","专业","课程","课程选修测试"],
			default_search_type: "选择",
			search_types: [
				{type:"院系"},
				{type:"专业"},
				{type:"课程"}
			],
			sign_info:[
				{
					info:"Sign In",
					link:"/signin"
				},
				{						
					info:"Sign Up",
					link:"/signup"
				},
			],		
		};
	},
	methods:{
		change_search_type(event){
			this.default_search_type = event.target.innerText;
		}
	},
}
</script>

<style scoped lang="less">
.container-fluid{
	margin-top: -60px;
	img[alt="Logo"]{
		width:50px;
	}

	.nav-item{
		margin-left: 20px;
	}
	#sign{
		margin-left: 30px;
	}
}
</style>
