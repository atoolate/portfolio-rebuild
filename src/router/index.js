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
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0 }
  }
})

export default router
