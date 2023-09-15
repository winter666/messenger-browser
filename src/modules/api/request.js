import axios from "axios";
import { getFullToken } from "../auth/_token";

class Request {

    constructor() {
        this.baseUrl = process.env.VUE_APP_API_URL;
    }

    get(params) {
        return axios.get(this.baseUrl + params.entity + params.uri, this.getConfig(params));
    }

    post(params) {
        return axios.post(this.baseUrl + params.entity + params.uri, params.data, this.getConfig(params));
    }

    getConfig(params) {
        const config = {};
        if (params.authorization) {
            config.headers = params.headers ?? {};
            config.headers.Authorization = getFullToken();
        }

        return config;
    }
}

export default new Request();
