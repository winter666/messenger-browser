import axios from "axios";

class Request {

    constructor() {
        this.baseUrl = process.env.VUE_APP_API_URL;
    }

    get(params) {
        return axios.get(this.baseUrl + params.entity + params.uri);
    }

    post(params) {
        return axios.post(this.baseUrl + params.entity + params.uri, params.data);
    }
}

export default new Request();
