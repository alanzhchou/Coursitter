<template>
    <div class="col-xs-1 offset-xs-1 col-sm-1 offset-sm-1 col-md-1 offset-md-1 col-lg-1 offset-lg-1">
        <div class="input-group">
            <div class="input-group-prepend"> 
                <button  type="button" class="btn btn-outline-danger dropdown-toggle" data-toggle="dropdown">
                {{ setting_type === 'basic' ? '基础' : '安全' }}
                </button>
                <div class="dropdown-menu">
                    <li v-for="item in setting_types" class="dropdown-item"> 
                         <router-link :to="item.src" @click="change_setting_type"> {{ item.type }} </router-link>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"SettingMid",
    props:{
        setting_type: String,
    },
    data(){
        return {
            setting_types: [
                {type: "基础",src:"/account/bsetting"},
                {type: "安全",src:"/account/psetting"},   
            ],
        };
    },
    methods:{
		change_setting_type(event){
			this.default_setting_type = event.target.innerText;
		}
	},
}
</script>

<style scoped lang="less">
.input-group{
    margin-bottom: 20px;

    .input-group-prepend{
        width: 40%;
        span{
            width: 100%;
        }
    }
    button{
        float: right;
    }
}
</style>