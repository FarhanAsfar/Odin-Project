const fs = require('fs');

function ReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", (err,data)=>{
            if(err){
                console.log('No such file');
                return;
            }
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data);
}

ReadFile().then(onDone);