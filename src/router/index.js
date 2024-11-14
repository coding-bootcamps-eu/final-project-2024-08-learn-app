import { createRouter, createWebHistory } from 'vue-router'
import { useUsersStore } from '@/stores/users'
import HomeView from '../views/HomeView.vue'
import TestView from '@/views/TestView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import LoginView from '@/views/LoginView.vue'
import LearnView from '@/views/LearnView.vue'
import ProfileView from '@/views/ProfileView.vue'
import QuizView from '@/views/QuizView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
    {
      path: '/learn',
      name: 'learn',
      component: LearnView,
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView,
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        isPublic: true,
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        isPublic: true,
      },
    },
  ],
})

router.beforeEach(function (to) {
  const isLoggedIn = useUsersStore().isLoggedIn

  // Ist User eingeloggt?
  if (!isLoggedIn) {
    // Ist die Route öffentlich?
    if (to.meta.isPublic) {
      // Wenn ja: Nichts machen
      return
    } else {
      // Wenn nicht öffentlich: Weiterleiten auf /login
      return router.push('/login')
    }
    // Wenn User eingeloggt
  } else {
    // Versucht auf /login zu gehen
    if (to.fullPath === '/login') {
      // Weiterleiten auf /
      return router.push('/')
    }
  }
})

export default router
