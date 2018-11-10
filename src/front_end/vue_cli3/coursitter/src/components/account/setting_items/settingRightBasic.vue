<template>
    <div class="col-xs-4 offset-xs-1 col-sm-4 offset-sm-1 col-md-4 offset-md-1 col-lg-4 offset-lg-1">
        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 用户名 </span>
            </div>
            <input type="text" class="form-control" placeholder="不可修改" readonly v-model="username">
        </div>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 展示昵称 </span>
            </div>
            <input type="text" class="form-control" placeholder="昵称" v-model="nickname">
        </div>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> email </span>
            </div>
            <input type="email" class="form-control" placeholder="邮箱" v-model="email" ref="email">
        </div>

        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> 性别 </span>
            </div>
            <select name="" id="select" class="form-control" v-model="sex">
                <option value="男"> 男 </option>
                <option value="女"> 女 </option>
                <option value="不明"> 不明 </option>
            </select>
        </div>
        
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> 介绍信息 </span>
            </div>
            <textarea class="form-control" placeholder="我的介绍信息" v-model="introuction"> </textarea>
        </div>

        <button class="btn btn-outline-dark" @click="setting_right_basic_submit"> 保存 </button>
    </div>
</template>

<script>
export default {
    name:"SettingRightBasic",
    computed:{
        username(){ return this.$store.state.accountSetting.setting_right_basic_username;},
        nickname:{
            get(){return this.$store.state.accountSetting.setting_right_basic_nickname;},
            set(value){
                this.check_changed();
                this.$store.commit("accountSetting/update_setting_right_basic_nickname",value);
            },
        },
        email:{
            get(){return this.$store.state.accountSetting.setting_right_basic_email;},
            set(value){
                this.check_changed();
                this.$store.commit("accountSetting/update_setting_right_basic_email",value);
            }
        },
        sex:{
            get(){return this.$store.state.accountSetting.setting_right_basic_sex;},
            set(value){
                this.check_changed();
                this.$store.commit("accountSetting/update_setting_right_basic_sex",value);
            }
        },
        introuction:{
            get(){return this.$store.state.accountSetting.setting_right_basic_introuction;},
            set(value){
                this.check_changed();
                this.$store.commit("accountSetting/update_setting_right_basic_introuction",value);
            }
        },
    },
    methods:{
        check_changed(){
            if(!this.$store.state.accountSetting.right_basic_changed){
                this.$store.commit("accountSetting/update_setting_right_basic_changed",true);
            }
        },
        setting_right_basic_submit(){
            // 判断邮件是否符合 格式
            if(this.$store.state.accountSetting.right_basic_changed){
                if(this.$refs.email["validationMessage"] === ""){
                    this.$store.dispatch("accountSetting/setting_right_basic_submit");
                }
            }
        },
    },
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