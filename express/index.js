//creating a http server using express

const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("hello from server");
})

app.listen(3000);