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
    };
  },
  computed: {
    currentUser() {
      return this.store.currentUser;
    },
    categoryId() {
      return this.$route.params.id;
    },
  },
  async mounted() {
  const highscores = await this.store.fetchHighscores(); // Die Highscores werden jetzt zurückgegeben
  // Diese sollten nun korrekt angezeigt werden
  this.loadCategoryQuestions(this.categoryId);
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
    async nextQuestion(isCorrect) {
    if (isCorrect) {
      this.rightAnswers++;
      // Highscore aktualisieren, wenn die Antwort korrekt ist
      await this.store.updateHighscore(this.currentUser.id, 10);
    }
    // Zur nächsten Frage wechseln
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  },
},
}
</script>

<style scoped>
/* Stile für das Quiz */
.page-header {
  margin-bottom: 20px;
}

.index-card {
  margin: 20px auto;
}

.display {
  margin-top: 10px;
  text-align: center;
}

.loading {
  text-align: center;
  font-size: 1.5em;
}
</style>

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


  a {
    font-weight: 300;
  }
}

</style>
