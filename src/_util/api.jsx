import axios from 'axios';

const httpClient = axios.create({
    baseURL: "http://localhost:5000/api/",
    // baseURL:"crm-backend-7vj1.vercel.app/api/"
    // baseURL:"https://joptimen-backend-542774489131.herokuapp.com/api/"
});

httpClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem('user-token');
    // config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
}, function (error) { return Promise.reject(error); });

httpClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response && error.response.status === 403) {
        localStorage.removeItem('user-token');
        window.location.href = '/login';
    }
    return Promise.reject(error);
});

export default httpClient;