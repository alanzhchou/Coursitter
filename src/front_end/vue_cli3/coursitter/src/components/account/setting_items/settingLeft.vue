<template>
    <div class="col-xs-3 offset-xs-1 col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1">
        <img :src="avatar_src" alt="avatar" class="rounded-circle img-thumbnail border-dark">
        <label>
            <input type="file" class="btn btn-outline-info mt-3" @change="changeImg" /> 
            <p>上传新头像</p>
        </label>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> 专业 </span>
            </div>
            <input type="text" class="form-control" placeholder="专业" v-model="major">
        </div>

        <img :src="save_icon_src" alt="avatar" class="save_icon"> </br>
        <button class="btn btn-outline-danger" @click="setting_left_submit"> 保存 </button>
    </div>
</template>

<script>
export default {
    name:"SettingLeft",
    computed:{
        avatar_src(){
            return this.$store.state.accountSetting.setting_left_avatar_src;
        },
        major:{
            get(){
                return this.$store.state.accountSetting.setting_left_major;
            },
            set(value){
                this.check_changed();
                this.$store.commit("accountSetting/update_setting_left_major",value);
            }
        },
        save_icon_src(){
            return this.$store.state.accountSetting.setting_left_save_icon_src;
        },
    },
    methods:{
        check_changed(){
            if(!this.$store.state.accountSetting.left_changed){
                this.$store.commit("accountSetting/update_setting_left_left_changed",true);
            }
        },
        changeImg(event){
            let typePattern = /^image\/(.*)$/;
            let typeMatch = typePattern.test(event.target.files[0].type);

            let namePattern = /(.*)\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/;
            let nameMatch = namePattern.test(event.target.files[0].name);
            
            if(typeMatch && nameMatch){
                let sizeM = event.target.files[0].size/1000000;
                let sizeMString = String((sizeM).toFixed(3)) + "M";

                if(sizeM < 1){
                    let src = window.URL.createObjectURL(event.target.files[0]);
                    this.$store.commit("accountSetting/update_setting_left_avatar_src",src);
                    this.$store.commit("accountSetting/update_setting_left_left_changed",true);
                }else{
                    this.$store.commit("accountSetting/update_setting_left_left_changed",false);
                    alert("图片大小超过 1M !!");
                }
            }else{
                this.$store.commit("accountSetting/update_setting_left_left_changed",false);
                alert("非图片格式");
            }
        },
        setting_left_submit(){
            if(this.$store.state.accountSetting.left_changed){
                this.$store.dispatch("accountSetting/setting_left_submit");
            }
        },
    }
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