const paymentRepository = require("../repositories/paymentRepository");

const paymentProcessor = require("./paymentProcessor");

const AppError = require("../errors/AppError");

const HTTP_STATUS = require("../constants/httpStatus");

const PAYMENT_STATUS = require("../constants/paymentStatus");

async function createPayment(paymentData) {

    const {

        orderId,

        userId,

        amount,

        method

    } = paymentData;

    if (!orderId || !userId || !amount || !method) {

        throw new AppError(

            "Missing payment information",

            HTTP_STATUS.BAD_REQUEST

        );

    }

    // Prevent duplicate payment

    const existingPayment =

        await paymentRepository.findByOrderId(orderId);

    if (existingPayment) {

        throw new AppError(

            "Payment already exists for this order",

            HTTP_STATUS.CONFLICT

        );

    }

    // Create pending payment

    const payment = await paymentRepository.create({

        orderId,

        userId,

        amount,

        method,

        transactionId: "PENDING",

        status: PAYMENT_STATUS.PENDING

    });

    // Simulate payment gateway

    const result =

        await paymentProcessor.processPayment(payment);

    // Update payment

    const updatedPayment =

        await paymentRepository.update(

            payment._id,

            {

                transactionId:

                    result.transactionId,

                status:

                    result.status

            }

        );

    return updatedPayment;

}   

async function getPayment(id) {

    const payment =

        await paymentRepository.findById(id);

    if (!payment) {

        throw new AppError(

            "Payment not found",

            HTTP_STATUS.NOT_FOUND

        );

    }

    return payment;

}

async function getPaymentByOrder(orderId) {

    const payment =

        await paymentRepository.findByOrderId(orderId);

    if (!payment) {

        throw new AppError(

            "Payment not found",

            HTTP_STATUS.NOT_FOUND

        );

    }

    return payment;

}

module.exports = {

    createPayment,

    getPayment,

    getPaymentByOrder

};