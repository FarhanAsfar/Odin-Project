const fs = require('fs');

//synchronous call
//fs.writeFileSync('./test.txt', 'hello node');


//Asynchronous call
fs.writeFile('./test.txt', 'hello async', (err)=>{});
