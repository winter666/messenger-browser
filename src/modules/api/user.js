import ApiEntity from "./apiEntity";
import request from './request';

class User extends ApiEntity {
    constructor() {
        super('user');
    }

    findByEmailOrName(emailOrName) {
        return request.post({
            entity: this.entity,
            uri: `/getByEmailOrName`,
            data: {emailOrName},
            authorization: true,
        });
    }
}

export default new User();
