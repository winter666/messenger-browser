import AppLayout from "../layouts/AppLayout";
import Test from "../views/Test";

export default [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: 't',
                component: Test,
            }
        ],
    }
];