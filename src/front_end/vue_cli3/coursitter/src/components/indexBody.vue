<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-8 offset-xs-2 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
                <img :src="news_img" alt="" id="news_img" class="rounded-circle">
            </div>
           <!-- <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 bg-light"> -->
            <div class="col-xs-10 offset-xs-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                <div id="carousel_demo" class="carousel slide" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li v-for="index in carousel_slides" data-target="#carousel_demo" :data-slide-to="index" :class="{'active':!index}"></li>
                    </ul>

                    <div class="carousel-inner">
                        <div v-for="item,index in carousel_inner_items" class="carousel-item" :class="{'active':!index}">
                            <a :href="item.img_src" target="_blank">
                                <img :src="item.img_src" alt="img" class="rounded">
                            </a>
                            <div class="carousel-caption">
                                <h5> {{ item.title }} </h5>
                                <p> {{ item.discribe }} </p>
                            </div>
                        </div>
                    </div>

                    <a href="#carousel_demo" class="carousel-control-prev" data-slide="prev">
                        <span class="carousel-control-prev-icon bg-info"></span>
                    </a>
                    <a href="#carousel_demo" class="carousel-control-next" data-slide="next">
                        <span class="carousel-control-next-icon bg-info"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexBody',
    props: {
            
    },
    data(){
        return {
            news_img: require("../assets/sustc.jpg"),
            carousel_slides:[0,1,2,3],
            carousel_inner_items:[
                {
                    img_src: require("../assets/0.jpg"),
                    title: "数学",
                    discribe: "数学",
                },
                {
                    img_src: require("../assets/1.jpg"),
                    title: "计算机",
                    discribe: "计算机",
                },
                {
                    img_src: require("../assets/2.jpg"),
                    title: "物理",
                    discribe: "物理",
                },
                {
                    img_src: require("../assets/3.jpg"),
                    title: "化学",
                    discribe: "化学",
                },
            ]
        };
    },
    methods:{

    },
}
</script>

<style scoped lang="less" scoped>
h1,h2,h3,h4,h5,h6{
    text-align: center;
}

.row{
    >div{
        padding: 5px;

        #news_img{
            margin-top: 50px;
            margin-bottom: 30px;
            width: 20%;
            height: 100px;
        }
    }
    
    .carousel-inner img {
        width: 80%;
        height: 400px;
    }
}

</style>
