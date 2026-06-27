const productService = require("../services/productService");
const { successResponse } = require("../utils/response");
const catchAsync = require("../utils/catchAsync");
const HTTP_STATUS = require("../constants/httpStatus");
const MESSAGES = require("../constants/messages");


const handleCreateProduct = catchAsync(async (req, res) => {
    const product = await productService.createProduct(req.body);
    return successResponse(res,HTTP_STATUS.CREATED,MESSAGES.PRODUCT.CREATE_SUCCESS,product);
});

const handleGetProducts = catchAsync(async (req, res) => {
    const result = await productService.getAllProducts(req.query);
    return successResponse(res,HTTP_STATUS.OK,MESSAGES.PRODUCT.FETCH_ALL_SUCCESS,result);
});

const handleGetProduct = catchAsync(async (req, res) => {
    const product = await productService.getProductById(req.params.id);
    return successResponse(res,HTTP_STATUS.OK,MESSAGES.PRODUCT.FETCH_SUCCESS,product);
});

const handleUpdateProduct = catchAsync(async (req, res) => {
    const updatedProduct = await productService.updateProduct(req.params.id,req.body);
    return successResponse(res,HTTP_STATUS.OK,MESSAGES.PRODUCT.UPDATE_SUCCESS,updatedProduct);
});

const handleDeleteProduct = catchAsync(async (req, res) => {
    await productService.deleteProduct(req.params.id);
    return successResponse(res,HTTP_STATUS.OK,MESSAGES.PRODUCT.DELETE_SUCCESS);
});

module.exports = {
    handleCreateProduct,
    handleGetProducts,
    handleGetProduct,
    handleUpdateProduct,
    handleDeleteProduct
};