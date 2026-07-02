const Joi = require('joi')

const addToCartValidator = Joi.object({

    productId: Joi.string()
        .required(),

    quantity: Joi.number()
        .integer()
        .min(0)
        .required()

});

const updateCartValidator = Joi.object({

    quantity: Joi.number()
        .integer()
        .min(0)
        .required()

});

module.exports = {

    addToCartValidator,

    updateCartValidator

};