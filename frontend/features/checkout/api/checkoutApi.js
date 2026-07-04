import api from "../../../shared/api/axios";

export async function checkout(data) {

    const response = await api.post(

        "/api/orders",

        data

    );

    return response.data.data;

}