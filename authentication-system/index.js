const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const port = 3002;

const users = []; //user database
app.use(express.json());


app.post('/register', async(req, res)=>{
    const {email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    
    users.push({email, password: hashedPassword});

    res.status(201).json({
        message: "User registered"
    });
});


app.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    const user = users.find(user => user.email === email);

    if(!user){
        return res.status(400).json({
            message: "User not found!"
        });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(!passwordMatch){
        return res.status(400).json({
            message: "Invalid credentials"
        });
    }
    //generate jwt
    const token = jwt.sign({email: user.email}, 'secretkey', {expiresIn:'1h'});

    res.json({
        token
    });
});

//middleware to verify jwt
function authenticationToken(req, res, next){
    const token = req.header('Authorization')?.split(' ')[1];

    if(!token){
        return res.status(401).json({
            message: "Access denied"
        });
    }

    try{
        const verified = jwt.verify(token, 'secretkey');
        req.user = verified;
        next();
    }catch(error){
        res.status(400).json({
            message: "Invalid token"
        });
    }
}

app.get('/user', authenticationToken, (req, res)=>{
    res.json({
        message: `Welcome, ${req.user.email}`
    });
});


app.listen(port, ()=>{
    console.log(`Port ${port} is running..`)
});