import AppLayout from "../layouts/AppLayout";
import NoMessageChosenPage from "../views/NoMessageChosenPage";

export default [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: 't',
                component: NoMessageChosenPage,
                meta: { title: 'Список чатов' },
            }
        ],
    }
];