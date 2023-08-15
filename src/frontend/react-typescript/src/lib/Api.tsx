// api.js
import axios from 'axios';

const API = axios.create({
    baseURL: '/api', // Replace with your API URL
    timeout: 10000, // You can adjust the timeout if needed
    headers: {
        'Content-Type': 'application/json',
    },
});

API.interceptors.request.use((config) => {
    // Get CSRF token from the cookie
    const csrfToken = document.cookie
        .split('; ')
        .find((row) => row.startsWith('XSRF-TOKEN='))
        ?.split('=')[1];

    if (csrfToken) {
        // Include CSRF token in the request header
        config.headers['X-XSRF-TOKEN'] = csrfToken;
    }

    return config;
});

export default API;