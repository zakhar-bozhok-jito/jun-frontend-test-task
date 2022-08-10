import {io} from "socket.io-client";

export const socket = io(":3002");

export const start = () => socket.emit("start");

export const init = () => {

    socket.on("connect", () => {

        const engine = socket.io.engine;

        socket.emit("start");

        engine.on("packet", ({type, data}) => {
            console.log(type, data);
        });
    })
}

export default {start, init};
