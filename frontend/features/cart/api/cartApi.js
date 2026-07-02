import api from "../../../shared/api/axios";

export const getCart = async () => {

    const { data } = await api.get("/api/cart");

    return data;

};

export const addToCart = async (cartItem) => {

    const { data } = await api.post(

        "/api/cart",

        cartItem

    );

    return data;

};

export const updateCartItem = async ({

    productId,

    quantity,

}) => {

    const { data } = await api.patch(

        `/api/cart/${productId}`,

        {

            quantity,

        }

    );

    return data;

};

export const removeCartItem = async (productId) => {

    const { data } = await api.delete(

        `/api/cart/${productId}`

    );

    return data;

};

export const clearCart = async () => {

    const { data } = await api.delete(

        "/api/cart"

    );

    return data;

};