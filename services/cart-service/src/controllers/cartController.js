const cartService = require("../services/cartService");
const catchAsync = require("../utils/catchAsync");
const {successResponse} = require('../utils/response')
const HTTP_STATUS = require("../constants/httpStatus");

const addToCart = catchAsync(async (req, res) => {

    const { productId, quantity } = req.body;

    const cart = await cartService.addToCart(

        req.user.id,
        productId,
        quantity
    );

    return successResponse(res,HTTP_STATUS.CREATED,true,"Product added to cart successfully",cart);

});

const getCart = catchAsync(async (req, res) => {

    const cart = await cartService.getCart(req.user.id);

    return successResponse(res, HTTP_STATUS.OK,true,"Cart fetched successfully",cart);

});

const updateCartItem = catchAsync(async (req, res) => {

    const { quantity } = req.body;

    const { productId } = req.params;

    const cart = await cartService.updateCartItem(

        req.user.id,
        productId,
        quantity
    );

    return successResponse(res,HTTP_STATUS.OK,true,"Cart updated successfully",cart);

});

const removeCartItem = catchAsync(async (req, res) => {

    const { productId } = req.params;

    const cart = await cartService.removeCartItem(

        req.user.id,
        productId
    );

    return successResponse(res,HTTP_STATUS.OK,true,"Product removed from cart successfully", cart);

});

const clearCart = catchAsync(async (req, res) => {

    await cartService.clearCart(req.user.id);

    return successResponse(res, HTTP_STATUS.OK, true,"Cart cleared successfully");

});

module.exports = {

    addToCart,

    getCart,

    updateCartItem,

    removeCartItem,

    clearCart

};