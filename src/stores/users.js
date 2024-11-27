import { defineStore } from 'pinia'
import router from '@/router'

export const useUsersStore = defineStore('user', {
  state() {
    return {
      currentUser: {
        username: '',
        password: '',
        email: '',
        lastScore: '',
        lastPlayed: '',
      },
      categories: [],
      learningCards: [],
      highscore: {},
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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`)
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
            `${import.meta.env.VITE_API_URL}/categories/?id=48261793&id=93847210&id=27491837&_embed=cards`,
          )
        } else {
          response = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}?_embed=cards`)
        }
        if (!response.ok) throw new Error('Fehler beim Laden der Kategorien mit Karten')
        return await response.json()
      } catch (error) {
        console.error(error)
      }
    },

    async addCategory(newCategory) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`, {
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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/cards`)
        if (!response.ok) throw new Error('Fehler beim Laden der Lernkarten')
        this.learningCards = await response.json()
      } catch (error) {
        console.error(error)
      }
    },

    async addCard(newCard) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/cards`, {
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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/cards/${id}`, {
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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/cards/${id}`, {
          method: 'DELETE',
        })
        if (!response.ok) throw new Error('Fehler beim Löschen der Karte')
        this.learningCards = this.learningCards.filter((card) => card.id !== id)
      } catch (error) {
        console.error(error)
      }
    },

    async fetchUsers() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/`)
      if (!response.ok) throw new Error('Failed to fetch users')
      return await response.json()
    },

    async login(username, password) {
      const users = await this.fetchUsers()
      const user = users.find((u) => u.username === username && u.password === password)
      if (user) {
        this.currentUser = user
        localStorage.setItem('currentUser', JSON.stringify(user))
        router.push('/home')
        return true
      }
      return false
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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${this.currentUser.id}`, {
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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
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

    async fetchHighscores() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/highscores`)
        if (!response.ok) throw new Error('Failed to fetch highscores')
        this.highscores = await response.json()
        return this.highscores
      } catch (error) {
        console.error('Failed to fetch highscores:', error)
        return []
      }
    },

    async updateHighscore(userId, points) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/highscores`)
        if (!response.ok) throw new Error('Failed to fetch highscores')
        const highscores = await response.json()

        let userHighscore = highscores.find(hs => hs.userId === userId)

        if (userHighscore) {
          userHighscore.score += points
          await fetch(`${import.meta.env.VITE_API_URL}/highscores/${userHighscore.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userHighscore),
          })
          })
        } else {
          const newHighscore = {
            id: highscores.length + 1,
            userId: userId,
            categoryId: "0",
            score: points,
            answerHistory: [],
          }

          await fetch(`${import.meta.env.VITE_API_URL}/highscores`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newHighscore),
          })
          })
        }
      } catch (error) {
        console.error('Failed to update highscore:', error)
        console.error('Failed to update highscore:', error)
      }
    },
  },
})
    },
  },
})
