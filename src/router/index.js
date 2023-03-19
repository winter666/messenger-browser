import { createRouter, createWebHistory } from "vue-router";
import routes from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to , from, next) => {
    if (Array.isArray(to.meta.middleware)) {
        to.meta.middleware.forEach(m => m(next));
    } else {
        to.meta.middleware(next);
    }
});

export default router;
