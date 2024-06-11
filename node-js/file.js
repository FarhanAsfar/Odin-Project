const fs = require('fs');

//synchronous call
//fs.writeFileSync('./test.txt', 'hello node');


//Asynchronous call
fs.writeFile('./test.txt', 'hello async', (err)=>{}) ; //create and write a file.



const result = fs.readFileSync('./contact.txt', 'utf-8');//read file
console.log(result);