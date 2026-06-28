const productRepository = require('../repositories/productRepository')
const {getPagination} = require('../utils/pagination')
const AppError = require('../errors/AppError')
const HTTP_STATUS = require('../constants/httpStatus')
const MESSAGES = require('../constants/messages')

async function createProduct(productData){
    return await productRepository.create(productData);
}

async function getProductById(productId){
    const product =await productRepository.findById(productId);

    if(!product){
        throw new AppError(MESSAGES.PRODUCT.NOT_FOUND,HTTP_STATUS.NOT_FOUND);
    }

    return product;
}

async function getAllProducts(query){

    const {page,limit,skip} = getPagination(query);

    const filter={};

    const sort={};

    if(query.category){

        filter.category=
            query.category;

    }

    if(query.minPrice){

        filter.price={
            ...filter.price,

            $gte:Number(query.minPrice)
        };

    }

    if(query.maxPrice){

        filter.price={
            ...filter.price,

            $lte:Number(query.maxPrice)
        };
    }

    if(query.sortBy){
        sort[query.sortBy]=query.order==="desc" ?-1:1;
    }

    const products= await productRepository.findAll({filter,sort,skip,limit});

    const totalProducts= await productRepository.countDocuments(filter);

    return{
        products,
        pagination:{
            currentPage:page,
            limit,
            totalProducts,
            totalPages: Math.ceil(totalProducts/limit)
        }
    };
}

async function updateProduct(productId, updateData){

    const updatedProduct = await productRepository.update(productId,updateData);

    if(!updatedProduct){
        throw new AppError(MESSAGES.PRODUCT.NOT_FOUND,HTTP_STATUS.NOT_FOUND);
    }

    return updatedProduct;
}

async function deleteProduct(productId){

    const deletedProduct = await productRepository.deleteById(productId);

    if(!deletedProduct){
        throw new AppError(MESSAGES.PRODUCT.NOT_FOUND,HTTP_STATUS.NOT_FOUND);
    }

    return deletedProduct;
}

async function getProductForOrder(productId) {
    const product = await productRepository.findById(productId,"name price stock");

    if (!product) {
        throw new AppError(MESSAGES.PRODUCT.NOT_FOUND,HTTP_STATUS.NOT_FOUND);
    }

    return product;
}

async function getProductsForOrder(productIds){
    const products = await productRepository.findByIds( productIds,"name price stock");
    return products;
}

module.exports={
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getProductForOrder,
    getProductsForOrder
};