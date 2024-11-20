<template>
  <main>
    <page-header class="page-header" headerText="Quizmodus" />
    <index-card v-if="currentQuestion" class="index-card" :text="currentQuestion.question">
      <quiz-card
        :answers="currentQuestion.answers"
        :rightAnswer="currentQuestion.answers[currentQuestion.rightAnswer]"
      />
    </index-card>
    <p v-if="!currentQuestion" class="loading">Lade Frage...</p>
    <router-link :to="'/'" class="exit">Exit</router-link>
  </main>
</template>

<script>
import IndexCard from '@/components/IndexCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import QuizCard from '@/components/QuizCard.vue'
import { useUsersStore } from '@/stores/users'

export default {
  components: {
    IndexCard,
    PageHeader,
    QuizCard,
  },
  data() {
    return {
      store: useUsersStore(),
      currentQuestion: null, // Die aktuell angezeigte Frage
    }
  },
  computed: {
    categoryId() {
      return this.$route.params.id;
    },
  },
  mounted() {
    this.loadCategoryQuestions(this.$route.params.id) // ID der Kategorie
  },
  methods: {
    async loadCategoryQuestions(categoryId) {
      const categoryWithCards = await this.store.fetchCategoryWithCards(categoryId)
      if (categoryWithCards && categoryWithCards.cards.length > 0) {
        this.currentQuestion = categoryWithCards.cards[0] // Erste Frage
      }
    },
  },
}
</script>

<style scoped>
main {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 1rem;
}

.index-card {
  align-items: flex-start;
}

.page-header {
  display: none;
  max-width: 550px;
}

.exit {
  position: fixed;
  bottom: calc(1.5rem + 2vw);
  right: calc(1.5rem + 2vw);

  cursor: pointer;

  text-decoration: none;

  font-size: clamp(1rem, 1vw + 0.5rem, 1.5rem);
  color: var(--clr-green-dark);
}

.exit:hover {
  color: var(--clr-red);
}

@media (min-width: 768px) {
  .page-header {
    display: block;
  }
  .index-card {
    margin-left: 5rem;
    margin-top: 1rem;
  }

  a {
    font-weight: 300;
  }
}
</style>
