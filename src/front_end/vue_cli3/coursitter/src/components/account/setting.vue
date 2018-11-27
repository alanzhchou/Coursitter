<template>
    <div class="container-fluid bg-light">
        <!-- title -->
        <div class="row title">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button class="btn btn-outline-danger mt-1"> Account Setting </button>
            </div>
        </div>

        <div class="row body">
            <settingLeft :left="left" />
            <settingMid :setting_type="setting_type" />
            <settingRightBasic v-if="setting_type === 'basic'" :basic="basic" />
            <settingRightPassword v-if="setting_type === 'password'" :password="password" />
  <!---->
        </div>
    </div>
</template>

<script>
import SettingLeft from './setting_items/settingLeft.vue';
import SettingRightBasic from './setting_items/settingRightBasic.vue';
import SettingRightPassword from './setting_items/settingRightPassword.vue';
import SettingMid from './setting_items/settingMid.vue';

export default {
    name:"Setting",
    props:{
        setting_type: String,
    },
    computed:{
        left(){
            return this.$store.state.sign.sign_info.left
        },
        basic(){
            return this.$store.state.sign.sign_info.basic
        },
        password(){
            return this.$store.state.sign.sign_info.password
        }
    },
    components:{
        "settingLeft": SettingLeft,
        "settingRightBasic": SettingRightBasic,
        "settingRightPassword":SettingRightPassword,
        "settingMid": SettingMid,
    }
}
</script>

<style scoped lang="less">
.body{
    margin-top: 30px;

    img{
        width: 100%;
    }
    .save_icon{
        width: 30%;
    }
    .input-group{
        .input-group-prepend{
            width: 40%;
            span{
                width: 100%;
            }
        }
    }

}
</style>