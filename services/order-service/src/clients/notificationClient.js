const axios = require("axios");

const AppError = require("../errors/AppError");
const HTTP_STATUS = require("../constants/httpStatus");

const api = axios.create({

    baseURL: process.env.NOTIFICATION_SERVICE_URL,

    timeout: 5000

});

async function createNotification(notificationData, token) {

    try {
        const response = await api.post(

            "/",

            notificationData,
            {
                headers: {
                    Authorization: token
                }
            }

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