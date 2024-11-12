import { defineStore } from 'pinia'
import router from '@/router'

export const useUsersStore = defineStore('user', {
  state() {
    return {
      currentUser: {
        name: 'testinand',
      },
    }
  },

  getters: {
    isLoggedIn() {
      return this.currentUser !== null
    },
  },

  actions: {
    logout() {
      this.currentUser = null
      router.push('/login')
    },
  },
})
