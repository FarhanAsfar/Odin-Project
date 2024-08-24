const {User} = require("../db");
const jwt = require("jsonwebtoken");
const {jwt_secret} = require("../config");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = re.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1];

    const decodedToken = jwt.verify(jwtToken, jwt_secret);

    if(decodedToken.username){
        req.username = decodedToken.username;
        next();
    }else{
        res.status(403).json({
            message: "You are not authenticated"
        })
    }
}

module.exports = userMiddleware;