import { io } from "socket.io-client";

const connection = async () => {
    const socket = io('http://localhost:3000');

    return new Promise((res, rej) =>  {
        socket.on("connect", () => {
            res(new MessengerSocket(socket));
        });

        socket.on("connect_error", (e) => {
            rej(e);
        });
    });
}

class MessengerSocket {
    socket = null;

    constructor(socket) {
        this.socket = socket;
    }

    isConnected() {
        return this.socket.connected;
    }

    getUserChats(user_id, callback) {
        this.socket.emit('get-user-chats', { user_id });
        this.socket.on('get-user-chats', callback);
    }
}

export default connection;
