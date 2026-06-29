const Joi = require("joi");
const ORDER_STATUS = require("../constants/orderStatus");

const createOrderSchema = Joi.object({
    items: Joi.array()
        .items(
            Joi.object({
                productId: Joi.string().trim().required(),
                quantity: Joi.number().integer().min(1).required()
            })
        )
        .min(1)
        .required(),

    shippingAddress: Joi.string().trim().min(5).max(500).required()
});


const updateOrderStatusSchema = Joi.object({
    status: Joi.string()
        .valid(...Object.values(ORDER_STATUS))
        .required()

});

module.exports = {
    createOrderSchema,
    updateOrderStatusSchema
};