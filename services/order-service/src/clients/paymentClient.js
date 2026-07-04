const axios = require("axios");

const AppError = require("../errors/AppError");
const HTTP_STATUS = require("../constants/httpStatus");

const api = axios.create({

    baseURL: process.env.PAYMENT_SERVICE_URL,

    timeout: 5000

});

async function createPayment(paymentData,token) {

    try {

        const response = await api.post(

            "/api/payments",

            paymentData,
            {
                headers:{
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

                "Payment failed",

                error.response.status

            );

        }

        throw new AppError(

            "Payment Service Unavailable",

            HTTP_STATUS.SERVICE_UNAVAILABLE

        );

    }

}

module.exports = {

    createPayment

};