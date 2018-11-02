<template>
    <div class="container-fluid bg-light">
        <!-- title -->
        <div class="row title">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                - account setting
            </div>
        </div>

        <div class="row body">
            <settingLeft></settingLeft>

            <settingMid :default_setting_type="mid_type"></settingMid>
            
            <settingRightBasic v-if="basic_type"></settingRightBasic>
            <settingRightPassword v-if="password_type"></settingRightPassword>
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
        basic_type: Boolean,
        password_type: Boolean,
        mid_type: String,
    },
    data(){
        return {

        };
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