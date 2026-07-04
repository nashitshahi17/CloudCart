const paymentService = require("../services/paymentService");

const catchAsync = require("../utils/catchAsync");

const { successResponse } = require("../utils/response");

const HTTP_STATUS = require("../constants/httpStatus");

const MESSAGES = require("../constants/messages");

const handleCreatePayment = catchAsync(async (req, res) => {

    const payment = await paymentService.createPayment(req.body);

    return successResponse(

        res,

        HTTP_STATUS.CREATED,

        MESSAGES.PAYMENT.CREATE_SUCCESS,

        payment

    );

});

const handleGetPayment = catchAsync(async (req, res) => {

    const payment = await paymentService.getPayment(req.params.id);

    return successResponse(

        res,

        HTTP_STATUS.OK,

        MESSAGES.PAYMENT.FETCH_SUCCESS,

        payment

    );

});

const handleGetPaymentByOrder = catchAsync(async (req, res) => {

    const payment = await paymentService.getPaymentByOrder(

        req.params.orderId

    );

    return successResponse(

        res,

        HTTP_STATUS.OK,

        MESSAGES.PAYMENT.FETCH_SUCCESS,

        payment

    );

});

module.exports = {

    handleCreatePayment,

    handleGetPayment,

    handleGetPaymentByOrder

};