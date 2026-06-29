const Joi = require('joi')

const createProductSchema = Joi.object({
    name: Joi.string().trim().min(2).max(100).required(),
    description: Joi.string().trim().min(5).max(1000).required(),
    price: Joi.number().min(0).required(),
    stock: Joi.number().integer().min(0).required(),
    category: Joi.string().trim().required()
});

const updateProductSchema = Joi.object({
    name: Joi.string().trim().min(2).max(100),
    description: Joi.string().trim().min(5).max(1000),
    price: Joi.number().min(0),
    stock: Joi.number().integer().min(0),
    category: Joi.string().trim()
}).min(1);

module.exports = {
    createProductSchema,
    updateProductSchema
};