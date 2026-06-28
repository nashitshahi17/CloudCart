const Order = require("../models/ordermodel");

async function create(orderData) {
    return await Order.create(orderData);
}

async function findById(orderId,select="") {
    return await Order.findById(orderId).select(select);
}

async function findAll({filter = {},sort = {},select = "",skip = 0,limit = 10}) {
    return await Order.find(filter)
        .select(select)
        .sort(sort)
        .skip(skip)
        .limit(limit);
}

async function findByUserId(userId,{sort = { createdAt: -1 },skip = 0,limit = 10} = {}) {
    return await Order.find({ userId })
        .sort(sort)
        .skip(skip)
        .limit(limit);
}

async function update(orderId, updateData) {
    return await Order.findByIdAndUpdate(orderId,updateData,{ new: true, runValidators: true });
}

async function deleteById(orderId) {
    return await Order.findByIdAndDelete(orderId);
}

async function countDocuments(filter = {}) {
    return await Order.countDocuments(filter);
}

module.exports = {
    create,
    findById,
    findAll,
    findByUserId,
    update,
    deleteById,
    countDocuments
};