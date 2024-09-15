import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '@/views/Contact.vue'
import Privacy from '@/views/Privacy.vue'
import TermsOfService from '@/views/TermsOfService.vue'
import Cookies from '@/views/Cookies.vue'
import Flota from '@/views/Flota.vue'
import Servicii from '@/views/Servicii.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/despre-noi',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      component: Privacy,
    },
    {
      path: '/terms-services',
      name: 'tos',
      component: TermsOfService,
    },
    {
      path: '/cookies',
      name: 'cookies',
      component: Cookies,
    },
    {
      path: '/flota',
      name: 'flota',
      component: Flota,
    },
    {
      path: '/servicii',
      name: 'servicii',
      component: Servicii,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // If there is a hash, scroll to the element with that ID
      return {
        el: to.hash,
        behavior: 'smooth', // Smooth scroll effect
      };
    } else if (savedPosition) {
      // If the user navigates back/forward, retain their scroll position
      return savedPosition;
    } else {
      // Default scroll to top
      return { top: 0 };
    }
  },
  
})

export default router
