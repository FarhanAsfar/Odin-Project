const express = require("express");
const app = express();

const Port = 3000;


app.post('/sum', (req, res)=>{
    const a = req.params.a;
    const b = req.params.b;
    const sum = parseInt(a) + parseInt(b);

    res.send(sum);
});


app.listen(Port, ()=>{
    console.log(`Server is running on port: ${Port}`);
});