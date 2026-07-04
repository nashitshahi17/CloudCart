const notificationRepository = require("../repositories/notificationRepository");
const notificationProcessor = require("./notificationProcessor");

const AppError = require("../errors/AppError");
const HTTP_STATUS = require("../constants/httpStatus");
const NOTIFICATION_STATUS = require("../constants/notificationStatus");

async function createNotification(notificationData) {

    const {

        userId,

        title,

        message,

        type

    } = notificationData;

    if (!userId || !title || !message || !type) {

        throw new AppError(

            "Missing notification information",

            HTTP_STATUS.BAD_REQUEST

        );

    }

    const notification = await notificationRepository.create({

        userId,

        title,

        message,

        type,

        status: NOTIFICATION_STATUS.PENDING

    });

    const result = await notificationProcessor.sendNotification(notification);

    const updatedNotification = await notificationRepository.update(

        notification._id,

        {

            status: result.status

        }

    );

    return updatedNotification;

}

async function getNotification(id) {

    const notification = await notificationRepository.findById(id);

    if (!notification) {

        throw new AppError(

            "Notification not found",

            HTTP_STATUS.NOT_FOUND

        );

    }

    return notification;

}

async function getUserNotifications(userId) {

    return await notificationRepository.findByUserId(userId);

}

module.exports = {

    createNotification,

    getNotification,

    getUserNotifications

};