const express = require("express");

const app = express();

const users = [{
    name: "Alice",
    kidney: [{
        healthy: false,
    }],
}];

app.get("/", function(req, res){
    const aliceKidney = users[0].kidney;
    const kidneyNo = aliceKidney.length; 
    let healthyKidney = 0;

    for(let i=0; i<aliceKidney.length; i++){
        if(aliceKidney[i].healthy){
            kidneyNo = healthyKidney+1;
        }
    }
    const unhealthyKidney = kidneyNo - healthyKidney;

    res.json({
        aliceKidney,
        healthyKidney,
        unhealthyKidney
    })

    console.log(aliceKidney);
});

app.listen(3000);