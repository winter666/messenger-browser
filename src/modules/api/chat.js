import request from './request';
import ApiEntity from "./apiEntity";

class Chat extends ApiEntity{
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
}

export default new Chat();
