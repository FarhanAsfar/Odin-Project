

const express = require("express");
const app = express();
const port = 3001

app.get('/', function(req,res){
    res.send('Hello World :D!');
});

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`);
});