const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const courseSchema = new Schema({
    semester:{
        type: String,
        required: true,
    },
    faculty:{
        type: String,
        // required: true,
    },
    code:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    credit:{
        type: String,
        // required: true,
    },
    hours:{
        type: String,
        // required: true,
    },
    type:{
        type: String,
    },
    xing_zhi:{
        type: String,
    },
    shu_xing:{
        type: String,
    },
    state:{
        type: String,
    },
    discription:{
        type: String,
    },
    requirements:{
        type: String,
    },
})

module.exports = Course = mongoose.model("course",courseSchema,"course")
