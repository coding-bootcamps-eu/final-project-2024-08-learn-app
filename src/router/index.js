import { createRouter, createWebHistory } from 'vue-router'
import { useUsersStore } from '@/stores/users'
import HomeView from '../views/HomeView.vue'
import TestView from '@/views/TestView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import LoginView from '@/views/LoginView.vue'
import LearnView from '@/views/LearnView.vue'
import ProfileView from '@/views/ProfileView.vue'
import AddCardView from '@/views/AddCardView.vue'
import QuizView from '@/views/QuizView.vue'
import Datenschutz from '@/views/Datenschutz.vue'
import Contact from '@/views/Kontakt.vue'
import Impressum from '@/views/Impressum.vue'
import RegisterView from '@/views/RegisterView.vue'
import WelcomeView from '@/views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView,
      meta: {
        isPublic: true,
      },
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test/:id',
      name: 'test',
      component: TestView,
    },
    {
      path: '/learn/:id',
      name: 'learn',
      component: LearnView,
    },
    {
      path: '/quiz/:id',
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
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        isPublic: true,
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/addcard/:id',
      name: 'addcard',
      component: AddCardView,
    },
    {
      path: '/datenschutz',
      name: 'Datenschutz',
      component: Datenschutz,
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Contact,
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: Impressum,
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
      return router.push('/welcome')
    }
    // Wenn User eingeloggt
  } else {
    // Versucht auf /login zu gehen
    if (to.fullPath === '/login') {
      // Weiterleiten auf /
      return router.push('/home')
    }
  }
})

export default router
