<template>
  <main>
    <page-header class="page-header" headerText="Lernmodus" />
    <div class="card-container">
      <index-card
        v-if="firstCard"
        class="question-card"
        :text="firstCard.question"
      />
      <index-card
        v-if="firstCard"
        class="answer-card mt-1"
        colors="white"
        :text="firstCard.answer"
      />
    </div>
    <div class="link-container mt-1">
      <!-- 'Zurück'-Button bleibt im Layout sichtbar, aber unsichtbar durch 'visibility: hidden' -->
      <a 
        @click="previousCard"
        :style="{ visibility: isAtStart ? 'hidden' : 'visible' }">
        Zurück
      </a>
      
      <!-- 'Weiter'-Button bleibt im Layout sichtbar, aber unsichtbar, wenn das Ende erreicht ist -->
      <a 
        @click="nextCard"
        :style="{ visibility: isAtEnd ? 'hidden' : 'visible' }">
        Weiter
      </a>
    </div>
  </main>
</template>

<script>
import IndexCard from '@/components/IndexCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useUsersStore } from '@/stores/users.js'

export default {
  components: {
    IndexCard,
    PageHeader,
  },
  data() {
    return {
      store: useUsersStore(),
      currentCardIndex: 0,
    };
  },
  computed: {
    firstCard() {
      // Zugriff auf die erste Karte in der Liste der Lernkarten
      return this.store.learningCards[this.currentCardIndex] || null;
    },
    // Computed Properties um die Sichtbarkeit der 'Zurück' and 'Weiter' Buttons zu kontrollieren
    isAtStart() {
      return this.currentCardIndex === 0;
    },
    isAtEnd() {
      return this.currentCardIndex === this.store.learningCards.length - 1;
    }
  },
  methods: {
    nextCard() {
      if (!this.isAtEnd) {
        this.currentCardIndex++;
      }
    },
    previousCard() {
      if (!this.isAtStart) {
        this.currentCardIndex--;
      }
    },
  },
  created() {
    this.store.fetchLearningCards();
  },
};
</script>

<style scoped>
main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 1rem;
}

.page-header {
  display: none;
  max-width: 550px;
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

@media (min-width: 768px) {
  .page-header {
    display: block;
    min-width: 100%;
    padding-block: 2.5rem;
    margin-left: 0;
  }

  .card-container {
    flex-direction: row;
  }

  .question-card, .answer-card {
    transform: scaleY(1.2);
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

@media (min-width: 1160px) {

  .card-container {
    justify-content: space-between;
  }
}

</style>