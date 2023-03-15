import { io } from "socket.io-client";

const init = () => {
    const socket = io('http://localhost:3000');

    socket.on("connect", () => {
        console.log(socket.id);
    });

    socket.on("connect_error", (e) => {
        console.log('error', e);
        setTimeout(() => {
            socket.connect();
        }, 1000);
    });
}

export default init;
