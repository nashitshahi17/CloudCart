const axios = require("axios");
const AppError = require("../errors/AppError");
const HTTP_STATUS = require("../constants/httpStatus");

const api = axios.create({
    baseURL: process.env.CART_SERVICE_URL,
    timeout: 5000
});

async function getCart(userId,token) {

    try {

        const response = await api.get(

            `/internal/cart/${userId}`,
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

                "Cart not found",

                error.response.status

            );

        }

        throw new AppError(

            "Cart Service Unavailable",

            HTTP_STATUS.SERVICE_UNAVAILABLE

        );

    }

}

async function clearCart(userId,token) {

    try {

        await api.delete(

            `/internal/cart/${userId}`,
            {
                headers:{
                    Authorization: token
                }
            }

        );

    }

    catch (error) {

        if (error.response) {

            throw new AppError(

                error.response.data.message ||

                "Unable to clear cart",

                error.response.status

            );

        }

        throw new AppError(

            "Cart Service Unavailable",

            HTTP_STATUS.SERVICE_UNAVAILABLE

        );

    }

}

module.exports = {

    getCart,

    clearCart

};