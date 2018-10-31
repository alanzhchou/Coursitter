<template>
    <div class="main">
        <button v-for="item in course_types" :class="{'mx-auto rounded-circle btn-info':true, 'btn-danger':item.selected}" 
            @click="changeType">
            {{ item.type }}
        </button> </br>
        <label> 
            <input type="text" placeholder="2018"/>
            年
        </label>
        <button :class="{'btn':true, 'btn-dark':!highlight, 'btn-success':highlight}" @click="changeHighlight" title="高亮我学过的课程">
            高 亮
        </button>
    </div>
</template>

<script>
export default {
    name: 'MajorCoursesViewMid',
    data(){
        return {
            highlight: false,
            selected_id: 1,
            course_types:[
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
        } 
    },
    methods:{
        changeType(event){
            for(let i=0; i<this.course_types.length; i++){
                if(this.course_types[i].type === event.target.innerText){
                    this.selected_id = this.course_types[i].id;
                    this.course_types[i].selected = true;
                }else{
                    this.course_types[i].selected = false;
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
</style>
