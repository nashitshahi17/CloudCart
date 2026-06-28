const axios = require("axios");
const AppError = require("../errors/AppError");
const HTTP_STATUS = require("../constants/httpStatus");

const api = axios.create({
    baseURL: process.env.PRODUCT_SERVICE_URL,
    timeout: 5000
});

async function getProductById(productId){
    try{
        const response = await api.get( `/internal/products/${productId}`);
        return response.data.data;
    }
    catch(error){
        if(error.response){
            throw new AppError(
                error.response.data.message ||
                "Product not found",
                error.response.status
            );
        }
        throw new AppError(
            "Product Service Unavailable",
            HTTP_STATUS.SERVICE_UNAVAILABLE
        );
    }
}

async function getProductsByIds(productIds){
    try{
        const response= await api.post( "/internal/products/bulk",{productIds});
        return response.data.data;
    }
    catch(error){
        throw new AppError(
            "Products Services Unavailable",
            HTTP_STATUS.SERVICE_UNAVAILABLE
        )
    }

}

async function validateProducts(items){
    try{
        const response = await api.post("/internal/products/validate",{items});
        return response.data.data;
    }
    catch(error){
        if(error.response){
            throw new AppError(error.response.data.message,error.response.status);
        }
        throw new AppError("Product Service Unavailable",HTTP_STATUS.SERVICE_UNAVAILABLE);
    }
}

module.exports={
    getProductById,
    getProductsByIds,
    validateProducts
};