import api from "./axios";

export const createOrder = async (orderData) => {
    const response = await api.post("/api/orders", orderData);
    return response.data;
};

export const getOrders = async () => {
    const response = await api.get("/api/orders");
    return response.data;
};