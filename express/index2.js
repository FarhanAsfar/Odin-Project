const express = require("express");
const fs = require("fs");
const app = express();

app.get("/file/:fileName", function(req,res){
    const fileName = req.params.fileName;
    console.log(fileName);

    fs.readFile(fileName, "utf-8", function(err, data){
        if(err){
            return res.status(500).json({
                status: 'unsuccessful',
                message: 'Could not read file'
            })
        }
        res.json({
            data
        })
    });
})


app.listen(3000);