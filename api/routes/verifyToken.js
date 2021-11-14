const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC,(err,user)=>{
            if(err) res.status(403).json("token is invalid");
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json("you're not auth'd")
    }
};

const verifyTokenAndAuthorized = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        } else {
            res.status(405).json("You're not alowed")
        }
    })
}

const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        } else {
            res.status(405).json("You're not alowed")
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorized, verifyTokenAndAdmin };