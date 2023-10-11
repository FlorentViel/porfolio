import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css';
import welcome from '../components/welcome.vue'
import service from '../components/service.vue'
import Navbar from '../components/Navbar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: welcome, 
    },
    {
      path: '/service',
      name: 'service',
      component: service
    }
  ]
});


export default router
