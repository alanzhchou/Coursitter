<template>
    <div class="container-fluid bg-light">
        <div class="row">
            <div class="col-xs-6 offset-xs-1 col-sm-6 offset-sm-1 col-md-6 offset-md-1 col-lg-6 offset-lg-1">
                <img src="imgs/1.jpg" alt="img-bg" class="rounded img-thumbnail">
            </div>
            <div class="col-xs-3 offset-xs-1 col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1">
                <form action="#" class="rounded">
                    <h3> Sign Up for Coursitter </h3>
                    <div class="input-group">
                        <div class="input-group-prepend"> 
                            <span class="input-group-text"> 邮箱 </span>
                        </div>
                        <input type="text" class="form-control" placeholder="用户名或邮箱">
                    </div>

                    <div class="input-group">
                        <div class="input-group-prepend"> 
                            <span class="input-group-text"> 密码 </span>
                        </div>
                        <input type="password" class="form-control" placeholder="密码">
                    </div>

                    <div class="input-group">
                        <div class="input-group-prepend"> 
                            <span class="input-group-text"> 重复 </span>
                        </div>
                        <input type="password" class="form-control" placeholder="密码">
                    </div>

                    <div class="form-check">
                        <label for="check" class="form-check-label">
                            <input type="checkbox" id="check" class="form-check-input">
                                自动登陆
                        </label>
                    </div>
                    
                    <button type="submit" class="btn btn-danger"> 登陆 </button>

                    <div class="input-group">
                        <a href="#"> forget password ? </a>     
                    </div>

                    <button type="submit" class="btn btn-outline-primary" id="signUp_btn"> 注册 </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"SignUp",
}
</script>

<style scoped lang="less">
.row{
    margin-top: 20px;

    img{
        margin-top: 20px;
        width:100%;
        height: 450px;
    }

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
        #signUp_btn{
            margin-left: 180px;
        }
    }
    form:hover{
        box-shadow: 5px 5px 15px;
    }
}
</style>