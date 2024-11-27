<template>
  <main class="main-content">
    <page-header class="page-header" headerText="Lernmodus" />
    <div class="card-container shared-width">
      <!-- Frage wird dynamisch eingebunden -->
      <index-card class="question-card" v-if="currentCard" :text="currentCard.question" />
      <!-- Antwort wird dynamisch eingebunden -->
      <index-card
        class="answer-card mt-1"
        v-if="currentCard"
        colors="white"
        :text="currentCard?.answers[currentCard?.rightAnswer]"
      />
    </div>
    <div class="link-container shared-width mt-1">
      <!-- Zurück-Button mit Steuerung -->
      <a
        @click="previousCard"
        :style="{ visibility: currentCardIndex === 0 ? 'hidden' : 'visible' }"
      >
        Zurück
      </a>
      <!-- Weiter-Button mit Steuerung -->
      <a
        @click="nextCard"
        :style="{ visibility: currentCardIndex === cards.length - 1 ? 'hidden' : 'visible' }"
      >
        Weiter
      </a>
    </div>
  </main>
</template>

<script>
import IndexCard from '@/components/IndexCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useUsersStore } from '@/stores/users'

export default {
  components: {
    IndexCard,
    PageHeader,
  },
  data() {
    return {
      store: useUsersStore(),
      currentCategory: { cards: [] },
      currentCardIndex: 0, // Start bei der ersten Karte
    }
  },
  computed: {
    // Aktuelle Kategorie-ID aus der Route
    categoryId() {
      return this.$route.params.id
    },

    // Karten der aktuellen Kategorie
    cards() {
      return this.currentCategory?.cards || []
    },

    // Aktuelle Karte basierend auf currentCardIndex
    currentCard() {
      return this.cards[this.currentCardIndex] || null
    },
  },
  methods: {
    // Nächste Karte
    nextCard() {
      if (this.currentCardIndex < this.cards.length - 1) {
        this.currentCardIndex++
      }
    },
    // Vorherige Karte
    previousCard() {
      if (this.currentCardIndex > 0) {
        this.currentCardIndex--
      }
    },
  },
  async created() {
    console.log('Current User:', this.store.currentUser);
    if (this.categoryId === 'all') {
      const categories = await this.store.fetchCategoryWithCards(this.categoryId)
      this.currentCategory.cards = categories.flatMap((category) => category.cards)
    } else {
      try {
        this.currentCategory = await this.store.fetchCategoryWithCards(this.categoryId)
      } catch (error) {
        console.error('Fehler beim Laden der Kategorie:', error)
      }
    }
  },
}
</script>

<style scoped>
main {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-inline: 2.5rem;
}

.page-header {
  display: none;
  max-width: 550px;
  margin-left: 0;
}

.card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 550px;
}

a {
  color: var(--clr-green-dark);
  cursor: pointer;
}

@media (min-width: 500px) {
  .main-container {
    width: 350px;
  }
}

@media (min-width: 768px) {
  .page-header {
    display: block;
    min-width: 100%;
    padding-block: 2.5rem;
  }

  .card-container {
    flex-direction: row;
  }

  .answer-card {
    margin-top: 0;
    margin-left: 1rem;
  }

  .link-container {
    min-width: 100%;
    margin-top: 2.5rem;
  }
}

@media (min-width: 800px) {
  .main-content {
    display: flex;
    align-items: flex-start;
  }

  .card-container {
    justify-content: space-between;
  }

  .shared-width {
    max-width: calc(750px + 2vw);
    min-width: calc(750px + 2vw);
  }
}

@media (min-width: 1160px) {
  .card-container {
    justify-content: space-between;
  }
  .question-card,
  .answer-card {
    min-width: 350px;
    max-width: 350px;
    min-height: 245px;
    max-height: 245px;
  }
}
</style>
