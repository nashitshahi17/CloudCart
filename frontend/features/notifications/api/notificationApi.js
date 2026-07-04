import api from "../../../shared/api/axios";

export async function getNotifications() {

    const response = await api.get("/api/notifications");

    return response.data.data;

}

export async function getNotification(id) {

    const response = await api.get(

        `/api/notifications/${id}`

    );

    return response.data.data;

}