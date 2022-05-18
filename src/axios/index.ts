import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

console.log(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_KEY);

api.interceptors.request.use(config => {
    config.url = config.url + '&appid=' + process.env.REACT_APP_API_KEY;
    return config;
});

export default api;