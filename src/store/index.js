import { createStore } from "vuex";
import user from "./modules/user";
import chats from "./modules/chats";
import app from "./modules/app";

export default createStore({
    modules: [ user, chats, app ],
})
