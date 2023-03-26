import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import PropertyShow from "./pages/PropertyShow.vue";
import SearchPage from "./pages/SearchPage.vue";
import AllPropertyPage from "./pages/AllPropertyPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/show',
            name: 'show',
            component: PropertyShow
        },
        {
            path: '/search',
            name: 'search',
            component: SearchPage
        },
        {
            path: '/all',
            name: 'all',
            component: AllPropertyPage
        },
    ]
})

export{router}