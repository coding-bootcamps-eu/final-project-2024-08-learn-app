import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import TestView from '@/views/TestView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },
//     {
//       path: '/test',
//       name: 'test',
//       component: TestView,
//     },
//   ],
// })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/LayoutView.vue'),
      // redirect: '/MainPart',
      children: [
        {
          path: 'HomeView',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'TestView',
          component: () => import('@/views/TestView.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/LoginView.vue')
    }
  ]
});


export default router
