import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Confidentialite from '@/views/Confidentialite.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/confidentialite', component: Confidentialite},
    ],
    linkActiveClass: 'active'
});

export default router