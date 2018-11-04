<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 offset-md-1 col-lg-6 offset-lg-1 my-auto">
                <div class="jumbotron">
                    <h1 class="text-danger font-weight-bold font-italic">404了, 找不到了 ...... </h1>
                    <h2 class="font-weight-bold font-italic mt-5"> 你肯定跑错地方了  </h2> 
                    <button class="btn btn-outline-success mt-5" @mouseover="imgRotate(0)" @mouseout="initRotate()"> 上坡 </button>
                    <button class="btn btn-outline-success mt-5" @mouseover="imgRotate(1)" @mouseout="initRotate()"> 倒立 </button>
                    <button class="btn btn-outline-success mt-5" @mouseover="imgRotate(2)" @mouseout="initRotate()"> 下坡 </button>
                </div>
            </div>

            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <img src="/imgs/404.gif" class="rounded-circle" :style="img_style" ref="img_404"/>
            </div>
        </div>
        <button class="btn btn-light suprise" :title="name"></button>
    </div>
</template>

<script>
export default {
    name: "NotFound",
    data(){
        return {
            name: "周恒 11510629",
            img_style: "",
            img_rotate:[
                "transform: rotate(-55deg)",
                "transform: rotate(180deg)",
                "transform: rotate(55deg)",
            ],
        }
    },
    methods:{
        imgRotate(type){
            this.img_style = this.img_rotate[type];
        },
        initRotate(){
            this.img_style = "";
        },
    }
}
</script>

<style scoped lang="less">
.row{
    .jumbotron{
        box-shadow: 2px 2px 5px;
        transition: all 1s;
    }
    .jumbotron:hover{
        box-shadow: 2px 2px 15px;
        border: 2px outset gray;
    }
    h1{
        text-shadow: 1px 1px 1px;
    }
    h2{
        text-shadow: 1px 1px 1px;
    }
    button{
        margin-right: 20px;
        box-shadow: 2px 2px 5px;
        border: 2px outset gray;
        opacity: 0.01;
    }
    button:hover{
        opacity: 0.5;
    }

    img{
        width: 90%;
        box-shadow: 2px 2px 1px;
        transition: all 0.5s;
    }
    img:hover{
        box-shadow: 2px 2px 5px;
    }
}
.suprise{
    float: left;
}
</style>