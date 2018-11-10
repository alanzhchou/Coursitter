<template>
    <div class="container-fluid bg-light">
        <div class="row">
            <div class="col-xs-8 offset-xs-2 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
                <img :src="news_img" alt="" id="news_img" class="rounded-circle">
            </div>
            <div class="col-xs-10 offset-xs-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                <carousel :carousel_items="carousel_items"/>
            </div> 
        </div>
    </div>
</template>

<script>
import Carousel from './indexBody_items/carousel.vue';

export default {
    name: 'IndexBody',
    computed:{
        news_img(){
            return this.$store.state.home.news_img
        },
        carousel_items(){
            return this.$store.state.home.carousel_items
        }
    },
    created(){
        this.$store.dispatch("home/set_carousel_items");
    },
    components: {
        "carousel":Carousel,
    },
}
</script>

<style scoped lang="less">
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
            transition: all 2s;
        }
        #news_img:hover{
            transform: rotateY(360deg);
        }
    }
}

</style>
