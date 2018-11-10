<template>
	<div class="container-fluid bg-light">
            <!-- title -->
        <div class="row title">
            <div class="col-xs-2 offset-xs-5 col-sm-2 offset-sm-5 col-md-2 offset-md-5 col-lg-2 offset-lg-5">
                <button class="btn btn-outline-danger"> {{ info['title_name'] }} courses </button>
            </div>
        </div>
        <div class="row body">
            <div class="col-xs-2 offset-xs-1 col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1">
                <div class="facultyCoursesViewLeft">
                    <img :src="info['img_src']" :alt="info['title_name']" class="rounded img-thumbnail"/>
                    <textarea class="form-control" rows="5" readonly> {{ info['discribe'] }} </textarea>
                </div>
            </div>
            
            <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <div class="facultyCoursesViewMid">
                    <div class="type">
                        <button v-for="item in courses_types" :key="item.index" 
                                :class="{'mx-auto rounded-circle btn-info':true, 'btn-danger': item.id === courses_type_selected_id}"
                                @click="changeType(item.id)">  {{ item.type }}
                        </button> </br>
                        <form @submit.prevent="change_study_year_courses">
                            <label> 
                                <input type="text" name="year" placeholder="学年" v-model="study_year"/>年
                            </label> 
                        </form>
                    </div>
                    <!--
                    <button :class="{'btn':true, 'btn-dark': true}" title="高亮我学过的课程">
                        高 亮
                    </button>
                    -->
                </div>
            </div>
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <majorCoursesViewRight :courses="courses" /> 
            </div>
        </div>
	</div>
</template>

<script>
import MajorCoursesViewRight from "./majorCoursesView_items/majorCoursesViewRight.vue";

export default {
    name: 'MajorCoursesView',
    computed:{
        info(){
            return this.$store.state.majorCourses.info;
        },
        courses_types(){
            return this.$store.state.majorCourses.courses_types;
        },
        courses_type_selected_id(){
            return this.$store.state.majorCourses.courses_types_selected_id;
        },
        study_year:{
            get(){
                return this.$store.state.majorCourses.study_year;
            },
            set(value){
                this.$store.commit("majorCourses/update_study_year",value);
            }
        },
        courses(){
            return this.$store.state.majorCourses.show_courses;
        }
    },
    methods:{
        changeType(value){
            this.$store.commit("majorCourses/update_courses_types_selected",value);
            this.$store.commit("majorCourses/update_show_courses");
        },
        change_study_year_courses(){
            this.$store.dispatch("majorCourses/set_study_year_courses");
        }
    },
    created() {
        this.$store.dispatch("majorCourses/set_faculty_courses_types");
        this.$store.dispatch("majorCourses/set_study_year_courses");
        this.$store.dispatch("majorCourses/set_show_courses");
    },
    components:{
        "majorCoursesViewRight": MajorCoursesViewRight,
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

    .facultyCoursesViewLeft{
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

    .facultyCoursesViewMid{
        .type{
            >button{
                width : 70%;
                height: 35px;
                margin-bottom: 20px;
                box-shadow: 1px 1px 1px;
                border: 2px outset gray;
            }
            input{
                width : 50px;
            }
        }
    }
}
</style>
