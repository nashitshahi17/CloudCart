import axios from 'axios'
import { STORAGE_KEYS } from '../constants/storageKeys'
import setupRequestInterceptor from './interceptors/requestInterceptor'
import setupResponseInterceptor from './interceptors/responseInterceptor'


const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    },
    timeout: 10000,
})

setupRequestInterceptor(api);
setupResponseInterceptor(api);

export default api