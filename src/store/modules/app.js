export default {
    state: {
        is_active_main_loader: false,
        is_modal_active: false,
        modal_component: '',
    },
    mutations: {
        SET_ACTIVE_MAIN_LOADER: (state, value) => {
            state.is_active_main_loader = value;
        },
        SET_ACTIVE_MODAL: (state, value) => {
            state.is_modal_active = value;
        },
        SET_MODAL_COMPONENT: (state, value) => {
            state.modal_component = value;
        },
    },
    actions: {
        // управление лоадером
        enableMainLoader: ({ commit }) => {
            commit('SET_ACTIVE_MAIN_LOADER', true);
        },
        disableMainLoader: ({ commit }) => {
            commit('SET_ACTIVE_MAIN_LOADER', false);
        },

        // управление модалкой
        enableModal: ({ commit }) => {
            commit('SET_ACTIVE_MODAL', true);
        },
        disableModal: ({ commit }) => {
            commit('SET_ACTIVE_MODAL', false);
        },
        setModalActivity: ({ commit }, payload) => {
            commit('SET_ACTIVE_MODAL', payload);
        },
        setModalComponentType: ({ commit }, payload) => {
            commit('SET_MODAL_COMPONENT', payload);
        },
    },
    getters: {
        getActiveMainLoader: (state) => {
            return state.is_active_main_loader;
        },
        getActiveModal: (state) => {
            return state.is_modal_active;
        },
        getModalComponentType: (state) => {
            return state.modal_component;
        },
    },
}
