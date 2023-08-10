import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/home-page.vue';
import Contact from '../components/contact-page.vue';
import Reservation from "@/components/reservation-page.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/reservation', component: Reservation },
    { path: '/contact', component: Contact }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;