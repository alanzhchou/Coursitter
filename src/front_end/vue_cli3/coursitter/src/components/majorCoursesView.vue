<template>
	<div class="container-fluid bg-light">
            <!-- title -->
        <div class="row title">
            <div class="col-xs-2 offset-xs-5 col-sm-2 offset-sm-5 col-md-2 offset-md-5 col-lg-2 offset-lg-5">
                <button class="btn btn-outline-danger"> CS Courses </button>
            </div>
        </div>
        <div class="row body">
            <div class="col-xs-2 offset-xs-1 col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1">
                <majorCoursesViewLeft></majorCoursesViewLeft>
            </div>
            <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <majorCoursesViewMid></majorCoursesViewMid>
            </div>
            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <majorCoursesViewRight></majorCoursesViewRight>
            </div>
        </div>
	</div>
</template>

<script>
import MajorCoursesViewLeft from "./majorCoursesViewLeft.vue";
import MajorCoursesViewMid from "./majorCoursesViewMid.vue";
import MajorCoursesViewRight from "./majorCoursesViewRight.vue";

export default {
    name: 'MajorCoursesView',
    props:{
        major: String,
        major_img_src: String,
        major_discribe: String,
        courses: Array,
    },
    components:{
        "majorCoursesViewLeft":MajorCoursesViewLeft,
        "majorCoursesViewMid":MajorCoursesViewMid,
        "majorCoursesViewRight":MajorCoursesViewRight,
    },
}
</script>

<style scoped lang="less">
.title{
    button{
        box-shadow: 2px 2px 5px;
        transition: all 1s;
    }
    button:hover{
        transform: scale(1.1);
    }
}

.body{
    margin-top: 20px;
}
</style>
