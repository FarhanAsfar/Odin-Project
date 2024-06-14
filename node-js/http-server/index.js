const http = require("http");
const fs = require("fs");
const url = require("url");



const myServer = http.createServer((req, res) => {
    //console.log(req.headers);
    const log = `${Date.now()}: ${req.url} New Req. received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    if(req.url === '/favicon.ico')
        return res.end();
    fs.appendFile("log.txt",log, (err,data)=>{
        //res.end("hello from server");    
        switch (myUrl.pathname){
            case "/":
                res.end("Homepage");
                break;

            case "/search":
                const search = myUrl.query.search_query;
                res.end("Here are your results for "+search);

            case "/about":
                const qp = 
                res.end("I am Arnob");
                break;
                
            default:
                res.end("404 Not Found!");
        }
    })
    
});

myServer.listen(8000, ()=>console.log('server started'));
