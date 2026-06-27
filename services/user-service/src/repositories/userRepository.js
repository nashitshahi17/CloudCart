const User = require('../models/user')

async function create(userData) {
    return await User.create(userData)
}

async function findByEmail(email) {
    return await User.findOne({email})
}

async function findById(userId) {
    return await User.findById(userId)
}

async function findAll({filter = {},sort = {},select = "",skip = 0,limit = 10}) {
    return await User.find(filter)
        .select(select)
        .sort(sort)
        .skip(skip)
        .limit(limit);
}


async function updateUser(userId,updateData) {
    return await User.findByIdAndUpdate(userId,updateData,{new: true, runValidators: true})
}

async function deleteUser(userId) {
    return await User.findByIdAndDelete(userId)
}

async function countDocuments(filter = {}) {
    return await User.countDocuments(filter);
}

module.exports = {
    create,
    findByEmail,
    findById,
    findAll,
    updateUser,
    deleteUser,
    countDocuments
}