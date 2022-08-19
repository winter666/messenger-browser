export default {
    state: {
        user: {
            id: 1,
            name: 'Davut',
            email: 'sergeevdavut@mail.ru',
            chats: [
                {
                    users: [
                        { id: 2, name: 'Audrey Clay' },
                        {  id: 1, name: 'Davut' },
                    ],
                    messages: [
                        {
                            user: { id: 2, name: 'Audrey Clay' },
                            content: '644 Vermont Court, Freelandville, Kentucky, 2619',
                            created_at: '2022-08-19 20:10:00'
                        },
                        {
                            user: {  id: 1, name: 'Davut' },
                            content: 'Hi!',
                            created_at: '2022-08-19 20:30:00'
                        },
                    ],
                },
                {
                    users: [
                        { id: 3, name: 'Tucker Kaufman' },
                        {  id: 1, name: 'Davut' },
                    ],
                    messages: [
                        {
                            user: { id: 1, name: 'Davut' },
                            content: 'Hi, how r u doin?',
                            created_at: '2022-08-19 20:30:00'
                        },
                        {
                            user: { id: 3, name: 'Tucker Kaufman' },
                            content: '887 Winthrop Street, Tryon, Florida, 3912',
                            created_at: '2022-08-19 20:50:00'
                        },
                    ],
                },
            ],
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