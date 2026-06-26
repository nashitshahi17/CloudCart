const userRepository = require('../repositories/userRepository')
const { hashPassword, comparePasswords } = require('../utils/password')
const { generateToken } = require('../utils/jwt')
const ROLES = require('../constants/roles')
const { validateRegisterUser } = require('../validators/userValidator')

async function registerUser(userData) {
    validateRegisterUser(userData)
    const {name,email,password} = userData

    const existingUser = await findUserByEmail(email)

    if(existingUser){
        throw new AppError(
            "User already exists",
            409
        )
    }

    const hashedPassword = await hashPassword(password)

    const user = await createUser({
        name, email, password: hashedPassword,role: ROLES.USER
    })

    return user
}

async function loginUser(loginData) {
    const {email,password} = loginData

    const user = userRepository.findUserByEmail(email)

    if(!user){
        throw new AppError(
            "Invalid Email or Password",
            401
        )
    }

    const isMatch = await comparePasswords(password,user.password)

    if(!isMatch){
        throw new AppError(
            "Invalid Email or Password",
            401
        )
    }

    const token = generateToken({
        id: user._id,
        email: user.email,
        role: user.role
    })

    return {token,user}
}

async function getUserById(userId){
    const user = await userRepository.findUserById(userId)

    if(!user){
        throw new AppError(
            "User Not Found",
            404
        )
    }
    return user
}

async function updateUser(userId,updateData){
    const updatedUser = await userRepository.updateUser(userId,updateData)

    if(!updatedUser){
        throw new AppError(
            "User Not Found",
            404
        )
    }
    return updatedUser
}

async function deleteUser(userId) {
    const deletedUser = await userRepository.deleteUser(userId)

    if(!deletedUser){
        throw new AppError(
            "User Not Found",
            404
        )
    }
    return deleteUser
}

async function getProfile(userId){
    const user = await userRepository.findUserById(userId)

    if(!user){
        throw new AppError(
            "User Not Found",
            404
        )
    }
    return user
}

module.exports = {
    registerUser,
    loginUser,
    getUserById,
    updateUser,
    deleteUser,
    getProfile
};