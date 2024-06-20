const expresss = require("express");

const app = expresss();

app.get("/", function(req, res){
    return res.send("Home Page");
});

app.get("/about", function(req, res){
    return res.send("About page");
});


app.listen(3000, function(){
    console.log("server started..!")
});