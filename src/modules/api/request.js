import axios from "axios";

class Request {

    constructor() {
        this.baseUrl = process.env.VUE_APP_API_URL;
    }

    get(params) {
        return axios.get(this.baseUrl + params.entity + params.uri, {headers: params.headers ?? {}});
    }

    post(params) {
        return axios.post(this.baseUrl + params.entity + params.uri, params.data, {headers: params.headers ?? {}});
    }
}

export default new Request();
