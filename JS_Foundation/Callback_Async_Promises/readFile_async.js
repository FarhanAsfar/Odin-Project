const fs = require('fs');

fs.readFile("a.txt", "utf8", function(err, data){
  if(err){
    console.log("Invalid File");
  }
  console.log(data);
});

console.log("after reading file");//will execute first

