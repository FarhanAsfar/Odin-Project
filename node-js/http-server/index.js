const http = require("http");
const fs = require("fs");



const myServer = http.createServer((req, res) => {
    //console.log(req.headers);
    const log = `${Date.now()}:New req. received\n`;
    fs.appendFile("log.txt",log, (err,data)=>{
        //res.end("hello from server");    
        switch (req.url){
            case "/":
                res.end("Homepage");
                break;
            case "/about":
                res.end("About Page");
                break;
            default:
                res.end("404 Not Found!");
        }
    })
    
});

myServer.listen(8000, ()=>console.log('server started'));
