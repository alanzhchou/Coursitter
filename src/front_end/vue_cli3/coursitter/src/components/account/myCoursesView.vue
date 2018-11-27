<template>
    <div class="container-fluid bg-light">
        <!-- title -->
        <div class="row title">
            <div class="col-xs-2 offset-xs-1 col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1">
                <button class="btn btn-outline-danger"> learned courses view </button>
            </div>
        </div>

        <div class="row body bg-light" >
            <div class="col-xs-9 offset-xs-1 col-sm-9 offset-sm-1 col-md-9 offset-md-1 col-lg-9 offset-lg-1">
                <table class="table table-hover table-responsive-sm">
                    <thead>
                        <tr> 
                            <th> <button class="btn btn-info"> 课程序号 </button> </th> 
                            <th> <button class="btn btn-info"> 课程名称 </button> </th> 
                            <th> <button class="btn btn-info"> 课程代码 </button> </th> 
                            <th> 
                                <button :class="{'btn':true, 'btn-dark': !course_score_seen, 'btn-info': course_score_seen}" 
                                    @click="changeCourseScoreSeen">
                                    {{ course_score_seen ? "课程分数(显示)" : "课程分数(关闭)" }} 
                                </button> 
                            </th> 
                            <th> <button class="btn btn-info"> 学习时间 </button> </th> 
                        </tr>  
                    </thead>
                    <tbody>
                        <tr v-for="item in courses" :key="item.index" :class="{'bg-info':item.highlight}"> 
                            <td> {{ item.course_id}} </td> 
                            <td> {{ item.course_name }} </td> 
                            <td> {{ item.course_code }} </td> 
                            <td> {{ course_score_seen ? item.course_score : '***' }} </td> 
                            <td> {{ item.course_study_year }} </td> 
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-xs-2 col-sm-9 col-md-2 col-lg-2">
                <button class="btn btn-outline-success" @click="changeHighlight"> 高亮我的专业课 </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:"MyCoursesView",
    computed:{
        courses(){
            return this.$store.state.sign.courses;
        },
        course_score_seen(){
            return this.$store.state.sign.course_score_seen;
        },
    },
    methods:{
        changeCourseScoreSeen(event){
            this.$store.commit("sign/update_course_score_seen");
        },
        changeHighlight(event){
            this.$store.commit("sign/update_course_highlight");
        },
    },
    created() {
        this.$store.dispatch("sign/set_courses");
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
        border: 2px outset gray;
    }
}
.body{
    margin-top: 20px;
}
</style>