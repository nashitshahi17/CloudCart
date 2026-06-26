const { errorResponse } = require('../utils/response')

function errorHandler(err,req,res,next){
    const statusCode = err.statusCode || 500

    return errorResponse(
        res,
        statusCode,
        err.message || "Internal Server Error"
    )
}

module.exports = errorHandler