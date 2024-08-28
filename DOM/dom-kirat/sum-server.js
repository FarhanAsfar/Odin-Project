const express = require("express");
const cors = require("cors");
const app = express();

const Port = 3000;

app.use(cors());


app.get('/sum', (req, res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const sum =parseInt(a) + parseInt(b);

    res.send(`Sum: ${sum}`);
});


app.listen(Port, ()=>{
    console.log(`Server is running on port: ${Port}`);
});