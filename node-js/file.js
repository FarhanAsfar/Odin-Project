const fs = require('fs');

//synchronous call
//fs.writeFileSync('./test.txt', 'hello node');


//Asynchronous call
//fs.writeFile('./test.txt', 'hello async', (err)=>{}) ; //create and write a file.



// const result = fs.readFileSync('./contact.txt', 'utf-8');//read file
// console.log(result);



//read file
// fs.readFile('./contact.txt','utf-8', (err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// })


fs.appendFileSync("./test.txt", `hello\n`); 

//fs.cpSync('./test.txt', './copy.txt'); //create a copy of a file

fs.unlinkSync('./copy.txt');