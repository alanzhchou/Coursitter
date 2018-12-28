const fs = require("fs");

function Reader(){
    this.getJson = (filename)=>{
        try {
            return JSON.parse(fs.readFileSync(filename).toString());
        } catch (error) {
            return {msg: "error"};
        }
    }
}

module.exports = Reader;