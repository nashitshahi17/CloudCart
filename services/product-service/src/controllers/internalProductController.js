const productService = require("../services/productService");
const catchAsync = require("../utils/catchAsync");
const HTTP_STATUS = require("../constants/httpStatus");
const { successResponse } = require("../utils/response");

const handleGetProductInternal = catchAsync(async (req, res) => {
    const product = await productService.getProductForOrder(req.params.id);
    return successResponse(res, HTTP_STATUS.OK, "Internal Product Fetch Successful", product);
});

const handleBulkProductsInternal = catchAsync(async(req,res)=>{
    const {productIds}=req.body;
    const products= await productService.getProductsForOrder(productIds);
    return successResponse(res,HTTP_STATUS.OK,"Products fetched successfully",products);
});

const handleValidateProducts = catchAsync(async (req, res) => {
    const { items } = req.body;
    const products = await productService.validateProducts(items);
    return successResponse(res,HTTP_STATUS.OK,"Products validated successfully",products);
});

module.exports = {
    handleGetProductInternal,
    handleBulkProductsInternal,
    handleValidateProducts
};