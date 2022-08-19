import AppLayout from "@/layouts/AppLayout";
import NoMessageChosenPage from "@/views/NoMessageChosenPage";
import Chat from "@/views/Chat/Chat";

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
                meta: { title: 'Список чатов' },
            },
            {
                name: 'Chat',
                path: 'me/:chat_id',
                component: Chat,
                meta: { title: 'Список чатов' },
            },
        ],
    }
];