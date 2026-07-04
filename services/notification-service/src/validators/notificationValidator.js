const Joi = require("joi");

const NOTIFICATION_TYPE = require("../constants/notificationType");

const createNotificationSchema = Joi.object({

    userId: Joi.string().required(),

    title: Joi.string()
        .trim()
        .required(),

    message: Joi.string()
        .trim()
        .required(),

    type: Joi.string()
        .valid(...Object.values(NOTIFICATION_TYPE))
        .required()

});

module.exports = {

    createNotificationSchema

};