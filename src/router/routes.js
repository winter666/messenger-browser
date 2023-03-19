import AppLayout from "@/layouts/AppLayout";
import NoMessageChosenPage from "@/views/NoMessageChosenPage";
import Chat from "@/views/Chat/Chat";
import Login from "@/views/Auth/Login";

import auth from '@/middleware/auth';
import guest from '@/middleware/guest';

export default [
    {
        path: '/',
        component: AppLayout,
        redirect: 'me',
        children: [
            {
                name: 'Main',
                path: 'me',
                component: NoMessageChosenPage,
                meta: { title: 'Список чатов', middleware: [auth] },
            },
            {
                name: 'Chat',
                path: 'me/:chat_id',
                component: Chat,
                meta: { title: 'Чат', middleware: [auth] },
            },
        ],
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
        meta: { title: 'Log in', middleware: [guest] },
    },
];
