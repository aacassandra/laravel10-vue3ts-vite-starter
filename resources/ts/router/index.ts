import { createRouter, createWebHistory } from "vue-router";
import Home from "~/pages/Home.vue";
import About from "~/pages/About.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
];

const router = createRouter({
    // @ts-ignore
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
