<template>
    <form class="rounded">
        <h3> Sign Up for Coursitter </h3>
        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 用户名 </span>
            </div>
            <input type="text" class="form-control" placeholder="用户名" v-model="sign_up.username">
        </div>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 密码 </span>
            </div>
            <input type="password" class="form-control" placeholder="密码" v-model="sign_up.password">
        </div>
        
        <button @click.prevent="sign_submit" class="btn btn-danger"> 注册 </button>

        <router-link type="button" to="/signin" class="btn btn-outline-primary signIn"> 登陆 </router-link>
    </form>
</template>

<script>
export default {
    name:"SignUpForm",
    computed:{
        sign_up(){
            return this.$store.state.sign.sign_up;
        }
    },
    methods:{
        sign_submit(){
            this.$store.dispatch("sign/signup_submit",this.$router)
        }
    }
}
</script>

<style scoped lang="less">
form{
    margin-top: 20px;
    padding: 30px;
    border: 2px solid black;
    box-shadow: 1px 1px 3px;
    transition: all 1s;

    >div{
        margin-top: 25px;
        transition: all 0.5s;
    }
    >div:hover{
        box-shadow: 3px 3px 5px;
    }

    >button{
        margin-top: 25px;  
    }
    .signIn{
        margin-left: 180px;
    }
}
form:hover{
    box-shadow: 5px 5px 15px;
}
</style>