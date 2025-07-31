import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WorkDetail from '../views/WorkDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work/:projectId',
      name: 'WorkDetail',
      component: WorkDetail,
      props: true
    }
  ]
})

export default router
