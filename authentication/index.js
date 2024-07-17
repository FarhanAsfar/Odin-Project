const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "12345";

const app = express();

const users = [
    {
        username: 'abc@gmail.com',
        password: "123",
        first_name: "alice"
    },
    {
        username: "allen@gmail.com",
        password: "321",
        first_name: "allen"
    },
    {
        username: "james@gmail.com",
        password: "111",
        first_name: "james"
    },
];

function userExists(username, password){

}

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User does not exist"
        });
    }

    var token = jwt.sign({username: username }, "shhhhh");

    return res.json({
        token
    });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
    }
    catch(err){
        return res.status(403).json({
            msg: "Invalid token"
        });
    }
});

app.listen(3001);