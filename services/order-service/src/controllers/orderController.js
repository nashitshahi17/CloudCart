const orderService = require("../services/orderService");
const catchAsync = require("../utils/catchAsync");
const { successResponse } = require("../utils/response");
const HTTP_STATUS = require("../constants/httpStatus");
const MESSAGES = require("../constants/messages");

const handleCreateOrder = catchAsync(async (req, res) => {

    const order = await orderService.createOrder(req.user.id,req.body,req.headers.authorization);

    return successResponse(res,HTTP_STATUS.CREATED,MESSAGES.ORDER.CREATE_SUCCESS,order);

});


const handleGetUserOrders = catchAsync(async (req, res) => {

    const orders = await orderService.getUserOrders(req.user.id,req.query);

    return successResponse(res,HTTP_STATUS.OK,MESSAGES.ORDER.FETCH_SUCCESS,orders);

});

const handleGetOrder = catchAsync(async (req, res) => {

    const order = await orderService.getOrderById(req.params.id, req.user.id, req.user.role);

    return successResponse(res,HTTP_STATUS.OK,MESSAGES.ORDER.FETCH_SUCCESS,order);

});

const handleUpdateOrderStatus = catchAsync(async (req, res) => {

    const updatedOrder =await orderService.updateOrderStatus(req.params.id,req.body.status);
    return successResponse(res,HTTP_STATUS.OK,MESSAGES.ORDER.UPDATE_SUCCESS,updatedOrder);
});

const handleDeleteOrder = catchAsync(async (req, res) => {
    await orderService.deleteOrder(req.params.id);
    return successResponse(res,HTTP_STATUS.OK,MESSAGES.ORDER.DELETE_SUCCESS);
});

module.exports = {
    handleCreateOrder,
    handleGetUserOrders,
    handleGetOrder,
    handleUpdateOrderStatus,
    handleDeleteOrder
};