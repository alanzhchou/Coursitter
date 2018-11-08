<template>
    <div id="carousel_demo" class="carousel slide bg-dark rounded-circle" data-ride="carousel">
        <ul class="carousel-indicators">
            <li v-for="item in carousel_items" data-target="#carousel_demo" :data-slide-to="item.index" :class="{'active':!item.index}"></li>
        </ul>

        <div class="carousel-inner">
            <div v-for="item,index in carousel_items" class="carousel-item" :class="{'active':!index}">
                <a :href="item.img_src" target="_blank">
                    <img :src="item.img_src" :alt="item.img_src" class="rounded-circle img-thumbnail">
                </a>
                <div class="carousel-caption">
                    <h5> {{ item.title }} </h5>
                    <p> {{ item.discribe }} </p>
                </div>
            </div>
        </div>

        <a href="#carousel_demo" class="carousel-control-prev" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#carousel_demo" class="carousel-control-next" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    props: {
        carousel_items:{
            type: Array,
        }
    },
}
</script>

<style scoped lang="less">
.carousel-inner img {
    width: 80%;
    height: 350px;
    transition: all 1s;
}

.carousel-inner img:hover{
    transform: scale(1.1);
}
</style>