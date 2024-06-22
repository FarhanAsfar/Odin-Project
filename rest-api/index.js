const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const port = 3000;


app.get('/api/users', function(req,res){
    return res.json(users);
});

app.get('/users', function(req,res){
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`)}
    </ul>
    `; 
    res.send(html);
});

app. listen(port, ()=> console.log(`PORT:${port} has started...`));