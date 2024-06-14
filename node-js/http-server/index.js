const http = require("http");
const fs = require("fs");
const url = require("url");



const myServer = http.createServer((req, res) => {
    //console.log(req.headers);
    const log = `${Date.now()}: ${req.url} New Req. received\n`;
    const myUrl = url.parse(req.url);

    if(req.url === "/favicon.ico")
        return res.end();
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
