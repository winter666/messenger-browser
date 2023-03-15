export default {
    state: {
        chats: [],
    },
    mutations: {
        SET_CHATS(state, payload) {
            state.chats = payload;
        },
        APPEND_MSG(state, payload) {
           const idx = state.chats.findIndex(c => c.id === payload.chat_id);
           state.chats[idx].messages.push(payload.message);
        }
    },
    getters: {
        getChats(state) {
            return state.chats;
        },
    },
    actions: {
        setChats({ commit }, payload) {
            commit('SET_CHATS', payload);
        },
        appendMessage({ commit }, payload) {
            commit('APPEND_MSG', payload);
        }
    },
}
