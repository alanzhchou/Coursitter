<template>
    <div class="container-fluid bg-light">
        <!-- title -->
        <div class="row title">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                - courses view
            </div>
        </div>

        <div class="row body bg-light" >
            <div class="col-xs-9 offset-xs-1 col-sm-9 offset-sm-1 col-md-9 offset-md-1 col-lg-9 offset-lg-1">
                <table class="table table-hover">
                    <thead>
                        <tr> 
                            <th> <button class="btn btn-info"> 课程序号 </button> </th> 
                            <th> <button class="btn btn-info"> 课程名称 </button> </th> 
                            <th> <button class="btn btn-info"> 课程代码 </button> </th> 
                            <th> <button class="btn btn-info" @click="changeCourseScoreSeen"> 课程分数(显示) </button> </th> 
                            <th> <button class="btn btn-info"> 学习时间 </button> </th> 
                        </tr>  
                    </thead>
                    <tbody>
                        <tr v-for="item in courses" :class="{'bg-info':item.highlight} "> 
                            <td> {{ item.course_id}} </td> 
                            <td> {{ item.course_name }} </td> 
                            <td> {{ item.course_code }} </td> 
                            <td> {{ course_score_seen ? item.course_score : '***' }} </td> 
                            <td> {{ item.course_study_year }} </td> 
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-danger"> 更多 </button>
            </div>
            <div class="col-xs-2 col-sm-9 col-md-2 col-lg-2">
                <button class="btn btn-warning" @click="changeHighLightMajor"> 高亮我的专业课 </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:"CoursesView",
    data(){
        return {
            course_score_seen: false,
            highlight_flag: false,
            info:["课程分数(显示)","课程分数(关闭)"],
            courses:[
                {   
                    course_id: 1,
                    course_name: "Computer Network",
                    course_code: "CS203",
                    course_score: "A",
                    course_study_year: "大二 下",
                    course_my_major: false, 
                    highlight: false,
                },
                {
                    course_id: 2,
                    course_name: "Computer Network",
                    course_code: "CS203",
                    course_score: "A",
                    course_study_year: "大二 下",
                    course_my_major: true, 
                    highlight: false,
                },
                {
                    course_id: 3,
                    course_name: "Computer Network",
                    course_code: "CS203",
                    course_score: "A",
                    course_study_year: "大二 下",
                    course_my_major: false, 
                    highlight: false,
                },
                {
                    course_id: 4,
                    course_name: "Computer Network",
                    course_code: "CS203",
                    course_score: "A",
                    course_study_year: "大二 下",
                    course_my_major: true,  
                    highlight: false,
                },
            ]
        };
    },
    methods:{
        changeCourseScoreSeen(event){
            this.course_score_seen = !this.course_score_seen;
            if(event.target.innerText === this.info[0]){
                event.target.innerText = this.info[1];
            }else{
                event.target.innerText = this.info[0];
            }
        },
        changeHighLightMajor(event){
            this.highlight_flag = !this.highlight_flag;
            if(this.highlight_flag){
                for(let i=0; i<this.courses.length; i++){
                    if(this.courses[i].course_my_major){
                        this.courses[i].highlight = true;
                    }
                }
            }else{
                for(let i=0; i<this.courses.length; i++){
                    this.courses[i].highlight = false;
                }
            }
        },
    }
}
</script>

<style scoped lang="less">
.body{
    margin-top: 20px;
}
.list{
    margin-top: 10px;
}
</style>