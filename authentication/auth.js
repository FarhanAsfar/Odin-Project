const jwt = require("jsonwebtoken");

//generate, decode, verify

const value = {
    name: "Farhan",
    accountNumber: 1234
}

const token = jwt.sign(value, "secret");
//this token has been generated using this 'secret'
console.log(token);


const verifyToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFyaGFuIiwiYWNjb3VudE51bWJlciI6MTIzNCwiaWF0IjoxNzIzMzg1NzUwfQ.U_Rsza_0HclqddCJsCpBvHT6kZkdMGFXuCv7EW85xQM", "secret");

console.log(verifyToken); 