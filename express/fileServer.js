const express = require('express');
const fs = require('fs');
const path = require('path');
const port = 3000;
const app = express();

module.exports = app;

const directory = path.join(__dirname, 'files'); //get directory path

//Return list of files in a directory
app.get('/files', (req, res) => {
  fs.readdir(directory, (err, data) => {
    if(err){
      return res.status(500).json({
        Error: "Cannot connect directory: "+err
      });
    }
    res.json(data);
  });
});

//Return file content
app.get('/files/:fileName', (req, res) => {
  const directory = path.join(__dirname, 'files');
  const fileName = req.params.fileName;
  const filePath = path.join(directory, fileName);

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err){
      return res.status(404).send(
        "File not found!"
      )
    }
    res.send(data)
  });
});

app.all('*', (req, res) => {
  res.status(404).send('Route not found');
});

app.listen(port, ()=> {
  console.log(`Port: ${port} has started...`);
});