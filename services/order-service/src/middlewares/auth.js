const jsonwebtoken = require('jsonwebtoken')

async function authenticateUser(req,res,next){

    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({
            message: "Token Missing"
        })
    }

    const token = authHeader.split(' ')[1]
}