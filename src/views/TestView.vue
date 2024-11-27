<template>
  <main>
    <page-header class="page-header" headerText="Testmodus" />
    <section class="card shared-width">
      <section class="card-inner" :class="{ flipped: showAnswer }">
        <!-- Vorderseite mit der Frage -->
        <index-card
          class="card-front"
          :text="
            !showFinalResult
              ? currentCard?.question || 'Loading...'
              : 'Es gibt keine weiteren Fragen mehr in dieser Kategorie!'
          "
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
    <div class="reveal-container shared-width">
      <!-- Aufdecken-Button nur anzeigen, wenn es noch weitere Karten gibt -->
      <a
        class="reveal-btn"
        v-if="showLink && currentCardIndex < currentCategory.cards.length"
        href="#"
        @click.prevent="revealAnswer"
      >
        Aufdecken
      </a>

      <!-- Fortschritt nur anzeigen, wenn es noch weitere Karten gibt -->
      <p
        class="answer-count"
        v-if="currentCardIndex > 0 && currentCardIndex < currentCategory.cards.length && showLink"
      >
        Richtige Antworten: {{ rightAnswers }}/{{ currentCardIndex }} ({{ percentage }}%)
      </p>

      <!-- Endergebnis anzeigen, wenn alle Karten beantwortet wurden -->
      <p class="final-result" v-if="showFinalResult">
        Endergebnis: {{ rightAnswers }}/{{ currentCardIndex + 1 }} ({{ finalPercentage }}%)
      </p>
    </div>

    <!-- Buttons für richtig/falsch -->
    <section
      v-if="showButtons && currentCardIndex < currentCategory.cards.length"
      class="btn-container shared-width"
    >
      <main-button text="Richtig" colors="lightgreen" @click="submitAnswer(true)" />
      <main-button text="Falsch" colors="orange" @click="submitAnswer(false)" />
    </section>

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
      rightAnswers: 0,
      currentCardIndex: 0,
      showButtons: false,
      showAnswer: false,
      showFinalResult: false,
      showLink: true,
      delayBeforeNextCard: 600,
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
    percentage() {
      if (this.currentCardIndex === 0) return '0' // Vermeiden von Division durch 0
      const percentage = (this.rightAnswers * 100) / this.currentCardIndex
      // Prüfen, ob Ganzzahl oder Nachkommastellen vorhanden
      return percentage % 1 === 0 ? percentage : percentage.toFixed(2)
    },
    finalPercentage() {
      if (this.currentCardIndex === 0) return '0' // Vermeiden von Division durch 0
      const finalPercentage = (this.rightAnswers * 100) / (this.currentCardIndex + 1)
      // Prüfen, ob Ganzzahl oder Nachkommastellen vorhanden
      return finalPercentage % 1 === 0 ? finalPercentage : finalPercentage.toFixed(2)
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

  methods: {
    revealAnswer() {
      if (this.currentCardIndex < this.cards.length) {
        this.showAnswer = true
        this.showButtons = true
        this.showLink = false
      }
    },
    submitAnswer(result) {
      if (result) this.rightAnswers++

      // Prüfen, ob wir am Ende sind, bevor andere Änderungen passieren
      const isLastCard = this.currentCardIndex === this.cards.length - 1

      if (isLastCard) {
        // Alle Karten wurden beantwortet: Endzustand setzen
        this.showButtons = false
        this.showLink = false
        this.showAnswer = false
        this.showFinalResult = true
        return // Weitere Logik überspringen
      }

      // Wenn es nicht die letzte Karte ist, zum nächsten Zustand übergehen
      this.showAnswer = false

      setTimeout(() => {
        this.nextCard()
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
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;
  text-decoration: none;
  margin-left: 0;
}

a:hover {
  opacity: 0.8;
}

.reveal-container {
  display: flex;
  align-items: center;
  min-width: 350px;
  max-width: 650px;
  padding-top: 7rem;
  margin-left: 3rem;
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

.answer-count {
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 0.9rem;
  color: var(--clr-green-dark);
  font-weight: bold;
}

.final-result {
  text-align: center;
  width: 100%;
  font-size: 1.25rem;
  color: var(--clr-green-dark);
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
    justify-content: space-between;
  }

  .answer-count {
    font-size: 1rem;
  }
}

@media (min-width: 850px) {
  .shared-width {
    max-width: 500px;
  }

  .answer-count {
    font-size: 1.25rem;
    font-weight: 600;
  }
}
</style>
