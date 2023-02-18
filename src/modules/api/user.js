import request from './request';
import ApiEntity from "./apiEntity";

class User extends ApiEntity {

    constructor() {
        super('user');
    }

    getInfo(user_id) {
        return request.get({
            entity: this.entity,
            uri: `/${user_id}`
        });
    }
}

export default new User();
