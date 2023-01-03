import axios from "axios";
import {API_URL} from "../utils/env";

const request = axios.create({
    baseURL: API_URL,
});

request.interceptors.request.use(function (config) {
    return config;
});

request.interceptors.response.use(response => {
    return response;
});

export default request;
