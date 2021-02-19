import axios from 'axios';
import { getToken } from './auth';
import { config } from '../configs/config';

const api = axios.create({
    baseUrl: config.URL
});

api.interceptors.request.use( async config => {
    const token = getToken();
    if(token)
        config.headers.Authorization = `Bearer ${token}`;

    return config;
});

export default api;