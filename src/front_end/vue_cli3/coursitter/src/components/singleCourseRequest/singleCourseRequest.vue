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
                            <th> <button class="btn btn-info"> 序号 </button> </th> 
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
                            <td> {{ item.course_id}} </td> 
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
                                    <input type="checkbox" :id="item.course_id" :checked="item.checked"/>    
                                    <label :for="item.course_id"><em></em></label>
                                </div>
                            </td> 
                            <td> {{ item.checked_info }} </td>  
                        </tr>
                        <tr class="table-info request">
                            <td> -1 </td> 
                            <td>                                     
                                <input type="text" id="request_course_code" placeholder="course_code" class="form-control mx-auto request_input"/>    
                                <label for="request_course_code"><em></em></label>
                            </td> 
                            <td>                                     
                                <input type="text" id="request_course_name" placeholder="course_name" class="form-control mx-auto request_input"/>    
                                <label for="request_course_name"><em></em></label>
                            </td> 

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td>                                     
                                <button id="request_course_test" class="btn btn-outline-warning mx-auto"> 提交查询 </button>    
                            </td> 
                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        匹配结果
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">课程 1</a>
                                        <a class="dropdown-item" href="#">课程 2</a>
                                        <a class="dropdown-item" href="#">课程 3</a>
                                    </div>
                                </div>
                            </td>
                            <td> 
                                <div class="switch">
                                    <input type="checkbox" id="request_check"/>    
                                    <label for="request_check"><em>存在</em></label>
                                </div>
                            </td> 
                            <td> 
                                <button class="btn btn-success"> 添加查询课程 </button>
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
    props:{
        courses: Array,
    }
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
