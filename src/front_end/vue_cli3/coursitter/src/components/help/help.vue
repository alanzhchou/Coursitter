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
                <form action="#" class="rounded mx-auto">
                    <h3> 给我们提意见 </h3>
                    <div class="input-group">
                        <div class="input-group-prepend"> 
                            <span class="input-group-text"> 姓名 </span>
                        </div>
                        <input type="text" class="form-control" placeholder="怎么称呼您？">
                    </div>

                    <div class="input-group">
                        <div class="input-group-prepend"> 
                            <span class="input-group-text"> 邮箱 </span>
                        </div>
                        <input type="email" class="form-control" placeholder="用来联系您">
                    </div>

                    <div class="input-group">
                        <textarea rows="5" placeholder="这里写下您的意见"></textarea>
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
                    help_title: "题目1",
                    help_img_src: "/imgs/help.gif",
                    help_body: `解决1text-justify1111wd我打算佛啊算法阿萨法发啥旮都是的撒噶的哈3333text-justify333算法阿萨法发啥旮都是的撒噶的222 算法阿萨法发啥旮都是的撒噶的22222221`,
                },
                {
                    help_title: "题目2",
                    help_img_src: "/imgs/help.gif",
                    help_body: `解决1text-justify1111wd我打算佛啊算法阿萨法发啥旮都是的撒噶的哈3333text-justify333算法阿萨法发啥旮都是的撒噶的222 算法阿萨法发啥旮都是的撒噶的22222221`,
                },
            ]
        }
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