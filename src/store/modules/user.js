export default {
    state: {
        user: {
            id: 1,
            name: 'Davut',
            email: 'sergeevdavut@mail.ru',
        }
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload;
        }
    },
    getters: {
        getUser(state) {
            return state.user;
        },
    },
    actions: {
        setUser({ commit }, payload) {
            commit('SET_USER', payload);
        },
    },
}