const AppError = require('../errors/AppError')
const HTTP_STATUS = require('../constants/httpStatus')
module.exports = (schema) => {

    return (req, res, next) => {

        const { error } = schema.validate(req.body);

        if (error) {

            return next(

                new AppError(

                    error.details[0].message,

                    HTTP_STATUS.BAD_REQUEST

                )

            );

        }

        next();

    };

};