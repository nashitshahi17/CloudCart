const ROLES = require('../constants/roles')
const { verifyToken } = require('../utils/jwt')
const { errorResponse } = require('../utils/response')

function authenticateUser(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return errorResponse(res,401,"Token missing");
    }

    const token = authHeader.split(' ')[1];

    try {

        const decoded = verifyToken(token)

        req.user = decoded;

        next();

    } catch (error) {

        return errorResponse(res,401,"Invalid token");

    }
}

function authorizeAdmin(req,res,next){
    if(req.user.role !== ROLES.ADMIN){
        return errorResponse(res,403,'Access Denied. Admin Only')
    }

    next()
}

module.exports = {
    authenticateUser,
    authorizeAdmin
}