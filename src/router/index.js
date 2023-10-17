import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css';
import welcome from '../components/welcome.vue'
import service from '../components/service.vue'
import projet from '../components/projet.vue'
import contact from '../components/contact.vue'
import Navbar from '../components/Navbar.vue'
import footer from '../components/footer.vue'


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
    },
    {
      path: '/projet',
      name: 'projet',
      component: projet
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
});


export default router
