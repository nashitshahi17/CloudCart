const notificationService = require("../services/notificationService");

const catchAsync = require("../utils/catchAsync");
const { successResponse } = require("../utils/response");

const HTTP_STATUS = require("../constants/httpStatus");
const MESSAGES = require("../constants/messages");

const handleCreateNotification = catchAsync(async (req, res) => {
    const notification = await notificationService.createNotification(req.body);

    return successResponse(
        res,
        HTTP_STATUS.CREATED,
        MESSAGES.NOTIFICATION.CREATE_SUCCESS,
        notification
    );

});

const handleGetNotification = catchAsync(async (req, res) => {

    const notification = await notificationService.getNotification(req.params.id);

    return successResponse(
        res,
        HTTP_STATUS.OK,
        MESSAGES.NOTIFICATION.FETCH_SUCCESS,
        notification
    );

});

const handleGetMyNotifications = catchAsync(async (req, res) => {

    const notifications = await notificationService.getUserNotifications(
        req.user.id
    );

    return successResponse(
        res,
        HTTP_STATUS.OK,
        MESSAGES.NOTIFICATION.FETCH_SUCCESS,
        notifications
    );

});

module.exports = {

    handleCreateNotification,
    handleGetNotification,
    handleGetMyNotifications
};