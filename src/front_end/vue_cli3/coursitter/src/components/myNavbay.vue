<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-light navbar-light">
      <a class="navbar-brand" href="#"><img src="../assets/CSI-png2.png" alt="Logo" style="width:70px;"> <span class="navbar-text">Coursitter</span> </a>
      
      <!-- 小设备上的折叠下拉按钮 -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- 选项导航 -->
      <div class="collapse navbar-collapse" id="navbarMain">
        <ul class="navbar-nav mr-auto ">
          <li class="nav-item">
            <a class="nav-link" href="#">院系</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">专业</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">课程</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="#">课程选修测试</a>
          </li>
        </ul>
        
        <!-- 搜索组件 -->
        <form action="#" class="form-inline" id="search">
            <div class="input-group">
                <div class="input-group-prepend"> 
                    <button  type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown">
                      {{ selected_search_type }}
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
            	<a class="dropdown-item" href="#">Sign In</a>
            	<a class="dropdown-item" href="#">Sign Up</a>
          	</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MyNavbar',
  props: {
    msg: {
      type: Number,
    },
  },
  data(){
    return {
	  selected_search_type: "选择",
      search_types: [
			{type:"院系"},
			{type:"专业"},
			{type:"课程"}
		],
    };
  },
  methods:{
    change_search_type(event){
		this.selected_search_type = event.target.innerText;
    }



  },
}
</script>

<style scoped lang="less" scoped>
.container-fluid{
  margin-top: -60px;
  #sign{
    margin-left: 30px;
  }
}
</style>
