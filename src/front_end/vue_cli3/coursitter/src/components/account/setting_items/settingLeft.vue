<template>
    <div class="col-xs-3 offset-xs-1 col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1">
        <img :src="left.avatar_src" alt="avatar" class="rounded-circle img-thumbnail border-dark">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> 专业 </span>
            </div>
            <input type="text" class="form-control" placeholder="专业" v-model="left.major">
        </div>
        <button class="btn btn-outline-danger" @click="setting_left_submit"> 保存 </button>
    </div>
</template>

<script>
export default {
    name:"SettingLeft",
    props: {
        left : {
            type : Object
        }
    },
    methods:{
        setting_left_submit(){
            console.log(this.$store.state.sign.sign_info.left.setting_left_major);
        },
    }
}
</script>

<style scoped lang="less">
img{
    width: 75%;
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