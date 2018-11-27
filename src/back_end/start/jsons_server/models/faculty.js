const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const facultySchema = new Schema({
    name:{
        type : String,
        required : true,
    },
    query_code:{
        type : String,
    },
    home_link:{
        type : String,
    },
    avater_url:{
        type : String,
        required : true,
    },
    discription:{
        type : String,
    },
    majors:{
        type : Array,
    },
    courses:{
        type : Array,
    },
    id:{
        type : Number,
        required : true,
    },
})

module.exports = Faculty = mongoose.model("faculty",facultySchema,"faculty")
