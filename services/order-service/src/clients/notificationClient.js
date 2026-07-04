const axios = require("axios");

const AppError = require("../errors/AppError");
const HTTP_STATUS = require("../constants/httpStatus");

const api = axios.create({

    baseURL: process.env.NOTIFICATION_SERVICE_URL,

    timeout: 5000

});

async function createNotification(notificationData) {

    try {

        const response = await api.post(

            "/api/notifications",

            notificationData

        );

        return response.data.data;

    }

    catch (error) {

        if (error.response) {

            throw new AppError(

                error.response.data.message ||

                "Notification failed",

                error.response.status

            );

        }

        throw new AppError(

            "Notification Service Unavailable",

            HTTP_STATUS.SERVICE_UNAVAILABLE

        );

    }

}

module.exports = {

    createNotification

};