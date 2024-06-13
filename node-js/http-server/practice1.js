const fs = require('fs');

console.log("start reading the content of the file...");

//Blocking Operations..
const data = fs.readFileSync('./log.txt', 'utf-8');
console.log(data);



//Non-Blocking Operations..
fs.readFile('./log.txt', 'utf-8', (err,res)=>{
    if(err){
        console.error(err);
    }else{
        console.log(res);
    }
});
//console.log(data);

console.log('2');