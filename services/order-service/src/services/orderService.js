const orderRepository = require("../repositories/orderRepository");
const productClient = require("../clients/productClient");
const { getPagination } = require("../utils/pagination");
const AppError = require("../errors/AppError");
const HTTP_STATUS = require("../constants/httpStatus");
const MESSAGES = require("../constants/messages");
const ORDER_STATUS = require("../constants/orderStatus");
const cartClient = require('../clients/cartClient')

async function createOrder(userId, orderData, token) {

    const { shippingAddress } = orderData;

    if (!shippingAddress) {

        throw new AppError(
            "Shipping address is required",
            HTTP_STATUS.BAD_REQUEST
        );

    }

    // Get user's cart
    const cart = await cartClient.getCart(userId,token);

    if (!cart.items || cart.items.length === 0) {

        throw new AppError(
            "Cart is empty",
            HTTP_STATUS.BAD_REQUEST
        );

    }

    // Validate products with Product Service
    const validatedProducts = await productClient.validateProducts(cart.items);

    // Calculate total amount
    const totalAmount = validatedProducts.reduce(

        (total, item) => total + item.subtotal,

        0

    );

    // Create order
    const order = await orderRepository.create({

        userId,

        items: validatedProducts,

        totalAmount,

        shippingAddress,

        status: ORDER_STATUS.PENDING

    });

    // Clear cart after successful order creation
    await cartClient.clearCart(userId,token);
    return order;
}

async function getOrderById(orderId, userId,userRole) {
    const order = await orderRepository.findById(orderId);

    if (!order) {
        throw new AppError(MESSAGES.ORDER.NOT_FOUND,HTTP_STATUS.NOT_FOUND);
    }

    if (order.userId.toString() !== userId && userRole !== "ADMIN") {
        throw new AppError(MESSAGES.AUTH.ACCESS_DENIED,HTTP_STATUS.FORBIDDEN);
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