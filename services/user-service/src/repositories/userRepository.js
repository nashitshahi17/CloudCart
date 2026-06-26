const User = require('../models/user')

async function createUser(userData) {
    return await User.create(userData)
}

async function findUserByEmail(email) {
    return await User.findOne({email})
}

async function findUserById(userId) {
    return await User.findById(userId)
}

async function updateUser(userId,updateData) {
    return await User.findByIdAndUpdate(userId,updateData,{new: true, runValidators: true})
}

async function deleteUser(userId) {
    return await User.findByIdAndDelete(userId)
}

module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
    updateUser,
    deleteUser
}