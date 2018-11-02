<template>
	<div class="container-fluid bg-light">
            <!-- title -->
        <div class="row title">
            <div class="col-xs-2 offset-xs-5 col-sm-2 offset-sm-5 col-md-2 offset-md-5 col-lg-2 offset-lg-5">
                <button class="btn btn-outline-dark"> Faculties View </button>
            </div>
        </div>
        <div class="row body">
            <div class="col-xs-10 offset-xs-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                <div class="row main">
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" v-for="item in faculties">
                        <router-link :to="'/faculty/' + item.faculty_id">
                            <img :src="item.faculty_img_src" :alt="item.faculty_name" class="img-thumbnail"/>
                        </router-link>
                        <div class="input-group  mx-auto">
                            <div class="input-group-prepend"> 
                                <span class="input-group-text"> 院系 </span>
                            </div>
                            <input type="text" class="form-control" placeholder="院系名称" v-model="item.faculty_name" readonly>
                            <div class="input-group-append"> 
                                <router-link :to="'/faculty/' + item.faculty_id + '/courses'">
                                    <span class="input-group-text bg-info"> 开课 </span>
                                </router-link>
                            </div>
                        </div>
                        <textarea rows="4" v-model="item.faculty_discribe" readonly></textarea>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    name: 'FacultiesView',
    props:{
        faculties: Array,
    }
}
</script>

<style scoped lang="less">
.title{
    margin-top:20px;
    button{
        box-shadow: 2px 2px 5px;
        transition: all 1s;
    }
    button:hover{
        transform: scale(1.1);
    }
}
.body{
    margin-top:20px;

    .main{
        >div{
            margin-bottom: 10px;
            box-shadow: 2px 2px 5px;
            padding: 10px;
            .input-group{
                margin-top: 20px;
                width: 80%;
            }
        }
        img{
            width: 80%;
            box-shadow: 2px 2px 5px;
            transition: all 0.5s;
        }
        img:hover{
            border-radius: 10%;
            transform: scale(1.1);
            box-shadow: 3px 3px 10px;
        }
        textarea{
            width: 80%;
            min-height: 100px;
            max-height: 100px;
        }
    }
}

</style>
