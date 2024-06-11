const fs = require("fs");

//Synchronous---> BLOCKING REQUEST
fs.writeFileSync('./test.txt', 'Hello node js server');

//Asynchronous---> NON-BLOCKING REQUEST
fs.writeFile('./test.txt', 'Hello Async node js', (err)=>{});