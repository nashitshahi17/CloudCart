import api from "../../../shared/api/axios";

export async function getNotifications() {

    const response = await api.get("/notifications");

    return response.data.data;

}

export async function getNotification(id) {

    const response = await api.get(

        `/notifications/${id}`

    );

    return response.data.data;

}