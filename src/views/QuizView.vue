<template>
  <main>
    <page-header class="page-header" headerText="Quizmodus" />
    <index-card
      v-if="questions.length > 0 && questions[currentIndex]"
      class="index-card"
      :text="questions[currentIndex].question"
    >
      <quiz-card
        :answers="questions[currentIndex].answers"
        :rightAnswer="questions[currentIndex].rightAnswer"
        :isLastQuestion="currentIndex === questions.length - 1"
        @next="nextQuestion"
      />
      <p class="display">
        {{ rightAnswers }} / {{ questions.length }} richtig beantwortet!
        <!-- Insgesamt gibt es in dieser Kategorie {{ questions.length }} Fragen. -->
      </p>
    </index-card>
    <p v-if="questions.length === 0" class="loading">Lade Frage...</p>

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
      questions: [],
      currentIndex: 0,
      rightAnswers: 0,
    }
  },
  computed: {
    categoryId() {
      return this.$route.params.id
    },
  },
  mounted() {
    this.loadCategoryQuestions(this.categoryId)
  },
  methods: {
    async loadCategoryQuestions(categoryId) {
      if (categoryId === 'all') {
        const categories = await this.store.fetchCategoryWithCards(categoryId)
        this.questions = categories.flatMap((category) => category.cards)
        this.currentIndex = 0
      } else {
        const categoryWithCards = await this.store.fetchCategoryWithCards(categoryId)
        if (categoryWithCards && categoryWithCards.cards.length > 0) {
          this.questions = categoryWithCards.cards
          this.currentIndex = 0
        }
      }
    },
    nextQuestion(isCorrect) {
      // Wenn die Antwort korrekt ist, rightAnswers erhöhen
      if (isCorrect) {
        this.rightAnswers++
      }
      // Zur nächsten Frage gehen
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++
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

.display {
  font-size: 0.9rem;
  margin-top: 1.25rem;
}

.exit {
  position: fixed;
  bottom: 6rem;
  right: calc(1rem + 2vw);

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
    margin-left: 2rem;
  }
  .index-card {
    margin-left: 2rem;
    margin-top: 1rem;
    max-width: 700px;
  }

  .exit {
    right: calc(1rem + 1vw);
    bottom: calc(6rem + 5vh);
  }

  a {
    font-weight: 300;
  }
}

@media (min-width: 900px) {
  .exit {
    right: calc(1rem + 15vw);
  }
}

@media (min-width: 1125px) {
  .exit {
    right: calc(1rem + 31vw);
  }
}

@media (min-width: 1300px) {
  .exit {
    right: calc(1rem + 42vw);
  }
}
</style>
