<template>
	<div class="main">
        <img :src="major_img_src" :alt="major" class="rounded img-thumbnail"/>
        <textarea class="form-control" rows="5" readonly> {{ major_discribe }} </textarea>
	</div>
</template>

<script>
export default {
    name: 'MajorCoursesViewLeft',
    data(){
        return {
            major: "Math",
            major_img_src: "/imgs/201.jpg",
            major_discribe: "xxxxxxx",
        };
    },
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
