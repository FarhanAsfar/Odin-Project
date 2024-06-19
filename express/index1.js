const express = require("express");

const app = express();

const users = [{
    name: "Alice",
    kidney: [{
        healthy: false
    }],
}];

app.get("/", function(req, res){
    const aliceKidney = users[0].kidney;
    console.log(aliceKidney);
});

app.listen(3000);