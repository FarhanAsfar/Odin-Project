const http = require("http");

const myServer = http.createServer((req, res) => {
    console.log("new reqeuest received");
    res.end("hello from server");
});

myServer.listen(8000, ()=>console.log('server started'));
