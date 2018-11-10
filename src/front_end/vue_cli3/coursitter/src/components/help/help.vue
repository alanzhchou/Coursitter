<template>
    <div class="container-fluid bg-light">
        <div class="row">
            <div class="col-md-6 offset-md-1 col-lg-6 offset-lg-1 mt-3">
                <div class="media bg-light rounded mt-3 help-row" v-for="item in helps">
                    <img :src="item.help_img_src" class="align-self-center img-thumbnail rounded-circle mr-3" :alt="item.help_title">
                    <div class="media-body">
                        <h4 class="font-weight-bold text-justify mt-1"> {{ item.help_title }} </h4>
                        <p class="text-justify"> {{ item.help_body }} </p>
                    </div>
                </div>
            </div>

            <div class="col-xs-3 offset-xs-1 col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1 feedback">
                <form @submit.prevent="help_post" class="rounded mx-auto">
                    <h3> 给我们提意见 </h3>
                    <div class="input-group">
                        <div class="input-group-prepend"> 
                            <span class="input-group-text"> 姓名 </span>
                        </div>
                        <input type="text" class="form-control" placeholder="怎么称呼您？" v-model="post_name">
                    </div>

                    <div class="input-group">
                        <div class="input-group-prepend"> 
                            <span class="input-group-text"> 邮箱 </span>
                        </div>
                        <input type="email" class="form-control" placeholder="用来联系您" v-model="post_eamil">
                    </div>

                    <div class="input-group">
                        <textarea rows="5" placeholder="这里写下您的意见" v-model="post_text"></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-outline-primary mt-3"> 提交 </button>
                </form>

                <img src="/imgs/mail.gif" class="img-thumbnail rounded-circle mx-auto mt-5" alt="写意见">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Help",
    data(){
        return {
            helps: [
                {
                    help_title: "测试中",
                    help_img_src: "/imgs/help.gif",
                    help_body: `前端路由及数据接口基本已铺设完毕`,
                },
                {
                    help_title: "准备对接后端接口",
                    help_img_src: "/imgs/help.gif",
                    help_body: `qq: 203479397 \n  email: alanzhchou@gamil.com`,
                },
            ],
            post_name: "",
            post_eamil:"123@qq.com",
            post_text: "",
        }
    },
    methods:{
        help_post(){
            alert(this.post_name + "\n" + 
                    this.post_eamil + "\n" +
                    this.post_text + "\n已发送！ 谢谢您的建议");

            this.post_name = "";
            this.post_eamil = "123@qq.com";
            this.post_text = "";
        },
    }
}
</script>

<style scoped lang="less">
.help-row{
    box-shadow: 2px 2px 4px;
    img{
        width: 25%;
        max-width: 100px;
        border: 3px outset gray;
    }
    p{
        max-width: 95%;
    }
}
.help-row:hover{
    box-shadow: 2px 2px 7px;
}
.feedback{
    form{
        width: 90%;
        >*{
            margin-top: 15px;
        }
        textarea{
            width: 100%;
            min-height: 120px;
            max-height: 120px;
        }
    }
    img{
        width:50%;
        box-shadow: 2px 2px 5px;
        opacity: 0.5;
    }
}
</style>