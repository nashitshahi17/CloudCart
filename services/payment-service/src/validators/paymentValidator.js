const Joi = require("joi");
const PAYMENT_METHOD = require("../constants/paymentMethod");

const createPaymentSchema = Joi.object({

    orderId: Joi.string()
        .required(),

    userId: Joi.string()
        .required(),

    amount: Joi.number()
        .positive()
        .required(),

    method: Joi.string()
        .valid(...Object.values(PAYMENT_METHOD))
        .required()

});

module.exports = {

    createPaymentSchema

};