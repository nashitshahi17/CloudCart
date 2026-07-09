import api from "../../../shared/api/axios";

export async function getProfile() {

    const { data } = await api.get("/users/profile");

    return data;

}