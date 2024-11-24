<template>
  <main class="main-container">
    <page-header class="page-header" headerText="Testmodus" />
    <div class="main-content">
      <section class="card shared-width">
        <section class="card-inner" :class="{ flipped: showAnswer }">
          <!-- Vorderseite mit der Frage -->
          <index-card
            class="card-front"
            :text="currentCard?.question || 'Loading...'"
            colors="green"
          />
          <!-- Rückseite mit der Antwort -->
          <index-card
            class="card-back"
            :text="currentCard?.answers[currentCard?.rightAnswer] || 'Loading...'"
            :colors="showAnswer ? 'white' : 'green'"
          />
        </section>
      </section>

      <!-- Aufdecken-Button -->
      <div class="reveal-container">
        <a class="reveal-btn" v-if="showLink" href="#" @click.prevent="revealAnswer"> Aufdecken </a>
      </div>

      <!-- Buttons für richtig/falsch -->
      <section v-if="showButtons" class="btn-container shared-width">
        <main-button text="Richtig" colors="lightgreen" @click="submitAnswer(true)" />
        <main-button text="Falsch" colors="orange" @click="submitAnswer(false)" />
      </section>
    </div>
    <p class="exit" @click="exitTest">Exit</p>
  </main>
</template>

<script>
import MainButton from '@/components/MainButton.vue'
import IndexCard from '@/components/IndexCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useUsersStore } from '@/stores/users'

export default {
  components: {
    MainButton,
    IndexCard,
    PageHeader,
  },
  data() {
    return {
      store: useUsersStore(),
      currentCategory: { cards: [] },
      currentCardIndex: 0,
      showButtons: false,
      showAnswer: false, // Zustand für die Antwortanzeige
      showLink: true, // Zustand für den Aufdecken-Button
      delayBeforeNextCard: 600, // Verzögerung in Millisekunden
    }
  },
  computed: {
    categoryId() {
      return this.$route.params.id
    },
    cards() {
      return this.currentCategory?.cards || []
    },
    currentCard() {
      return this.cards[this.currentCardIndex] || null
    },
  },
  async created() {
    if (this.categoryId === 'all') {
      const categories = await this.store.fetchCategoryWithCards(this.categoryId)
      console.log(categories)
      this.currentCategory.cards = categories.flatMap((category) => category.cards)
    } else {
      try {
        this.currentCategory = await this.store.fetchCategoryWithCards(this.categoryId)
      } catch (error) {
        console.error('Fehler beim Laden der Kategorie:', error)
      }
    }
  },

  methods: {
    revealAnswer() {
      this.showAnswer = true // Zeigt die Rückseite der Karte
      this.showButtons = true // Zeigt die Buttons
      this.showLink = false // Versteckt den Aufdecken-Button
    },
    submitAnswer() {
      // Dreht die Karte zurück
      this.showAnswer = false

      // Warte, bis die Dreh-Animation abgeschlossen ist
      setTimeout(() => {
        this.nextCard() // Lade die nächste Karte
      }, this.delayBeforeNextCard)
    },
    nextCard() {
      if (this.currentCardIndex < this.cards.length - 1) {
        this.currentCardIndex++
        this.resetCard()
      }
    },
    resetCard() {
      this.showButtons = false
      this.showLink = true // Zeigt den Aufdecken-Button wieder an
    },
  },
}
</script>

<style scoped>
.main-container {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
}

.page-header {
  margin-bottom: 1rem;
  margin-left: 3rem;
}

.card {
  position: relative;
  aspect-ratio: 1 / 1;
  perspective: 1000px;
  margin-inline: 3rem;
}

.shared-width {
  width: 70%;
}

.card-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease-in-out;
  transform-style: preserve-3d;
  cursor: pointer;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 5px;
}

.card-front {
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
}

.reveal-btn {
  color: var(--clr-green-dark);
  margin-left: 3rem;
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  opacity: 0.8;
}

.reveal-container {
  padding-top: 7rem;
}

a {
  margin-left: 5rem;
  margin-top: 1rem;
}

.btn-container {
  display: flex;
  justify-content: space-between;
  max-width: 550px;
  margin-left: 3rem;
}

.exit {
  position: fixed;
  bottom: 7em;
  right: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
}

@media (min-width: 475px) {
  .card {
    aspect-ratio: 10 / 7;
  }
}

@media (min-width: 600px) {
  .main-container {
    margin-top: 2rem;
  }
  .reveal-container {
    padding-top: 5rem;
  }
}

@media (min-width: 850px) {
  .shared-width{
    max-width: 500px;
  }

  .exit {
    right:auto;
    left:30rem;
  }
}
</style>
