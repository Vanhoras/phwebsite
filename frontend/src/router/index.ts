import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import LegalView from '../views/LegalView.vue';
import PrivacyView from '../views/PrivacyView.vue';

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
      name: 'games',
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
    console.log("savedPosition", savedPosition);
    console.log("name", to.name);
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
        el: '#games_view',
        behavior: 'smooth',
      };
    }
    if (to.name === 'websites') {
      return {
        el: '#websites_view',
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
        el: '#contact_view',
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
    if (savedPosition) {
      return savedPosition;
    }
  },
});

export default router
