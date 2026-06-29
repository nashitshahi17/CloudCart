const AppError = require('../errors/AppError')

function validateRegisterUser(data){
    const {name,email,password} = data

     if (!name || !email || !password) {
        throw new AppError(
            "Name, Email and Password are required",
            400
        );
    }

     if (typeof name !== "string") {
        throw new AppError(
            "Name must be a string",
            400
        );
    }

    if (name.trim().length < 3) {
        throw new AppError(
            "Name must contain at least 3 characters",
            400
        );
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new AppError(
            "Invalid email format",
            400
        );
    }

    if (password.length < 6) {
        throw new AppError(
            "Password must contain at least 6 characters",
            400
        );
    }
}

function validateLoginUser(data){

    const { email, password } = data;

    if(!email || !password){

        throw new AppError(
            "Email and Password are required",
            400
        );

    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){

        throw new AppError(
            "Invalid email format",
            400
        );

    }

}

function validateUpdateUser(data){

    if(Object.keys(data).length === 0){

        throw new AppError(
            "Update data cannot be empty",
            400
        );

    }

}

module.exports = {
    validateRegisterUser,
    validateLoginUser,
    validateUpdateUser
};