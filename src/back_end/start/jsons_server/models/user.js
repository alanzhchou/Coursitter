const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const userSchema = new Schema({
    id:{
        type: Number,
    },
    avatar_src:{
        type: String,
    },
    name:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    nickname:{
        type: String,
    },
    eamil:{
        type: Number,
    },
    sex:{
        type: String,
    },
    major:{
        type: String,
    },
    introduction:{
        type: String,
    },
    cas_account:{
        type: String,
    },
    cas_password:{
        type: String,
    },
    courses:{
        type : Array,
    }
})

module.exports = User = mongoose.model("user",userSchema,"user")
