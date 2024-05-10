const fs = require('fs');

fs.readFile("a.txt", "utf8", function(err, data){
  console.log(data);
});

console.log("after reading file");//will execute first
