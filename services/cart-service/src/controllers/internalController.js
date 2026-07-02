const cartService = require("../services/cartService");
const catchAsync = require("../utils/catchAsync");
const { successResponse } = require("../utils/response");
const HTTP_STATUS = require("../constants/httpStatus");
const MESSAGES = require("../constants/messages");

const handleGetCart = catchAsync(async (req, res) => {

    const cart = await cartService.getCart(req.params.userId);

    return successResponse(
        res,
        HTTP_STATUS.OK,
        MESSAGES.CART.FETCH_SUCCESS,
        cart
    );

});

const handleClearCart = catchAsync(async (req, res) => {

    await cartService.clearCart(req.params.userId);

    return successResponse(
        res,
        HTTP_STATUS.OK,
        MESSAGES.CART.CLEAR_SUCCESS
    );

});

module.exports = {

    handleGetCart,

    handleClearCart

};