<template>
    <div class="main">
        <table class="table table-hover">
            <thead>
                <tr> 
                    <th> <button class="btn btn-info"> 课程序号 </button> </th> 
                    <th> <button class="btn btn-info"> 课程代码 </button> </th> 
                    <th> <button class="btn btn-info"> 课程名称 </button> </th> 
                    <th> <button class="btn btn-info"> 学分 </button> </th> 
                    <th> <button class="btn btn-info"> 开课学期 </button> </th> 
                    <th> <button class="btn btn-info"> 建议学习时间 </button> </th> 
                    <th> <button class="btn btn-info"> 授课语言 </button> </th> 
                    <th> <button class="btn btn-info"> 开课院系 </button> </th> 
                    <th> <button class="btn btn-info"> 先修课程 </button> </th> 
                </tr>  
            </thead>
            <tbody>
                <tr v-for="item in courses" :class="{'bg-info':item.highlight}"> 
                    <td> {{ item.course_id}} </td> 
                    <td> {{ item.course_code }} </td> 
                    <td> {{ item.course_name }} </td> 
                    <td> {{ item.course_score }} </td> 
                    <td> {{ item.course_opening }} </td> 
                    <td> {{ item.course_study_time }} </td> 
                    <td> {{ item.course_language }} </td> 
                    <td> {{ item.course_faculty }} </td> 
                    <td> {{ item.course_requirements }} </td> 
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'MajorCoursesViewRight',
    data(){
        return {
            info:["课程分数(显示)","课程分数(关闭)"],
            courses:[
                {   
                    course_id: 1,
                    course_code: "CS203",
                    course_name: "Computer Network",
                    course_score: 2,
                    course_opening: "春/秋",
                    course_study_time: "大二 下",
                    course_language: "English",
                    course_faculty: "计算机系/CS",
                    course_requirements: "无",
                    course_my_major: false, 
                    highlight: false,
                },
                {   
                    course_id: 2,
                    course_code: "CS203",
                    course_name: "Computer Network",
                    course_score: 2,
                    course_opening: "春/秋",
                    course_study_time: "大二 下",
                    course_language: "English",
                    course_faculty: "计算机系/CS",
                    course_requirements: "无",
                    course_my_major: false, 
                    highlight: false,
                },

            ],
        };
    },
}
</script>

<style scoped lang="less">
table{
    width: 100%;
    overflow: auto;
}
</style>
