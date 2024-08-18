const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config");

function adminMiddleware(req, res, next){
    //validate admin
    const token = req.headers.authorization;

    if(!token){
        return res.status(403).json({
            message: "No token found"
        });
    }

    const words = token.split(' ');
    const jwtToken = words[1];

    try{
        const decodedToken = jwt.verify(jwtToken, jwt_secret);

        if(decodedToken.username){
            next();
        }
        else{
            res.status(403).json({
                message: "You are not authorized!"
            });
        }
    } catch(err){
        res.status(403).json({
            message: "Invalid token"
        });
    }
}

module.exports = adminMiddleware;