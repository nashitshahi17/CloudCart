const cartRepository = require("../repositories/cartRepository");
const productClient = require("../clients/productClient");
const AppError = require("../errors/AppError");
const { HTTP_STATUS } = require("../constants/httpStatus");

class CartService {
    calculateCartTotal(cart) {
        cart.totalAmount = cart.items.reduce(
            (sum, item) => sum + item.subtotal,
            0
        );
    }

    async addToCart(userId, productId, quantity) {
        const product = await productClient.getProductById(productId);

        if (!product) {
            throw new AppError(
                HTTP_STATUS.NOT_FOUND,
                "Product not found"
            );
        }

        let cart = await cartRepository.findByUserId(userId);

        if (!cart) {
            cart = await cartRepository.create({
                userId,
                items: [],
                totalAmount: 0,
            });
        }

        const existingItem = cart.items.find(
            (item) => item.productId.toString() === productId
        );

        if (existingItem) {
            existingItem.quantity += quantity;
            existingItem.subtotal =
                existingItem.price * existingItem.quantity;
        } else {
            cart.items.push({
                productId: product._id,
                name: product.name,
                price: product.price,
                image: product.image,
                stock: product.stock,
                quantity,
                subtotal: quantity * product.price,
            });
        }

        this.calculateCartTotal(cart);

        await cartRepository.save(cart);

        return cart;
    }

    async saveCart(cart) {

        this.calculateCartTotal(cart);

        return await cartRepository.save(cart);

    }
    async getCart(userId) {

        const cart = await cartRepository.findByUserId(userId);

        if (!cart) {

            return {

                userId,

                items: [],

                totalAmount: 0

            };

        }

        return cart;

    }
    async updateCartItem(userId, productId, quantity) {
        if (quantity <= 0) {

            return await this.removeCartItem(

                userId,

                productId

            );

        }

        const cart = await cartRepository.findByUserId(userId);

        if (!cart) {

            throw new AppError(

                "Cart not found",

                HTTP_STATUS.NOT_FOUND

            );

        }

        const item = cart.items.find(

            item => item.productId.toString() === productId

        );

        if (!item) {

            throw new AppError(

                "Product not found in cart",

                HTTP_STATUS.NOT_FOUND

            );

        }

        item.quantity = quantity;

        item.subtotal = item.price * quantity;

        await this.saveCart(cart);

        return cart;

    }
    async removeCartItem(userId, productId) {

        const cart = await cartRepository.findByUserId(userId);

        if (!cart) {

            throw new AppError(

                "Cart not found",

                HTTP_STATUS.NOT_FOUND

            );

        }

        cart.items = cart.items.filter(

            item => item.productId.toString() !== productId

        );

        await this.saveCart(cart);

        return cart;

    }
    async clearCart(userId) {

        const cart = await cartRepository.findByUserId(userId);

        if (!cart) {

            return;

        }

        cart.items = [];

        cart.totalAmount = 0;

        await cartRepository.save(cart);

    }
}

module.exports = new CartService();