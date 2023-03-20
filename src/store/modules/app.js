export default {
    state: {
        is_active_main_loader: false,
    },
    mutations: {
        SET_ACTIVE_MAIN_LOADER: (state, value) => {
            state.is_active_main_loader = value;
        }
    },
    actions: {
        enableMainLoader: ({ commit }) => {
            commit('SET_ACTIVE_MAIN_LOADER', true);
        },
        disableMainLoader: ({ commit }) => {
            commit('SET_ACTIVE_MAIN_LOADER', false);
        },
    },
    getters: {
        getActiveMainLoader: (state) => {
            return state.is_active_main_loader;
        }
    },
}
