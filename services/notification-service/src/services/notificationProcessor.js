const NOTIFICATION_STATUS = require("../constants/notificationStatus");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendNotification(notification) {

    const delayMs = Number(
        process.env.NOTIFICATION_PROCESSING_DELAY || 1000
    );

    const successRate = Number(
        process.env.NOTIFICATION_SUCCESS_RATE || 0.98
    );

    await delay(delayMs);

    const isSuccessful = Math.random() < successRate;

    return {

        status: isSuccessful
            ? NOTIFICATION_STATUS.SENT
            : NOTIFICATION_STATUS.FAILED

    };

}

module.exports = {

    sendNotification

};