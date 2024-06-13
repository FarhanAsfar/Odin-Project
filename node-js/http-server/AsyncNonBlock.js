//Non-Blocking Ooperations with Promises and Async/Await

const fs = require('fs').promises;

console.log("start reading the file...");

//Non-Blocking Operations using Async/Await
async function readFile(){
    try{
        const data = await fs.readFile('./log.txt', 'utf-8');
        console.log(data);
    }catch(err){
        console.error(err);
    }
}

readFile();

console.log("This line is written at the end but will be printed before the file contents");