<template>
    <div class="col-xs-4 offset-xs-1 col-sm-4 offset-sm-1 col-md-4 offset-md-1 col-lg-4 offset-lg-1">
        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 原密码 </span>
            </div>
            <input type="password" class="form-control" placeholder="原密码" v-model="origin_password">
        </div>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 新密码 </span>
            </div>
            <input type="password" class="form-control" placeholder="新密码" v-model="new_password">
        </div>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> 重复 </span>
            </div>
            <input type="password" class="form-control" placeholder="重复新密码" v-model="repeat_password">
        </div>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> CAS 账号 </span>
            </div>
            <input type="text" class="form-control" placeholder="CAS 账号" v-model="cas_account">
        </div>

        <div class="input-group">
            <div class="input-group-prepend"> 
                <span class="input-group-text"> CAS 密码 </span>
            </div>
            <input type="password" class="form-control" placeholder="CAS 密码" v-model="cas_password">
        </div>

        <button class="btn btn-outline-dark" @click="setting_right_password_submit"> 保存 </button>
    </div>
</template>

<script>
export default {
    name:"SettingRightPassword",
    computed:{
        origin_password:{             
            get(){return this.$store.state.accountSetting.setting_right_password_origin_password;},
            set(value){
                this.check_changed();
                this.$store.commit("accountSetting/update_setting_right_password_origin_password",value);
            }
        },
        new_password:{
            get(){return this.$store.state.accountSetting.setting_right_password_new_password;},
            set(value){
                this.check_changed();
                this.$store.commit("accountSetting/update_setting_right_password_new_password",value);
            }
        },
        repeat_password:{
            get(){return this.$store.state.accountSetting.setting_right_password_repeat_password;},
            set(value){
                this.check_changed();
                this.$store.commit("accountSetting/update_setting_right_password_repeat_password",value);
            }
        },
        cas_account:{
            get(){return this.$store.state.accountSetting.setting_right_password_cas_account;},
            set(value){
                this.check_changed();
                this.$store.commit("accountSetting/update_setting_right_password_cas_account",value);
            }
        },
        cas_password:{
            get(){return this.$store.state.accountSetting.setting_right_password_cas_password;},
            set(value){
                this.check_changed();
                this.$store.commit("accountSetting/update_setting_right_password_cas_password",value);
            }
        },
    },
    methods:{
        check_changed(){
            if(!this.$store.state.accountSetting.right_password_changed){
                this.$store.commit("accountSetting/update_setting_right_password_changed",true);
            }
        },
        setting_right_password_submit(){
            if(this.$store.state.accountSetting.right_password_changed){
                this.$store.dispatch("accountSetting/setting_right_password_submit");
            }
        },
    }
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