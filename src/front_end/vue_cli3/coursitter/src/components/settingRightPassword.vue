<template>
    <div class="col-xs-4 offset-xs-1 col-sm-4 offset-sm-1 col-md-4 offset-md-1 col-lg-4 offset-lg-1">
        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 原密码 </span>
            </div>
            <input type="password" class="form-control" placeholder="不可修改">
        </div>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 新密码 </span>
            </div>
            <input type="password" class="form-control" placeholder="新密码">
        </div>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 重复 </span>
            </div>
            <input type="password" class="form-control" placeholder="重复新密码">
        </div>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> CAS 账号 </span>
            </div>
            <input type="text" class="form-control" placeholder="CAS 账号">
        </div>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> CAS 密码 </span>
            </div>
            <input type="password" class="form-control" placeholder="CAS 密码">
        </div>
    </div>
</template>

<script>
export default {
    name:"SettingRightPassword",
}
</script>

<style scoped lang="less">
.input-group{
    margin-bottom: 20px;

    .input-group-prepend{
        width: 20%;
        span{
            width: 100%;
        }
    }
    textarea{
        max-height: 150px;
        min-height: 50px;
    }
}
</style>