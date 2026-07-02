import api from "../../../shared/api/axios";

export async function placeOrder(orderData) {

    const { data } = await api.post(

        "/api/orders",

        orderData

    );

    return data;

}