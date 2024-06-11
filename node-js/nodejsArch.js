const fs = require("fs");

// //Synchronous---> BLOCKING REQUEST
// fs.writeFileSync('./test.txt', 'Hello node js server');

// //Asynchronous---> NON-BLOCKING REQUEST
// fs.writeFile('./test.txt', 'Hello Async node js', (err)=>{});


//BLOCKING Request
// console.log('1');
// const result = fs.readFileSync("contact.txt", "utf-8");
// console.log(result);
// console.log('2');


//Non-Blocking Request
console.log('1');
fs.readFile("contact.txt", "utf-8", (err, result)=>{
    console.log(result);
});
console.log('2'); //2 will be printed after 1 and before the file contents.
