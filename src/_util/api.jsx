import axios from 'axios';

const httpClient = axios.create({
    // baseURL: "http://localhost:5000/api/",
    baseURL: "http ://api.projecttesting.pro/api/"
});

httpClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem('authToken');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
}, function (error) { return Promise.reject(error); });



export default httpClient;

// server {
//     listen 80;
//     server_name api.alkauseradmissions.net www.api.alkauseradmissions.net;

//     location / {
//         proxy_pass http://localhost:5000;
//             proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection 'upgrade';
//         proxy_set_header Host $host;
//         proxy_cache_bypass $http_upgrade;
//     }
// }

// server {
//     listen 80;
//     server_name alkauseradmissions.net www.alkauseradmissions.net; 
//     root /root/Al-Kauser-Frontend/build; 

//     location / {
//         try_files $uri $uri/ /index.html;
//     }

//     location ~ \.css$ {
//         types {
//             text/css css;
//         }
//     }

// }


// server {
//     listen 80;
//     root /root/CRM_Frontend/build; 

//     location / {
//         try_files $uri $uri/ /index.html;
//     }

//     location ~ \.css$ {
//         types {
//             text/css css;
//         }
//     }

// }