import { createStore } from "vuex";
import user from "./modules/user";
import chats from "./modules/chats";

export default createStore({
    modules: [ user, chats ],
})