import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Confidentialite from '@/views/Confidentialite.vue';
import Legal from '@/views/Legal.vue';
import Carte from '@/views/Carte.vue';
import Contact from '@/views/Contact.vue';
import Presentation from '@/views/Presentation.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/confidentialite', component: Confidentialite},
        { path: '/legal', component: Legal},
        { path: '/carte', component: Carte},
        { path: '/contact', component: Contact},
        { path: '/presentation', component: Presentation},
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        }
        if (to.hash) {
          return { el: to.hash };
        }
        return { x: 0, y: 0 };
      },
    linkActiveClass: 'active'
});

export default router