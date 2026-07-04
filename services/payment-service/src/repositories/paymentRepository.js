const Payment = require("../models/paymentModel");

async function create(paymentData) {

    return await Payment.create(paymentData);

}

async function findById(id) {

    return await Payment.findById(id);

}

async function findByOrderId(orderId) {

    return await Payment.findOne({ orderId });

}

async function findByTransactionId(transactionId) {

    return await Payment.findOne({ transactionId });

}

async function update(id, updateData) {

    return await Payment.findByIdAndUpdate(

        id,

        updateData,

        { new: true }

    );

}

async function deleteById(id) {

    return await Payment.findByIdAndDelete(id);

}

module.exports = {

    create,

    findById,

    findByOrderId,

    findByTransactionId,

    update,

    deleteById

};