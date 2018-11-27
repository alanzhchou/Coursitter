const fs = require("fs");

function Parser(){
    this.parserMongoJson = (filename)=>{
        try {
            let data = fs.readFileSync(filename).toString().split("\n");
            data.pop();

            for(let i=0; i<data.length; i++){
                data[i] = JSON.parse(data[i]);
            }
        
            return data;
        } catch (error) {
            console.error(error);
            return {msg: "error"};   
        } 
    }
}

module.exports = Parser;