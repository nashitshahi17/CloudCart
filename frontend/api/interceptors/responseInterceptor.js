import { STORAGE_KEYS } from "../../constants/storageKeys";
const setupResponseInterceptor = (api) =>{
    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                localStorage.removeItem(
                    STORAGE_KEYS.TOKEN
                );
                localStorage.removeItem(
                    STORAGE_KEYS.USER
                );
            }
            return Promise.reject(error);
        }
    );
}

export default setupResponseInterceptor