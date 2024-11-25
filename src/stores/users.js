import { defineStore } from 'pinia'
import router from '@/router'

export const useUsersStore = defineStore('user', {
  state() {
    return {
      currentUser: {
        username: '',
        password: '',
        email: '',
        points: '',
        lastCategory: '',
      },
      categories: [],
      learningCards: [],
    }
  },

  getters: {
    isLoggedIn() {
      return !!this.currentUser.id
    },
  },

  actions: {
    async fetchCategories() {
      try {
        const response = await fetch('http://localhost:3010/categories')
        if (!response.ok) throw new Error('Fehler beim Laden der Kategorien')
        this.categories = await response.json()
      } catch (error) {
        console.error(error)
      }
    },

    async fetchCategoryWithCards(id) {
      try {
        let response
        if (id === 'all') {
          response = await fetch(
            'http://localhost:3010/categories/?id=48261793&id=93847210&id=27491837&_embed=cards',
          )
        } else {
          response = await fetch('http://localhost:3010/categories/' + id + '?_embed=cards')
        }
        if (!response.ok) throw new Error('Fehler beim Laden der Kategorien mit Karten')
        return await response.json()
      } catch (error) {
        console.error(error)
      }
    },

    async addCategory(newCategory) {
      try {
        const response = await fetch('http://localhost:3010/categories', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCategory),
        })
        if (!response.ok) throw new Error('Fehler beim Hinzufügen der Kategorie')
        const addedCategory = await response.json()
        this.categories.push(addedCategory)
      } catch (error) {
        console.error(error)
      }
    },

    async updateCategory(id, updatedCategory) {
      try {
        const response = await fetch(`http://localhost:3010/categories/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedCategory),
        })
        if (!response.ok) throw new Error('Fehler beim Aktualisieren der Kategorie')
        const updated = await response.json()
        const index = this.categories.findIndex((cat) => cat.id === id)
        if (index !== -1) {
          this.categories[index] = updated
        }
      } catch (error) {
        console.error(error)
      }
    },

    async deleteCategory(id) {
      try {
        const response = await fetch(`http://localhost:3010/categories/${id}`, {
          method: 'DELETE',
        })
        if (!response.ok) throw new Error('Fehler beim Löschen der Kategorie')
        this.categories = this.categories.filter((cat) => cat.id !== id)
      } catch (error) {
        console.error(error)
      }
    },

    async fetchLearningCard() {
      try {
        const response = await fetch('http://localhost:3010/cards')
        if (!response.ok) throw new Error('Fehler beim Laden der Lernkarten')
        this.learningCards = await response.json()
      } catch (error) {
        console.error(error)
      }
    },

    async addCard(newCard) {
      try {
        const response = await fetch('http://localhost:3010/cards', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCard),
        })
        if (!response.ok) throw new Error('Fehler beim Hinzufügen der Karte')
        const addedCard = await response.json()
        this.learningCards.push(addedCard)
      } catch (error) {
        console.error(error)
      }
    },

    async updateCard(id, updatedCard) {
      try {
        const response = await fetch(`http://localhost:3010/cards/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedCard),
        })
        if (!response.ok) throw new Error('Fehler beim Aktualisieren der Karte')
        const updated = await response.json()
        const index = this.learningCards.findIndex((card) => card.id === id)
        if (index !== -1) {
          this.learningCards[index] = updated
        }
      } catch (error) {
        console.error(error)
      }
    },

    async deleteCard(id) {
      try {
        const response = await fetch(`http://localhost:3010/cards/${id}`, {
          method: 'DELETE',
        })
        if (!response.ok) throw new Error('Fehler beim Löschen der Karte')
        this.learningCards = this.learningCards.filter((card) => card.id !== id)
      } catch (error) {
        console.error(error)
      }
    },

    async fetchUsers() {
      const response = await fetch('http://localhost:3010/users/')
      if (!response.ok) throw new Error('Failed to fetch users')
      return await response.json()
    },

    async login(username, password) {
      try {
        const users = await this.fetchUsers()
        const user = users.find((user) => user.username === username && user.password === password)

        if (user) {
          this.currentUser = user
          localStorage.setItem('currentUser', JSON.stringify(user))
          router.push('/home')
        } else {
          throw new Error('Invalid username or password')
        }
      } catch (error) {
        console.error('Login error:', error)
      }
    },
    logout() {
      localStorage.removeItem('currentUser')
      this.currentUser = { username: '', password: '' }
      router.push('/login')
    },
    async updateUserDetails(newUsername, newPassword) {
      if (newUsername) this.currentUser.username = newUsername
      if (newPassword) this.currentUser.password = newPassword

      localStorage.setItem('currentUser', JSON.stringify(this.currentUser))

      try {
        const response = await fetch(`http://localhost:3010/users/${this.currentUser.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...this.currentUser,
          }),
        })

        if (response.ok) {
          this.currentUser = await response.json()
        } else {
          console.error('Failed to update user. Status:', response.status)
        }
      } catch (error) {
        console.error(error)
      }
    },
    initializeUser() {
      const storedUser = JSON.parse(localStorage.getItem('currentUser'))
      if (storedUser) {
        this.currentUser = storedUser
      }
    },
    async register(newUser) {
      try {
        const response = await fetch('http://localhost:3010/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })

        if (!response.ok) throw new Error('Failed to register user.')

        const registeredUser = await response.json()
        this.currentUser = registeredUser
        localStorage.setItem('currentUser', JSON.stringify(registeredUser))
        router.push('/home')
      } catch (error) {
        console.error('Registration error:', error)
        throw error
      }
    },
  },
})
