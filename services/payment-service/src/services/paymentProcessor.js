const PAYMENT_STATUS = require("../constants/paymentStatus");

/**
 * Simulates a real payment gateway.
 * Future: Replace this file with Stripe/Razorpay integration.
 */

function generateTransactionId() {

    return `TXN-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase()}`;

}

function delay(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

async function processPayment(payment) {

    // Simulate gateway latency
    await delay(process.env.PAYMENT_PROCESSING_DELAY || 2000);

    // 90% success rate
    const isSuccessful = Math.random() < process.env.PAYMENT_SUCCESS_RATE || 0.9;

    return {

        transactionId: generateTransactionId(),

        status: isSuccessful
            ? PAYMENT_STATUS.SUCCESS
            : PAYMENT_STATUS.FAILED

    };

}

module.exports = {

    processPayment

};