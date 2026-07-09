import api from "../../../shared/api/axios";

export async function getOrders(params = {}) {

    const { data } = await api.get("/orders", {
        params
    });

    return data;
}

export async function getOrder(orderId) {

    const { data } = await api.get(`/orders/${orderId}`);

    return data;
}