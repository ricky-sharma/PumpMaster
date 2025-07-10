import axios from 'axios';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token && !config.url.includes('/auth/login')) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});
