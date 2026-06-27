const Product = require("../models/products");

async function create(productData) {
    return await Product.create(productData);
}

async function findById(productId) {
    return await Product.findById(productId);
}

async function findAll({
    filter = {},
    sort = {},
    select = "",
    skip = 0,
    limit = 10
}) {
    return await Product.find(filter)
        .select(select)
        .sort(sort)
        .skip(skip)
        .limit(limit);
}

async function update(productId, updateData) {
    return await Product.findByIdAndUpdate(
        productId,
        updateData,
        {
            new: true,
            runValidators: true
        }
    );
}

async function deleteById(productId) {
    return await Product.findByIdAndDelete(productId);
}

async function countDocuments(filter = {}) {
    return await Product.countDocuments(filter);
}

module.exports = {
    create,
    findById,
    findAll,
    update,
    deleteById,
    countDocuments
};