<template>
	<div class="container-fluid">
		<nav class="navbar navbar-expand-lg bg-light navbar-light">
			<router-link class="navbar-brand" to="/">
				<img :src="nav_brand_src" alt="Logo"> 
				<span class="navbar-text">{{ main_name }}</span> 
			</router-link>
		
			<!-- 小设备上的折叠下拉按钮 -->
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain">
				<span class="navbar-toggler-icon"></span>
			</button>
		
		<!-- 选项导航 -->
			<div class="collapse navbar-collapse" id="navbarMain">
				<ul class="navbar-nav mr-auto ">
					<li class="nav-item" v-for="item in service_types">
						<router-link class="nav-link" :to="item.link">{{ item.type }}</router-link>
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
        
				<div class="dropdown" id="sign" v-if="!signed">
					<button type="button" class="btn btn-info" data-toggle="dropdown">
						Sign In / Sign Up
					</button>
					<div class="dropdown-menu">
						<router-link class="dropdown-item" v-for="item in sign_info" :to="item.link">{{ item.info }}</router-link>
					</div>
				</div>

				<div class="dropdown" id="signed" v-if="signed">
					<a data-toggle="dropdown" class="ml-2">
						<img src="/imgs/CSI-png2.png" alt="user_name" class="navbar-brand rounded-circle"> 
					</a>
					<div class="dropdown-menu" >
						<router-link class="dropdown-item" to="/account/bsetting"> 基本设置 </router-link>
						<router-link class="dropdown-item" to="/account/psetting"> 安全设置 </router-link>
						<router-link class="dropdown-item" to="/help"> help </router-link>
						<router-link class="dropdown-item" to="/" @click.native="logout"> 退出登陆 </router-link>
					</div>
				</div>
      		</div>
    	</nav>
  	</div>
</template>

<script>
export default {
	name: 'MyNavbar',
	computed:{
		signed(){
			return this.$store.state.signed;
		}
	},
	data(){
		return {
			nav_brand_src: "/imgs/CSI-png2.png",
			main_name: "Coursitter",
			service_types: [
				{
					type:"院系",
					link:"/faculties",
				},
				{
					type:"专业",
					link:"/majors",
				},
				{
					type:"单例课程信息请求",
					link:"/courserequest",
				},
			],
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
		},
		logout(){
			return this.$store.commit("update_signed",false);
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
	#signed{
		.navbar-brand{
			width:50px;
			border: 1px solid gray;
			box-shadow: 2px 2px 1px;
			transition: all 0.5s
		}
		.navbar-brand:hover{
			transform: scale(1.1);
		}
	}
}
</style>
