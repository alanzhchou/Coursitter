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
                    </div>
                </div>
            </div>
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <facultyCoursesViewRight :courses="courses" /> 
            </div>
        </div>
	</div>
</template>

<script>
import FacultyCoursesViewRight from "./facultyCoursesView_items/facultyCoursesViewRight.vue";

export default {
    name: 'FacultyCoursesView',
    computed:{
        info(){
            return this.$store.state.courses.info;
        },
        courses_types(){
            return this.$store.state.courses.courses_types;
        },
        courses_type_selected_id(){
            return this.$store.state.courses.courses_types_selected_id;
        },
        courses(){
            return this.$store.state.courses.show_courses;
        }
    },
    methods:{
        changeType(value){
            this.$store.commit("courses/update_courses_types_selected",value);
            this.$store.commit("courses/update_show_courses");
        },
    },
    created() {
        this.$store.dispatch("courses/set_courses",this.$route.params.id);
        this.$store.dispatch("courses/set_show_courses");
    },
    components:{
        "facultyCoursesViewRight": FacultyCoursesViewRight,
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
