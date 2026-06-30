import { STORAGE_KEYS } from "../../constants/storageKeys";
const setupRequestInterceptor = (api)=>{
    api.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem(
                STORAGE_KEYS.TOKEN
            );
    
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            console.log(config.headers.Authorization);
            return config;
        },
        (error) => Promise.reject(error)
    );
}

export default setupRequestInterceptor