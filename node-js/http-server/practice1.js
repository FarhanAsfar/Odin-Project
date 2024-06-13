const fs = require('fs');

console.log("start reading the content of the file...");

const data = fs.readFile('./log.txt', 'utf-8', (err,res)=>{
    if(err){
        console.error(err);
    }else{
        console.log(res);
    }
});
//console.log(data);

console.log('2');