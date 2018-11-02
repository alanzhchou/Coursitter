<template>
    <div class="main">
        <div class="major" v-if="type === 'major'">
            <button v-for="item in major_courses_types" :class="{'mx-auto rounded-circle btn-info':true, 'btn-danger':item.selected}" 
                @click="majorChangeType">
                {{ item.type }}
            </button> </br>
            <label v-if="type === 'major'"> 
                <input type="text" placeholder="2018"/>
                年
            </label>
        </div>

        <div class="faculty" v-if="type === 'faculty'">
            <button v-for="item in faculty_courses_types" :class="{'mx-auto rounded-circle btn-info':true, 'btn-danger':item.selected}" 
                @click="facultyChangeType">
                {{ item.type }}
            </button>
        </div>

        <button :class="{'btn':true, 'btn-dark':!highlight, 'btn-success':highlight}" @click="changeHighlight" title="高亮我学过的课程">
            高 亮
        </button>
    </div>
</template>

<script>
export default {
    name: 'CoursesViewMid',
    props:{
        type: String,
    },
    data(){
        return {
            highlight: false,
            selected_id: 1,
            major_courses_types:[
                {   
                    id:1,
                    type:"基础",
                    selected: true,
                },
                {   
                    id:2,
                    type:"必修",
                    selected: false,
                },               
                {   
                    id:3,
                    type:"选修",
                    selected: false,
                }
            ],
            faculty_courses_types:[
                {   
                    id:1,
                    type:"全部",
                    selected: true,
                },
                {   
                    id:2,
                    type:"大一",
                    selected: false,
                },               
                {   
                    id:3,
                    type:"大二",
                    selected: false,
                },
                {   
                    id:4,
                    type:"大三",
                    selected: false,
                },
                {   
                    id:5,
                    type:"大四",
                    selected: false,
                }
            ],
        } 
    },
    methods:{
        majorChangeType(event){
            for(let i=0; i<this.major_courses_types.length; i++){
                if(this.major_courses_types[i].type === event.target.innerText){
                    this.selected_id = this.major_courses_types[i].id;
                    this.major_courses_types[i].selected = true;
                }else{
                    this.major_courses_types[i].selected = false;
                }
            }
        },
        facultyChangeType(event){
            for(let i=0; i<this.faculty_courses_types.length; i++){
                if(this.faculty_courses_types[i].type === event.target.innerText){
                    this.selected_id = this.faculty_courses_types[i].id;
                    this.faculty_courses_types[i].selected = true;
                }else{
                    this.faculty_courses_types[i].selected = false;
                }
            }
        },
        changeHighlight(){
            this.highlight = !this.highlight;
            console.log(this.highlight);
        },
    }
}
</script>

<style scoped lang="less">
.main{
    .major{
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
    .faculty{
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
</style>
