import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import LegalView from '../views/LegalView.vue';
import PrivacyView from '../views/PrivacyView.vue';
import GamesView from '@/views/GamesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: MainView
    },
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/',
      name: 'websites',
      component: MainView
    },
    {
      path: '/',
      name: 'software',
      component: MainView
    },
    {
      path: '/',
      name: 'contact',
      component: MainView
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView
    },
    {
      path: '/legal',
      name: 'legal',
      component: LegalView
    },
    {
      path: '/data-privacy',
      name: 'privacy',
      component: PrivacyView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    if (to.name === 'home') {
      return {
        top: 0,
        behavior: 'smooth',
      };
    }
    if (to.name === 'games') {
       return {
        top: 0,
      };
    }
    if (to.name === 'websites') {
      return {
        el: '#referencesLocation',
        behavior: 'smooth',
      };
    }
    if (to.name === 'software') {
      return {
        el: '#el_leasing',
        top: 120,
        behavior: 'smooth',
      };
    }
    if (to.name === 'contact') {
      return {
        el: '#contactLocation',
        behavior: 'smooth',
      };
    }
    if (to.name === 'legal') {
      return {
        top: 0,
      };
    }
    if (to.name === 'privacy') {
      return {
        top: 0,
      };
    }
  },
});

export default router
