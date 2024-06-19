const express = require("express");

const app = express();

const users = [{
    name: "Alice",
    kidney: [{
        healthy: false,
    }],
}];

app.use(express.json());

app.get("/", function(req, res){
    const aliceKidney = users[0].kidney;
    const kidneyNo = aliceKidney.length; 
    let healthyKidney = 0;

    for(let i=0; i<aliceKidney.length; i++){
        if(aliceKidney[i].healthy){
            healthyKidney = healthyKidney+1;
        }
    }
    const unhealthyKidney = kidneyNo - healthyKidney;

    res.json({
        kidneyNo,
        healthyKidney,
        unhealthyKidney
    })

    console.log(aliceKidney);
});

app.post("/", function(req,res){
    const isHealthy =req.body.isHealthy;

    users[0].kidney.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req,res){
    for(let i=0; i<users[0].kidney.length; i++){
        users[0].kidney[i].healthy = true;
    }
    res.json({});
})

app.listen(3000);