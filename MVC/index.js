const express = require("express")
const fs = require("fs");

const {logReqRes} = require("./middlewares");
const {connectMongoDb} = require("./connection");

const userRouter = require("./routes/user");

const app = express();
const Port = 3001;

//connection
connectMongoDb("mongodb://127.0.0.1:27017/mvc-test").then(()=>{
    console.log("MongoDB Connected");
})

app.use(express.urlencoded({extended: false}));

app.use(logReqRes("log.txt"));

app.use("/user", userRouter);

app.listen(Port, ()=>{
    console.log(`Server is running: ${Port}`);
});
