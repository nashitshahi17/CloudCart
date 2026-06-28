const orderRepository = require("../repositories/orderRepository");
const productClient = require("../clients/productClient");
const { getPagination } = require("../utils/pagination");
const AppError = require("../errors/AppError");
const HTTP_STATUS = require("../constants/httpStatus");
const MESSAGES = require("../constants/messages");
const ORDER_STATUS = require("../constants/orderStatus");

async function createOrder(userId, orderData){

    const {items,shippingAddress} = orderData;

    const validatedProducts = await productClient.validateProducts(items);

    const totalAmount = validatedProducts.reduce(
            (total, item) =>
                total + item.subtotal,
            0
        );

    return await orderRepository.create({
        userId,
        items: validatedProducts,
        totalAmount,
        shippingAddress,
        status: ORDER_STATUS.PENDING
    });
}

async function getOrderById(orderId) {
    const order = await orderRepository.findById(orderId);

    if (!order) {
        throw new AppError(MESSAGES.ORDER.NOT_FOUND,HTTP_STATUS.NOT_FOUND);
    }

    return order;
}

async function getUserOrders(userId, query) {

    const {page,limit,skip} = getPagination(query);

    const orders = await orderRepository.findByUserId(userId,{skip,limit});

    const totalOrders = await orderRepository.countDocuments({userId});

    return {
        orders,
        pagination: {
            currentPage: page,
            limit,
            totalOrders,
            totalPages: Math.ceil(totalOrders / limit)
        }
    };
}

async function updateOrderStatus(orderId, status) {

    const updatedOrder =await orderRepository.update(orderId,{status});

    if (!updatedOrder) {
        throw new AppError(MESSAGES.ORDER.NOT_FOUND,HTTP_STATUS.NOT_FOUND);
    }

    return updatedOrder;
}

async function deleteOrder(orderId) {

    const deletedOrder = await orderRepository.deleteById(orderId);

    if (!deletedOrder) {
        throw new AppError(MESSAGES.ORDER.NOT_FOUND,HTTP_STATUS.NOT_FOUND);
    }
    return deletedOrder;
}

module.exports = {
    createOrder,
    getOrderById,
    getUserOrders,
    updateOrderStatus,
    deleteOrder
};