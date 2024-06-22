const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const port = 3000;


app.get('/users', function(req,res){
    return res.json(users);
})

app. listen(port, ()=> console.log(`PORT:${port} has started...`));