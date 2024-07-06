const expresss = require("express");

const app = expresss();
const port = 3001;


app.get("/", function(req, res){
    return res.send("Home Page");
});

app.get("/about", function(req, res){
    return res.send("About page");
});


app.listen(port, function(){
    console.log(`Port: ${port} has started`);
});