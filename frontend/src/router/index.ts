import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '../views/GamesView.vue'
import WebsitesView from '../views/WebsitesView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'games',
      component: GamesView
    },
    {
      path: '/',
      name: 'websites',
      component: WebsitesView
    },
    {
      path: '/',
      name: 'software',
      component: WebsitesView
    },
    {
      path: '/',
      name: 'contact',
      component: ContactView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (to.name === 'home') {
      return {
        top: 0,
        behavior: 'smooth',
      }
    }
    if (to.name === 'games') {
      return {
        el: '#games_view',
        behavior: 'smooth',
      }
    }
    if (to.name === 'websites') {
      return {
        el: '#websites_view',
        behavior: 'smooth',
      }
    }
    if (to.name === 'software') {
      return {
        el: '#software_view',
        behavior: 'smooth',
      }
    }
    if (to.name === 'contact') {
      return {
        el: '#contact_view',
        behavior: 'smooth',
      }
    }
  },
})

export default router
