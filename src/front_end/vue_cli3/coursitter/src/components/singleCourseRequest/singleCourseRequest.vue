<template>
    <div class="container-fluid">
        <div class="row title">
            <div class="col-xs-2 offset-xs-5 col-sm-2 offset-sm-5 col-md-2 offset-md-5 col-lg-2 offset-lg-5">
                <button class="btn btn-outline-success"> singleCourseRequest </button>
            </div>
        </div>
        <div class="row main">
            <div class="col-xs-10 offset-xs-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                <table class="table table-hover table-sm table-responsive-sm">
                    <thead>
                        <tr> 
                            <th v-show="false"> <button class="btn btn-info"> 序号 </button> </th> 
                            <th> <button class="btn btn-info"> 代码 </button> </th> 
                            <th> <button class="btn btn-info"> 课程名称 </button> </th> 
                            <th> <button class="btn btn-info"> 学分 </button> </th> 
                            <th> <button class="btn btn-info"> 曾开课 </button> </th> 
                            <th> <button class="btn btn-info"> 院系 </button> </th> 
                            <th> <button class="btn btn-info"> 先修课程 </button> </th> 
                            <th> <button class="btn btn-info"> 选修测试 </button> </th> 
                            <th> <button class="btn btn-info"> 测试结果 </button> </th> 
                            <th> <button class="btn btn-info"> 操作 </button> </th> 
                        </tr>  
                    </thead>
                    <tbody>
                        <tr v-for="item in courses" :key="item.index" :class="{'bg-info':item.highlight}"> 
                            <td v-show="false"> {{ item.course_id}} </td> 
                            <td> {{ item.code }} </td> 
                            <td> {{ item.name }} </td> 
                            <td> {{ item.credit }} </td> 
                            <td> {{ item.semester }} </td> 
                            <td> {{ item.faculty }} </td> 
                            <td> {{ item.requirements }} </td> 
                            <td> 
                                <div class="">
                                    <input type="checkbox" :id="item.course_id" :checked="item.checked" @change="request(item._id)"/>    
                                    <label :for="item.course_id"><em></em></label>
                                </div>
                            </td> 
                            <td> {{ item.checked_info }} </td>
                            <td> <button class="btn btn-danger" @click="delete_course(item.course_id)"> 删除 </button> </td>    
                        </tr>
                        <tr class="table-info request">
                            <td v-show="false"> -1 </td> 
                            <td>                                     
                                <input type="text" v-model="added_course.code" placeholder="code" class="form-control mx-auto request_input"/>    
                                <label for="request_course_code"><em></em></label>
                            </td> 
                            <td>                                     
                                <input type="text" v-model="added_course.name"  placeholder="name" class="form-control mx-auto request_input"/>    
                                <label for="request_course_name"><em></em></label>
                            </td> 

                            <td>
                                <!--
                                <input type="text" v-model="added_course_year" placeholder="year" class="form-control mx-auto request_input"/>    
                                <label for="request_course_name"><em></em></label>
                                -->
                            </td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>                            
                                <button id="request_course_test" class="btn btn-outline-warning mx-auto" @click="request_matched_courses"> 提交查询 </button>    
                            </td> 
                            <td>
                                <div class="switch">
                                    <input type="checkbox" id="request_check" :checked="temp_course.name" disabled/>    
                                    <label for="request_check"><em>存在</em></label>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoursesViewRight',
    computed:{
        courses(){
            return this.$store.state.singleCourseRequest.courses;
        },
        added_course(){
            return this.$store.state.singleCourseRequest.added_course;
        },
        temp_course(){
            return this.$store.state.singleCourseRequest.temp_course;
        },
    },
    methods:{
        request_matched_courses(){
            this.$store.dispatch("singleCourseRequest/request_matched_courses")
        },
        request(value){
            this.$store.dispatch("singleCourseRequest/set_request_info",value);
        },
        delete_course(value){
            this.$store.dispatch("singleCourseRequest/delete_course",value)
        }
    },
}
</script>

<style scoped lang="less">
.title{
    button{
        box-shadow: 2px 2px 2px;
        transition: all 1s;
    }
    button:hover{
        transform: scale(1.1);
        border: 2px outset gray;
    }
}

.main{
    margin-top: 20px;
    table{
        width: 100%;
        overflow: auto;
        .request{
            td{
                .request_input{
                    width: 80%;
                }
            }
        }
    }
}
</style>
