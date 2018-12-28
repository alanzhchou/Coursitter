<template>
    <form class="rounded">
        <h3> Sign In for Coursitter </h3>
        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 账号 </span>
            </div>
            <input type="text" class="form-control" placeholder="用户名" v-model="sign_in.username">
        </div>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 密码 </span>
            </div>
            <input type="password" class="form-control" placeholder="密码" v-model="sign_in.password">
        </div>
        
        <button @click.prevent="sign_submit" class="btn btn-primary"> 登陆 </button>

        <router-link type="button" to="/signup" class="btn btn-outline-danger signUp"> 注册 </router-link>
    </form>
</template>

<script>

export default {
    name:"SignInForm",
    computed:{
        sign_in(){
            return this.$store.state.sign.sign_in;
        }
    },
    methods:{
        sign_submit(){
            this.$store.dispatch("sign/signin_submit",this.$router);
        }
    },
    created() {
        this.$store.dispatch("sign/pre_sign_in_submit",this.$router);
    },
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
    .signUp{
        margin-left: 180px;
    }
}
form:hover{
    box-shadow: 5px 5px 15px;
}
</style>