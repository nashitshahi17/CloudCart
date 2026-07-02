const Cart = require("../models/Cart");

class CartRepository {

    async findByUserId(userId) {

        return await Cart.findOne({ userId });

    }

    async create(cartData) {

        return await Cart.create(cartData);

    }

    async save(cart) {

        return await cart.save();

    }

    async deleteByUserId(userId) {

        return await Cart.findOneAndDelete({ userId });

    }

}

module.exports = new CartRepository();