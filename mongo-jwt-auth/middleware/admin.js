const jwt = require("jsonwebtoken");
const {jwt_secret} = require("../config");

function adminMiddleware(req, res, next){
    //validate admin
    const token = require.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1];

    const decodedToken = jwt.verify(jwtToken, jwt_secret);

    if(decodedToken.username){
        next();
    }
    else{
        res.status(403).json({
            message: "You are not authorized!"
        });
    }
}

module.exports = adminMiddleware;