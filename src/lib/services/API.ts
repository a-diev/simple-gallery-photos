import axios from 'axios'

const API = axios.create({
    baseURL: 'https://api.unsplash.com',
    timeout: 1000,
});

export default API
