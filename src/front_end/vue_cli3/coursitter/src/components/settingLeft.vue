<template>
    <div class="col-xs-3 offset-xs-1 col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1">
        <img :src="avatar_src" alt="avatar" class="rounded img-thumbnail border-dark">
        <button class="btn btn-outline-info"> 上传新头像 </button>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 专业 </span>
            </div>
            <input type="text" class="form-control" placeholder="专业" v-model="major">
        </div>

        <img src="/imgs/102.jpg" alt="avatar" class="save_icon"> </br>
        <button class="btn btn-outline-danger"> 保存 </button>
    </div>
</template>

<script>
export default {
    name:"SettingLeft",
    data(){
        return {
            avatar_src: "/imgs/101.jpg",
            major: "计算机",
        };
    },
}
</script>

<style scoped lang="less">
img{
    width: 75%;

}
.save_icon{
    margin-top: 20px;
    width: 20%;
}

button{
    margin-top: 20px;
}

.input-group{
    margin-top: 20px;

    .input-group-prepend{
        width: 40%;
        span{
            width: 100%;
        }
    }
}
</style>