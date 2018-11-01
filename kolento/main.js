var fs = require('fs');
var data = fs.readFileSync('input.txt');

fs.readFile('input.txt',(err,data)=>{
    if(err){
        return console.error(err)
    }
    console.log(data.toString());
})


console.log('finished')