<template>
	<div class="main">
        <img :src="info['img_src']" :alt="info['title_name']" class="rounded img-thumbnail"/>
        <textarea class="form-control" rows="5" readonly> {{ info['discribe'] }} </textarea>
	</div>
</template>

<script>
export default {
    name: 'CoursesViewLeft',
    props:{
        info: Object,
    }
}
</script>

<style scoped lang="less">
.main{
    img{
        width: 100%;
        transition: all 0.5s;
    }
    img:hover{
        transform: scale(1.1);
        box-shadow: 2px 2px 5px;
        border: 2px outset gray;
    }
    textarea{
        width: 100%;
        max-height: 100px;
        min-height: 100px;
        margin-top: 20px; 
        box-shadow: 2px 2px 2px;
        border: 2px outset gray;
    }
}
</style>
