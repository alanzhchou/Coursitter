const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const majorSchema = new Schema({
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    faculty_id:{
        type: Number,
        required: true,
    },
    faculty_name:{
        type: String,
        required: true,
    },
    img_src:{
        type: String,
        required: true,
    },
    discription:{
        type: String,
    },
})

module.exports = Major = mongoose.model("major",majorSchema,"major")
