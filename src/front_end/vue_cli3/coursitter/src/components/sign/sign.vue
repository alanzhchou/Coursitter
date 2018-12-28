<template>
    <div class="container-fluid bg-light">
        <div class="row">
            <div class="col-xs-6 offset-xs-1 col-sm-6 offset-sm-1 col-md-6 offset-md-1 col-lg-6 offset-lg-1">
                <img :src="sign_img_src" alt="img-bg" class="rounded img-thumbnail">
            </div>
            <div class="col-xs-3 offset-xs-1 col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1">
                <signInForm v-if="sign_type === 'sign in'" />
                <signUpForm v-if="sign_type === 'sign up'" />
            </div>
        </div>
    </div>
</template>

<script>
import SignInForm from './sign_items/signInForm.vue';
import SignUpForm from './sign_items/signUpForm.vue';

export default {
    name:"Sign",
    props:{
        sign_type: String,
    },
    computed:{
        sign_img_src(){
            return this.$store.state.sign.sign_img_src;
        },
    },
    components:{
        "signInForm":SignInForm,
        "signUpForm":SignUpForm,
    }
}
</script>

<style scoped lang="less">
.row{
    margin-top: 20px;

    img{
        margin-top: 20px;
        width:100%;
        max-height: 450px;
        transition: all 0.5s;
    }
    img:hover{
        transform: scale(1.1);
        box-shadow: 3px 3px 15px;
    }
}
</style>