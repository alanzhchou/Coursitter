<template>
    <form action="#" class="rounded">
        <h3> Sign In for Coursitter </h3>
        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 账号 </span>
            </div>
            <input type="text" class="form-control" placeholder="用户名或邮箱">
        </div>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 密码 </span>
            </div>
            <input type="password" class="form-control" placeholder="密码">
        </div>

        <div class="form-check">
            <label for="check" class="form-check-label">
                <input type="checkbox" id="check" class="form-check-input">
                记住我
            </label>
        </div>
        
        <button type="submit" class="btn btn-primary"> 登陆 </button>

        <div class="input-group">
            <a href="#"> forget password ? </a>     
        </div>

        <router-link type="button" to="/signup" class="btn btn-outline-danger signUp"> 注册 </router-link>
    </form>
</template>

<script>
export default {
    name:"SignInForm",
    data(){
        return{
            username: "",
            password: "",
            remember: true,
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
    .signUp{
        margin-left: 180px;
    }
}
form:hover{
    box-shadow: 5px 5px 15px;
}
</style>