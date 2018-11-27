const Parser = require("./parser")

const parser = new Parser();

let data = parser.parserMongoJson("faculties.json");

// for(let i=0; i<data.length; i++){
//     console.log(JSON.stringify(data[i]).toString());
// }