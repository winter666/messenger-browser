import axios from "axios";

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
            config.headers.Authorization = localStorage.getItem('token_type') + " " + localStorage.getItem('access_token');
        }

        return config;
    }
}

export default new Request();
