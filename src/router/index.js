import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Boost from '../views/Boost/index.vue'
import Bots from '../views/Bots/index.vue'
import setup from '../views/setup/index.vue'
import Ranking from '../views/Ranking/index.vue'
import Task from '../views/Task/index.vue'
import shop from '../views/shop/index.vue'
const routes = [
    {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Index
  },
  {
    path: '/Boost',
    name: 'Boost',
    component: Boost
  },
  {
    path: '/Bots',
    name: 'Bots',
    component: Bots
  }, {
    path: '/setup',
    name: 'setup',
    component: setup
  },
  {
    path: '/Ranking',
    name: 'Ranking',
    component: Ranking
  },
  {
    path: '/Task',
    name: 'Task',
    component: Task
  },
  {
    path: '/shop',
    name: 'shop',
    component: shop
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
