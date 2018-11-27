const express = require("express");
const router = express.Router();
const Reader = require("../../fake_json/reader");
const reader = new Reader();

router.get("/",(req,res)=>{
    let data = reader.getJson("./fake_json/home.json")
    res.json(data);
    res.end();
})


module.exports = router;