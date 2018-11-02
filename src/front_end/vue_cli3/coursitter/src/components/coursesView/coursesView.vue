<template>
	<div class="container-fluid bg-light">
            <!-- title -->
        <div class="row title">
            <div class="col-xs-2 offset-xs-5 col-sm-2 offset-sm-5 col-md-2 offset-md-5 col-lg-2 offset-lg-5">
                <button class="btn btn-outline-danger"> {{ info["title_name"] }} </button>
            </div>
        </div>
        <div class="row body">
            <div class="col-xs-2 offset-xs-1 col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1">
                <coursesViewLeft :info="info"></coursesViewLeft>
            </div>
            <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <coursesViewMid :type="type"></coursesViewMid>
            </div>
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <coursesViewRight :courses="courses"></coursesViewRight>
            </div>
        </div>
	</div>
</template>

<script>
import CoursesViewLeft from "./coursesView_items/coursesViewLeft.vue";
import CoursesViewMid from "./coursesView_items/coursesViewMid.vue";
import CoursesViewRight from "./coursesView_items/coursesViewRight.vue";

export default {
    name: 'CoursesView',
    props:{
        type: String,
        info: Object,
        courses: Array,
    },
    components:{
        "coursesViewLeft":CoursesViewLeft,
        "coursesViewMid":CoursesViewMid,
        "coursesViewRight":CoursesViewRight,
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
