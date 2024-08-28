const express = require("express")
const fs = require("fs");
// const mongoose = require("mongoose");

const {logReqRes} = require("./middlewares");
const {connectMongoDb} = require("./connection");

const userRouter = require("./routes/user");

const app = express();
const Port = 3001;

//connection
connectMongoDb("mongodb://127.0.0.1:27017/mvc-test")

app.use(express.urlencoded({extended: false}));

app.use(logReqRes("log.txt"));

app.use("/user", userRouter);

app.listen(Port, ()=>{
    console.log(`Server is running: ${Port}`);
});
