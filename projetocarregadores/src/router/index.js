import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }, 
    {
      path: '/contato',
      name: 'contato',

      component: () => import('../views/ContatoView.vue'),
    },    
    {
      path: '/carregue',
      name: 'carregue',

      component: () => import('../views/CarregueView.vue'),
    },    
    {
      path: '/procure',
      name: 'procure',

      component: () => import('../views/ProcureView.vue'),
    },
    {
      path: '/avalie',
      name: 'avalie',

      component: () => import('../views/AvalieView.vue'),
    },
  ],
})

export default router
