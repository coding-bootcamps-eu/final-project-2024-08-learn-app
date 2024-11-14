import { defineStore } from 'pinia'
import router from '@/router'

export const useUsersStore = defineStore('user', {
  state() {
    return {
      currentUser: {
        name: 'testinand',
      },
      categories: [],
      learningCards: [],
    }
  },

  getters: {
    isLoggedIn() {
      return this.currentUser !== null
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

    async fetchCategoriesWithCards() {
      try {
        const response = await fetch('http://localhost:3010/categories?_embed=cards')
        if (!response.ok) throw new Error('Fehler beim Laden der Kategorien mit Karten')
        this.categories = await response.json()
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

    async fetchLearningCards() {
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

    logout() {
      this.currentUser = null
      router.push('/login')
    },
  },
})

