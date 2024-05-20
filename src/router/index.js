import { createRouter, createWebHistory } from 'vue-router'
import Loading from '../views/Loading/start.vue'
import Index from '../views/Index.vue'
const routes = [
  // {
  //   path: '/',
  //   name: 'Loading',
  //   component: Loading
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: Index
  // },
  
  {
    path: '/',
    name: 'home',
    component: Index
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;
