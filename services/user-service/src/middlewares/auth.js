const jwt = require('jsonwebtoken');

function authenticateUser(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token missing"
        });
    }

    const token = authHeader.split(' ')[1];

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid token"
        });

    }
}

function authorizeAdmin(req,res,next){
    if(req.user.role !== 'ADMIN'){
        return res.status(403).json({
            message: 'Access Denied. Admin Only'
        })
    }

    next()
}

module.exports = {
    authenticateUser,
    authorizeAdmin
}