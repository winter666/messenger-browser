export default {
    state: {
        chats: [],
    },
    mutations: {
        "SOCKET_get-user-chats"(state, payload) {
            state.chats = payload;
        },
        APPEND_MSG(state, payload) {
           const idx = state.chats.findIndex(c => c.id === payload.chat_id);
           state.chats[idx].messages.push(payload.message);
        },
        "SOCKET_send-message"(state, payload) {
            const idx = state.chats.findIndex(c => c.id === payload.id);
            state.chats[idx] = payload;
        }
    },
    getters: {
        getChats(state) {
            return state.chats;
        },
    },
    actions: {
        "SOCKET_get-user-chats"({ commit }, payload) {
            commit('SOCKET_get-user-chats', payload);
        },
        appendMessage({ commit }, payload) {
            commit('APPEND_MSG', payload);
        },
        clearChats({ commit }) {
            commit('SOCKET_get-user-chats', []);
        },
        "SOCKET_send-message"({ commit }, payload) {
            commit('SOCKET_send-message', payload);
        }
    },
}
