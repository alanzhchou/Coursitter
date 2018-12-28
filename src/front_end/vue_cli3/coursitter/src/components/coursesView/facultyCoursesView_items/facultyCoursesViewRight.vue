<template>
    <div class="main">
        <table class="table table-hover table-sm table-responsive-sm">
            <thead>
                <tr> 
                    <th v-show="false"> <button class="btn btn-info"> 序号 </button> </th> 
                    <th> <button class="btn btn-info"> 代码 </button> </th> 
                    <th> <button class="btn btn-info"> 课程名称 </button> </th> 
                    <th> <button class="btn btn-info"> 学分 </button> </th> 
                    <th> <button class="btn btn-info"> 开课学期 </button> </th> 
                    <th> <button class="btn btn-info"> 建议时间 </button> </th> 
                    <th> <button class="btn btn-info"> 授课语言 </button> </th> 
                    <th> <button class="btn btn-info"> 院系 </button> </th> 
                    <th> <button class="btn btn-info"> 先修课程 </button> </th> 
                    <th> <button class="btn btn-info"> 选修测试 </button> </th> 
                    <th> <button class="btn btn-info"> 测试结果 </button> </th> 
                </tr>  
            </thead>
            <tbody>
                <tr v-for="item in courses" :class="{'bg-info':item.highlight}"> 
                    <td v-show="false"> {{ item.course_id}} </td> 
                    <td> {{ item.course_code }} </td> 
                    <td> {{ item.course_name }} </td> 
                    <td> {{ item.course_score }} </td> 
                    <td> {{ item.course_opening }} </td> 
                    <td> {{ item.course_study_time }} </td> 
                    <td> {{ item.course_language }} </td> 
                    <td> {{ item.course_faculty }} </td> 
                    <td> {{ item.course_requirements }} </td> 
                    <td> 
                        <div class="switch">
                            <input type="checkbox" :id="item.course_id" :checked="item.checked" @change="request(item.course_id)"/>    
                            <label :for="item.course_id"><em></em></label>
                        </div>
                    </td> 
                    <td> {{ item.checked_info }} </td> 
                </tr>
            </tbody>
        </table>
        <span class="text-info"> 共 {{ courses.length }} 条 </span>
    </div>
</template>

<script>
export default {
    name: 'FacultyCoursesViewRight',
    props:{
        courses: Array,
    },
    methods:{
        request(value){
            this.$store.dispatch("courses/set_request_info",value);
        }
    }
}
</script>

<style scoped lang="less">
table{
    width: 100%;
    overflow: auto;
}

</style>
