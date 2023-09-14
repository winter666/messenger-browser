import request from './request';
import ApiEntity from "./apiEntity";

class Chat extends ApiEntity {
    constructor() {
        super('chat');
    }

    sendMessage(content, chat_id, user_id) {
        return request.post({
            entity: this.entity,
            uri: `/${chat_id}/message/push`,
            data: { user_id, content },
        });
    }

    createChat(current_id, user_id) {
        return request.post({
            entity: this.entity,
            uri: '/new',
            data: {current_id, user_id},
        });
    }
}

export default new Chat();
